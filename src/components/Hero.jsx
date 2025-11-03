import { Map, ShoppingBag, Headphones, Languages } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-600 text-white grid place-items-center font-bold">HW</div>
            <span className="text-sm font-medium text-emerald-700">Heritage Walk Pune</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <Languages className="h-4 w-4 text-emerald-700" />
            <select aria-label="Language" className="bg-white/70 backdrop-blur px-2 py-1 rounded-md border border-emerald-100 text-emerald-800">
              <option>English</option>
              <option>मराठी</option>
              <option>हिंदी</option>
            </select>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 grid sm:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              A sensory heritage walk through Pune’s craft districts
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              Discover Tambat Ali’s metal rhythms, Kumbharwada’s clay, basket makers’ textures, Wada courtyards’ visual drama, and Mandai’s seasonal tastes. Walk, listen, and support local livelihoods.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#routes" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-emerald-700 active:bg-emerald-800">
                <Map className="h-4 w-4" /> Start a route
              </a>
              <a href="#stories" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-emerald-700 font-medium ring-1 ring-emerald-200 hover:bg-emerald-50">
                <Headphones className="h-4 w-4" /> Listen & explore
              </a>
              <a href="#crafts" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-emerald-700 font-medium ring-1 ring-emerald-200 hover:bg-emerald-50">
                <ShoppingBag className="h-4 w-4" /> Buy from artisans
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden ring-1 ring-emerald-100 shadow-sm bg-white">
            <img
              src="https://images.unsplash.com/photo-1548587622-2d0f2b07e6c8?q=80&w=1200&auto=format&fit=crop"
              alt="Craft district collage"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
