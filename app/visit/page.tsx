import Image from 'next/image';
import { galleryInfo } from '@/lib/data';

const galleryImages = [
  'https://images.unsplash.com/photo-1577720643272-265f09367456?auto=format&fit=crop&w=1300&q=80',
  'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1300&q=80'
];

export default function VisitPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] space-y-10 py-8">
      <div>
        <p className="section-label">Visit</p>
        <h1 className="editorial-title mt-3 text-5xl">Plan your Rosendal journey.</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {galleryImages.map((src) => (
          <div key={src} className="relative h-80 overflow-hidden rounded-sm">
            <Image src={src} alt="Gallery space" fill className="object-cover" />
          </div>
        ))}
      </div>
      <div className="grid gap-8 text-sm md:grid-cols-3">
        <div>
          <p className="section-label">Address</p>
          <p className="mt-2">{galleryInfo.address}</p>
        </div>
        <div>
          <p className="section-label">Contact</p>
          <p className="mt-2">{galleryInfo.galleryManager}, Gallery Manager</p>
          <p className="mt-1">{galleryInfo.phone}</p>
          <p className="mt-1">{galleryInfo.email}</p>
        </div>
        <div>
          <p className="section-label">Opening Hours</p>
          <ul className="mt-2 space-y-1">
            {galleryInfo.hours.map((h) => (
              <li key={h.day} className="flex justify-between">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="rounded-sm bg-mist p-6 text-sm">
        <p className="font-medium">About the Gallery</p>
        <p className="mt-2 text-ink/80">{galleryInfo.about}</p>
      </div>
    </div>
  );
}
