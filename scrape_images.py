"""
Scrape images from arkcontemporary.co.za
Extracts artist portraits, artwork images, and gallery images
"""

import requests
from bs4 import BeautifulSoup
import json
import os

BASE_URL = "https://arkcontemporary.co.za"

# Artist URLs based on discovered structure
ARTIST_PAGES = [
    "grietjielee",
    "elsamaritz", 
    "louisolivier",
    "stellaolivier",
    "wesselvanhuyssteen",
    "michelenigrini"
]

def get_soup(url):
    """Fetch and parse a URL"""
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
    try:
        response = requests.get(url, headers=headers, timeout=30)
        response.raise_for_status()
        return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return None

def extract_images_from_page(url, page_type="artist"):
    """Extract all images from a page"""
    soup = get_soup(url)
    if not soup:
        return []
    
    images = []
    for img in soup.find_all('img'):
        src = img.get('src') or img.get('data-src')
        if src and src.startswith('http'):
            alt = img.get('alt', '')
            images.append({'url': src, 'alt': alt})
        elif src:
            # Relative URL
            full_url = BASE_URL + src if src.startswith('/') else src
            alt = img.get('alt', '')
            images.append({'url': full_url, 'alt': alt})
    
    return images

def scrape_artist_pages():
    """Scrape all artist pages for images"""
    results = {}
    
    for artist_slug in ARTIST_PAGES:
        url = f"{BASE_URL}/{artist_slug}/"
        print(f"Scraping: {url}")
        images = extract_images_from_page(url)
        
        # Categorize images
        portraits = []
        artworks = []
        
        for img in images:
            alt = img['alt'].lower()
            src = img['url']
            
            # Try to identify portrait vs artwork
            if any(x in alt for x in ['portrait', 'artist', 'profile']):
                portraits.append(img)
            elif any(x in src for x in ['/uploads/', '.jpg', '.jpeg', '.png', '.webp']):
                artworks.append(img)
        
        results[artist_slug] = {
            'all_images': images,
            'portraits': portraits,
            'artworks': artworks
        }
        
        print(f"  Found: {len(images)} total, {len(portraits)} portraits, {len(artworks)} artworks")
    
    return results

def scrape_homepage():
    """Scrape homepage for hero and gallery images"""
    url = BASE_URL
    print(f"Scraping homepage: {url}")
    images = extract_images_from_page(url)
    
    hero_images = []
    gallery_images = []
    
    for img in images:
        src = img['url']
        alt = img['alt'].lower()
        
        if any(x in alt for x in ['hero', 'exhibition', 'current', 'banner']):
            hero_images.append(img)
        elif any(x in alt for x in ['gallery', 'interior', 'space', 'about']):
            gallery_images.append(img)
        elif '/uploads/' in src:
            gallery_images.append(img)
    
    return {
        'all_images': images,
        'hero_images': hero_images,
        'gallery_images': gallery_images
    }

def scrape_exhibitions_page():
    """Scrape exhibitions page for exhibition images"""
    url = f"{BASE_URL}/exhibitions/"
    print(f"Scraping exhibitions: {url}")
    images = extract_images_from_page(url)
    
    exhibition_images = []
    for img in images:
        src = img['url']
        if '/uploads/' in src or any(x in src for x in ['.jpg', '.jpeg', '.png', '.webp']):
            exhibition_images.append(img)
    
    return exhibition_images

def main():
    print("=" * 60)
    print("Scraping arkcontemporary.co.za for images")
    print("=" * 60)
    
    # Scrape all pages
    homepage = scrape_homepage()
    print()
    
    exhibitions = scrape_exhibitions_page()
    print()
    
    artists = scrape_artist_pages()
    print()
    
    # Compile results
    results = {
        'homepage': homepage,
        'exhibitions': exhibitions,
        'artists': artists
    }
    
    # Save to JSON
    with open('scraped_images.json', 'w', encoding='utf-8') as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    
    print("=" * 60)
    print("Results saved to scraped_images.json")
    print("=" * 60)
    
    # Print summary for quick reference
    print("\n### QUICK REFERENCE ###\n")
    
    print("## Homepage Hero Images:")
    for img in homepage.get('hero_images', [])[:3]:
        print(f"  - {img['url']}")
    
    print("\n## Exhibition Images:")
    for img in exhibitions[:5]:
        print(f"  - {img['url']}")
    
    print("\n## Artist Images:")
    for artist_slug, data in artists.items():
        print(f"\n### {artist_slug}:")
        if data['portraits']:
            print(f"  Portrait: {data['portraits'][0]['url']}")
        print(f"  Artworks ({len(data['artworks'])}):")
        for img in data['artworks'][:6]:
            print(f"    - {img['url']} ({img['alt']})")

if __name__ == "__main__":
    main()
