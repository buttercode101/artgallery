import Link from 'next/link';
import Image from 'next/image';
import { artists } from '@/lib/data';

export default function ArtistsPage() {
  return (
    <section className="mx-auto w-[min(1100px,92vw)] py-8">
      <p className="section-label">Artists</p>
      <h1 className="editorial-title mt-3 text-5xl">Gallery Roster</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {artists.map((artist, i) => (
          <Link key={artist.slug} href={`/artists/${artist.slug}`} className="group block border border-ink/10 p-3">
            <div className="relative h-80 overflow-hidden">
              <Image src={artist.portrait} alt={artist.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 flex items-end bg-black/25 p-4 opacity-0 transition group-hover:opacity-100">
                <span className="text-sm uppercase tracking-[0.2em] text-white">View Portfolio</span>
              </div>
            </div>
            <p className="mt-4 text-xs text-terracotta">{String(i + 1).padStart(2, '0')}</p>
            <p className="text-2xl font-serif italic">{artist.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
