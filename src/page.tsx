import Image from "next/image"
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
              <path d="M12 5C7.58172 5 4 8.58172 4 13" stroke="currentColor" strokeWidth="2" />
              <path d="M20 13C20 8.58172 16.4183 5 12 5" stroke="currentColor" strokeWidth="2" />
              <path d="M4 13C4 17.4183 7.58172 21 12 21" stroke="currentColor" strokeWidth="2" />
              <path d="M12 21C16.4183 21 20 17.4183 20 13" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <span className="text-xl font-semibold">Triplicate</span>
        </Link>
        <nav className="flex gap-2">
          {["Thesis", "People", "Portfolio", "Research", "Contact"].map((item) => (
            <Button key={item} variant="outline" className="rounded-full border-neutral-200 hover:bg-neutral-50">
              {item}
            </Button>
          ))}
        </nav>
      </header>

      <main className="px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="rounded-3xl border border-neutral-200 p-8">
            <h1 className="text-[2.5rem] leading-tight font-mono" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              Building the toolkit for the future of scientific discovery
            </h1>
          </div>
          <div className="rounded-3xl border border-neutral-200 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-25%20at%205.51.52%E2%80%AFPM-3sdbraeN5emLxGQsaUvnEJj5VrvOc0.png"
              alt="3D molecular structure visualization"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:col-span-2 rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
            <p className="text-2xl text-neutral-800">At Triplicate we believe that joy is instrumental to both human</p>
          </div>
        </div>
      </main>
    </div>
  )
}

