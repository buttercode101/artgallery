import Link from 'next/link';
import { galleryInfo } from '@/lib/data';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-ink/10 py-12">
      <div className="mx-auto grid w-[min(1100px,92vw)] gap-8 md:grid-cols-3">
        <div>
          <p className="section-label">ark. contemporary</p>
          <p className="mt-3 text-sm text-ink/70">{galleryInfo.address}</p>
          <p className="mt-2 text-sm text-ink/70">{galleryInfo.phone}</p>
          <p className="mt-1 text-sm text-ink/70">{galleryInfo.email}</p>
        </div>
        <div>
          <p className="section-label">Hours</p>
          <ul className="mt-3 space-y-1 text-sm text-ink/70">
            {galleryInfo.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="section-label">Connect</p>
          <div className="mt-3 flex gap-4 text-sm">
            <Link href="/contact" className="hover:text-terracotta">Inquire</Link>
            <Link href="/about" className="hover:text-terracotta">About</Link>
          </div>
          <p className="mt-6 text-xs text-ink/50">{galleryInfo.footer}</p>
        </div>
      </div>
    </footer>
  );
}
