'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/animated-section';
import { artists, exhibitions, featuredArtworks, galleryInfo } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="space-y-24 pb-8">
      <section className="relative min-h-[84vh] overflow-hidden">
        <motion.div initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 1.8 }} className="absolute inset-0">
          <Image src={exhibitions.current.hero} alt="Current exhibition" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
        <div className="relative z-10 mx-auto flex min-h-[84vh] w-[min(1100px,92vw)] flex-col justify-end pb-16 text-bg">
          <p className="section-label !text-bg/80">Current Exhibition</p>
          <h1 className="editorial-title mt-3 max-w-3xl text-5xl md:text-7xl">{exhibitions.current.title}</h1>
          <p className="mt-3 max-w-2xl text-bg/90">{exhibitions.current.description}</p>
          <Link href="/exhibitions" className="mt-7 w-fit border border-bg/50 px-6 py-3 text-sm uppercase tracking-[0.22em] hover:bg-bg hover:text-ink transition-colors">
            View Exhibition
          </Link>
        </div>
      </section>

      <AnimatedSection>
        <section className="mx-auto w-[min(1100px,92vw)]">
          <p className="section-label">Featured Artworks</p>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {featuredArtworks.slice(0, 3).map((art) => (
              <article key={art.id} className="group overflow-hidden border border-ink/10 bg-white">
                <div className="relative h-72 overflow-hidden">
                  <Image src={art.image} alt={art.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-1 p-5 text-sm">
                  <p className="font-medium">{art.title}</p>
                  <p className="text-ink/70">{art.artist}</p>
                  <p className="text-terracotta">{art.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mx-auto w-[min(1100px,92vw)] grid gap-8 md:grid-cols-3">
          {artists.slice(0, 3).map((artist, idx) => (
            <Link key={artist.slug} href={`/artists/${artist.slug}`} className="group">
              <div className={`relative h-[420px] overflow-hidden ${idx % 2 === 1 ? 'md:mt-10' : ''}`}>
                <Image src={artist.portrait} alt={artist.name} fill className="object-cover grayscale transition duration-700 group-hover:grayscale-0" />
              </div>
              <p className="mt-4 text-xl font-serif italic">{artist.name}</p>
            </Link>
          ))}
        </section>
        <div className="mx-auto w-[min(1100px,92vw)] mt-6">
          <Link href="/artists" className="inline-block border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">
            View All Artists
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mx-auto w-[min(1100px,92vw)] rounded-sm bg-mist p-10 text-center">
          <p className="section-label">Visit the Gallery</p>
          <h2 className="editorial-title mt-4 text-4xl">{galleryInfo.about.split('.')[0]}.</h2>
          <p className="mt-4 text-ink/70">{galleryInfo.address}</p>
          <Link href="/visit" className="mt-8 inline-block border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.25em]">Plan your visit</Link>
        </section>
      </AnimatedSection>
    </div>
  );
}
