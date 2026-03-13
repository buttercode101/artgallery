import { galleryInfo } from '@/lib/data';

export default function ContactPage() {
  return (
    <div className="mx-auto w-[min(900px,92vw)] py-8">
      <p className="section-label">Contact</p>
      <h1 className="editorial-title mt-3 text-5xl">Inquiries & Collecting</h1>
      
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-medium">Gallery Contact</p>
          <div className="mt-4 space-y-3 text-sm text-ink/80">
            <p><span className="font-medium">Address:</span><br/>{galleryInfo.address}</p>
            <p><span className="font-medium">Phone:</span><br/>{galleryInfo.phone}</p>
            <p><span className="font-medium">Email:</span><br/>{galleryInfo.email}</p>
            <p><span className="font-medium">Gallery Manager:</span><br/>{galleryInfo.galleryManager}</p>
          </div>
        </div>
        
        <form className="grid gap-4 text-sm">
          <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Name" />
          <input type="email" className="border border-ink/20 bg-white px-4 py-3" placeholder="Email" />
          <input className="border border-ink/20 bg-white px-4 py-3" placeholder="Subject" />
          <textarea className="min-h-40 border border-ink/20 bg-white px-4 py-3" placeholder="Message" />
          <button className="w-fit border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">Send inquiry</button>
        </form>
      </div>
      
      <div className="mt-8 rounded-sm bg-mist p-6 text-sm">
        <p className="font-medium">Newsletter Subscription</p>
        <p className="mt-2 text-ink/80">Subscribe to our newsletter for exhibition updates and gallery news.</p>
        <form className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input className="flex-1 border border-ink/20 bg-white px-4 py-3" placeholder="First Name" />
          <input type="email" className="flex-1 border border-ink/20 bg-white px-4 py-3" placeholder="Email address" />
          <button className="border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.2em]">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
