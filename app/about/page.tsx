import Image from 'next/image';
import Link from 'next/link';
import { galleryInfo, artists } from '@/lib/data';

const aboutImages = [
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-19.jpg',
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-22.jpg',
  'https://arkcontemporary.co.za/wp-content/uploads/2025/04/The-Rosendal-March-2025-24.jpg'
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-12 py-8">
      <div>
        <p className="section-label">About</p>
        <h1 className="editorial-title mt-3 text-5xl">{galleryInfo.name}</h1>
        <p className="mt-2 text-lg text-ink/70 italic">{galleryInfo.tagline}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative h-80 overflow-hidden rounded-sm">
          <Image src={aboutImages[0]} alt="Gallery interior" fill className="object-cover" />
        </div>
        <div className="relative h-80 overflow-hidden rounded-sm">
          <Image src={aboutImages[1]} alt="Gallery exhibition" fill className="object-cover" />
        </div>
      </div>

      <div className="prose max-w-none">
        <p className="text-lg leading-relaxed">{galleryInfo.about}</p>
      </div>

      <div className="rounded-sm bg-mist p-8">
        <p className="section-label">Gallery Artists</p>
        <p className="mt-2 text-sm text-ink/70">
          Established in 2021, ark.contemporary showcases the collective endeavours of a group of accomplished Rosendal-based artists.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {artists.map((artist) => (
            <Link key={artist.slug} href={`/artists/${artist.slug}`} className="group">
              <div className="relative h-48 overflow-hidden rounded-sm">
                <Image src={artist.portrait} alt={artist.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <p className="mt-3 font-medium group-hover:text-terracotta">{artist.name}</p>
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link href="/artists" className="inline-block border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
            View All Artists
          </Link>
        </div>
      </div>

      <div className="grid gap-8 text-sm md:grid-cols-3">
        <div>
          <p className="section-label">Visit</p>
          <p className="mt-2 text-ink/80">{galleryInfo.address}</p>
        </div>
        <div>
          <p className="section-label">Contact</p>
          <p className="mt-2 text-ink/80">{galleryInfo.phone}</p>
          <p className="mt-1 text-ink/80">{galleryInfo.email}</p>
        </div>
        <div>
          <p className="section-label">Hours</p>
          <p className="mt-2 text-ink/80">Thu–Sun, see Visit page for details</p>
        </div>
      </div>
    </div>
  );
}
