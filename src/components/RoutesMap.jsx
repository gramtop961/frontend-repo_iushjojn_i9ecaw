import { MapPinned, Clock3, Compass, Info, Ear, Eye, Droplets, Hand, Apple } from "lucide-react";
import { useState } from "react";

const routes = [
  {
    id: "copper",
    name: "Tambat Ali • Copper Street",
    stops: 7,
    distance: "2.1 km",
    senses: ["sound", "touch"],
    focus: "Listen to hammer rhythms, explore metal textures",
  },
  {
    id: "clay",
    name: "Kumbharwada • Pottery",
    stops: 6,
    distance: "2.4 km",
    senses: ["touch", "smell"],
    focus: "Clay, kiln smoke, and everyday cooking ware",
  },
  {
    id: "baskets",
    name: "Kasba • Basketry Alleys",
    stops: 8,
    distance: "3.2 km",
    senses: ["touch", "vision"],
    focus: "Cane, weave, and shadow play",
  },
  {
    id: "mandai",
    name: "Mandai • Seasonal Taste",
    stops: 5,
    distance: "1.6 km",
    senses: ["taste", "smell"],
    focus: "Fruits, pickles, and terroir",
  },
  {
    id: "wada",
    name: "Wada Courtyards • Architecture",
    stops: 4,
    distance: "2.0 km",
    senses: ["vision", "sound"],
    focus: "Light shafts and echoes",
  },
];

const senseChips = [
  { id: "sound", label: "Sound", icon: Ear },
  { id: "smell", label: "Scent", icon: Droplets },
  { id: "touch", label: "Texture", icon: Hand },
  { id: "vision", label: "Visual", icon: Eye },
  { id: "taste", label: "Taste", icon: Apple },
];

export default function RoutesMap() {
  const [activeSense, setActiveSense] = useState("all");

  const filtered = activeSense === "all" ? routes : routes.filter((r) => r.senses.includes(activeSense));

  return (
    <section id="routes" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Map & routes</h2>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Info className="h-4 w-4 text-emerald-600" /> Offline-friendly. Open in your GPS app.
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <button onClick={() => setActiveSense("all")} className={`rounded-full px-3 py-1.5 text-sm ring-1 ${activeSense === "all" ? "bg-emerald-600 text-white ring-emerald-600" : "bg-white text-gray-700 ring-gray-200"}`}>All senses</button>
        {senseChips.map(({ id, label, icon: Icon }) => (
          <button key={id} onClick={() => setActiveSense(id)} className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm ring-1 ${activeSense === id ? "bg-emerald-600 text-white ring-emerald-600" : "bg-white text-gray-700 ring-gray-200"}`}>
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      <div className="mt-4 grid sm:grid-cols-3 gap-3">
        {filtered.map((r) => (
          <button key={r.id} className="group w-full rounded-xl border border-gray-200 bg-white p-4 text-left hover:border-emerald-300 hover:shadow-sm transition">
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
            <div className="mt-3 flex items-center gap-2 text-xs">
              {r.senses.map((s) => {
                const Icon = senseChips.find((c) => c.id === s)?.icon;
                return (
                  <span key={s} className="inline-flex items-center gap-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 px-2 py-0.5">
                    {Icon ? <Icon className="h-3 w-3" /> : null} {s}
                  </span>
                );
              })}
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
