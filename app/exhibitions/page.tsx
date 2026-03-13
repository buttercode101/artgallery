import Image from 'next/image';
import Link from 'next/link';
import { exhibitions, featuredArtworks } from '@/lib/data';

export default function ExhibitionsPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-14 py-8">
      <section className="grid gap-8 md:grid-cols-2">
        <div className="relative h-[500px] overflow-hidden rounded-sm">
          <Image src={exhibitions.current.hero} alt={exhibitions.current.title} fill className="object-cover" />
        </div>
        <div className="self-center">
          <p className="section-label">Current</p>
          <h1 className="editorial-title mt-2 text-5xl">{exhibitions.current.title}</h1>
          <p className="mt-3 text-sm text-ink/70">{exhibitions.current.dates}</p>
          <p className="mt-5 text-sm leading-relaxed">{exhibitions.current.description}</p>
          <Link href="/contact" className="mt-6 inline-block border border-ink/20 px-5 py-3 text-xs uppercase tracking-[0.2em]">Book a private viewing</Link>
        </div>
      </section>

      {exhibitions.upcoming.length > 0 && (
        <section>
          <p className="section-label">Upcoming</p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {exhibitions.upcoming.map((item) => (
              <article key={item.title} className="border border-ink/10 p-3">
                <div className="relative h-64 overflow-hidden rounded-sm">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <p className="mt-3 text-2xl font-serif italic">{item.title}</p>
                <p className="text-sm text-ink/70">{item.dates}</p>
                <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section>
        <p className="section-label">Archive</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {exhibitions.past.map((item) => (
            <article key={item.title} className="border border-ink/10 p-3">
              <div className="relative h-64 overflow-hidden rounded-sm">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <p className="mt-3 text-2xl font-serif italic">{item.title}</p>
              <p className="text-sm text-ink/70">{item.year}</p>
              {item.description && (
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{item.description}</p>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
