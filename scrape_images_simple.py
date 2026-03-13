"""
Simple image scraper for arkcontemporary.co.za
Uses urllib with proper headers to fetch pages and extract image URLs
"""

import urllib.request
import urllib.error
import re
import json
from html.parser import HTMLParser

BASE_URL = "https://arkcontemporary.co.za"

# Pages to scrape
PAGES = [
    BASE_URL,
    f"{BASE_URL}/about/",
    f"{BASE_URL}/grietjie-lee/",
    f"{BASE_URL}/elsamaritz/",
    f"{BASE_URL}/louisolivier/",
    f"{BASE_URL}/stellaolivier/",
    f"{BASE_URL}/wesselvanhuyssteen/",
    f"{BASE_URL}/michelenigrini/",
    f"{BASE_URL}/exhibitions/",
]

class ImageExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.images = []
    
    def handle_starttag(self, tag, attrs):
        if tag == 'img':
            attrs_dict = dict(attrs)
            src = attrs_dict.get('src') or attrs_dict.get('data-src') or attrs_dict.get('data-lazy-src')
            if src:
                alt = attrs_dict.get('alt', '')
                # Convert relative URLs to absolute
                if src.startswith('//'):
                    src = 'https:' + src
                elif src.startswith('/'):
                    src = BASE_URL + src
                elif not src.startswith('http'):
                    src = BASE_URL + '/' + src
                
                if src.startswith(BASE_URL) or src.startswith('https://arkcontemporary'):
                    self.images.append({'src': src, 'alt': alt})

def fetch_page(url):
    """Fetch a page with proper headers"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive',
    }
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=30) as response:
            return response.read().decode('utf-8')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_images_from_html(html):
    """Extract image URLs from HTML content"""
    # Also use regex as backup
    pattern = r'src=["\']([^"\']+?\.(?:jpg|jpeg|png|gif|webp|svg))["\']'
    matches = re.findall(pattern, html, re.IGNORECASE)
    return matches

def scrape_all():
    """Scrape all pages for images"""
    results = {}
    
    for url in PAGES:
        print(f"Scraping: {url}")
        html = fetch_page(url)
        
        if html:
            # Use HTML parser
            parser = ImageExtractor()
            try:
                parser.feed(html)
            except Exception as e:
                print(f"  Parser error: {e}")
            
            # Also use regex
            regex_images = extract_images_from_html(html)
            
            # Combine results
            all_images = []
            seen = set()
            
            for img in parser.images:
                if img['src'] not in seen:
                    all_images.append(img)
                    seen.add(img['src'])
            
            for src in regex_images:
                if src not in seen:
                    if src.startswith('//'):
                        src = 'https:' + src
                    elif src.startswith('/'):
                        src = BASE_URL + src
                    all_images.append({'src': src, 'alt': ''})
                    seen.add(src)
            
            results[url] = all_images
            print(f"  Found {len(all_images)} images")
            
            # Print image URLs for reference
            for img in all_images[:10]:  # Show first 10
                print(f"    - {img['src']}")
                if img['alt']:
                    print(f"      Alt: {img['alt']}")
        else:
            results[url] = []
            print(f"  No content retrieved")
        print()
    
    # Save results
    with open('scraped_images.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("=" * 60)
    print("Results saved to scraped_images.json")
    print("=" * 60)
    
    return results

if __name__ == "__main__":
    scrape_all()
