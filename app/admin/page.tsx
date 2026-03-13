export default function AdminPage() {
  return (
    <div className="mx-auto w-[min(1000px,92vw)] py-8">
      <p className="section-label">Admin CMS (Demo)</p>
      <h1 className="editorial-title mt-3 text-5xl">Content Management</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3 text-sm">
        <div className="border border-ink/10 bg-white p-5"><p className="font-medium">Artists</p><p className="mt-2 text-ink/70">Add/edit profiles, portraits, and statements.</p></div>
        <div className="border border-ink/10 bg-white p-5"><p className="font-medium">Artworks</p><p className="mt-2 text-ink/70">Manage dimensions, medium, price, and availability.</p></div>
        <div className="border border-ink/10 bg-white p-5"><p className="font-medium">Exhibitions</p><p className="mt-2 text-ink/70">Schedule upcoming/current/past shows with install shots.</p></div>
      </div>
    </div>
  );
}
