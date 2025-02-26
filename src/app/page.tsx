
import Link from "next/link"
import { Button } from "~/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-1 h-1">
            <svg viewBox="0 0 4 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="2" cy="2" r="4" stroke="currentColor" strokeWidth="4" />
            </svg>

          </div>
        </Link>

      </header>
      <main className="flex items-center justify-center px-6 py-12">

        <div className="rounded-3xl border border-black p-8">
          <h1 className="text-[2.5rem] leading-tight font-mono" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Visualizing data processed in search and sort algorithms:  <Link href="/search" className="text-blue-500">Search</Link> and <Link href="/sort" className="text-blue-500">Sort</Link>
          </h1>
        </div>


      </main >
    </div >
  )
}

