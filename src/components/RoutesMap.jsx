import { MapPinned, Clock3, Compass, Info } from "lucide-react";

const routes = [
  {
    id: "quick",
    name: "Quick Walk: 60–90 min",
    color: "emerald",
    stops: 6,
    distance: "2.4 km",
    focus: "Pottery + Copper lane",
  },
  {
    id: "halfday",
    name: "Deep Dive: Half Day",
    color: "orange",
    stops: 12,
    distance: "5.8 km",
    focus: "Material ecologies + food heritage",
  },
  {
    id: "custom",
    name: "Custom: Design Student Track",
    color: "sky",
    stops: 9,
    distance: "4.1 km",
    focus: "Process documentation + interviews",
  },
];

export default function RoutesMap() {
  return (
    <section id="routes" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Interactive routes</h2>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <Info className="h-4 w-4 text-emerald-600" />
          Offline-friendly maps. Use any GPS app to navigate.
        </div>
      </div>

      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        {routes.map((r) => (
          <button
            key={r.id}
            className="group w-full rounded-xl border border-gray-200 bg-white p-4 text-left hover:border-emerald-300 hover:shadow-sm transition"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{r.focus}</p>
                <h3 className="mt-1 font-semibold text-gray-900">{r.name}</h3>
              </div>
              <MapPinned className="h-5 w-5 text-emerald-600 group-hover:scale-110 transition" />
            </div>
            <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
              <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> {r.stops} stops</span>
              <span className="inline-flex items-center gap-1"><Compass className="h-3 w-3" /> {r.distance}</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-emerald-100 bg-white">
        <div className="aspect-[16/10] w-full">
          <iframe
            title="Pune Old City Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=73.842%2C18.503%2C73.878%2C18.545&layer=mapnik"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        <div className="px-4 py-3 text-xs text-gray-600 bg-emerald-50/50">
          Tip: Tap any route above to copy its list of waypoints and open in your preferred maps app for turn‑by‑turn navigation.
        </div>
      </div>
    </section>
  );
}
