import { Ear, Droplets, Hand, Eye, Apple, Mic, Camera } from "lucide-react";

const stories = [
  {
    id: "sound-tambat",
    place: "Tambat Ali",
    sense: { label: "Sound", icon: Ear },
    prompt: "Record the rhythm of copper hammering",
    narrative:
      "In the copper lanes, sync your breath to the kaam—the repeating triplet beats that shape a vessel from sheet to form.",
    action: { type: "record", label: "Record audio" },
    cover: "https://images.unsplash.com/photo-1616406432545-8fa32a2c8d2a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "smell-sugandhi",
    place: "Sugandhi Ali",
    sense: { label: "Scent", icon: Droplets },
    prompt: "Notice three fragrances that change with time of day",
    narrative:
      "Perfume makers blend attars with memories—monsoon mitti, temple smoke, and summer jasmine carried by breeze.",
    action: { type: "note", label: "Add a note" },
    cover: "https://images.unsplash.com/photo-1603189643126-9cd8d9105a1f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "touch-basket",
    place: "Basket Market",
    sense: { label: "Texture", icon: Hand },
    prompt: "Photograph a weave pattern and its shadow",
    narrative:
      "Run your fingers along cane—count the over‑under rhythm and see how light draws geometry on the ground.",
    action: { type: "photo", label: "Take a photo" },
    cover: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "taste-mandai",
    place: "Mandai",
    sense: { label: "Taste", icon: Apple },
    prompt: "Rate a seasonal fruit on aroma, crunch, and aftertaste",
    narrative:
      "Taste is a story of soil and season. Ask how far the fruit traveled and what isn’t sold after closing time.",
    action: { type: "note", label: "Add a rating" },
    cover: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "vision-wada",
    place: "Wada Courtyard",
    sense: { label: "Visual", icon: Eye },
    prompt: "Capture a beam of light and where it lands",
    narrative:
      "Step into the courtyard. Notice how carved balconies frame the sky and echoes loop under wooden beams.",
    action: { type: "photo", label: "Snap a moment" },
    cover: "https://images.unsplash.com/photo-1604335399105-10c9a41faf3c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function SensoryStories() {
  return (
    <section id="stories" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Sensory stories & micro‑challenges</h2>
          <p className="mt-1 text-sm text-gray-600">Unlock short narratives and log your responses to earn badges for your digital sketchbook.</p>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((s) => {
          const Icon = s.sense.icon;
          return (
            <div key={s.id} className="rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white">
              <img src={s.cover} alt={`${s.place} ${s.sense.label}`} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 text-emerald-700 rounded-full bg-emerald-50 ring-1 ring-emerald-200 px-2.5 py-1 text-xs">
                    <Icon className="h-3.5 w-3.5" /> {s.sense.label}
                  </div>
                  <span className="text-xs text-gray-500">{s.place}</span>
                </div>
                <p className="mt-2 text-sm text-gray-700">{s.narrative}</p>
                <p className="mt-2 text-sm font-medium text-gray-900">Challenge: {s.prompt}</p>
                <div className="mt-3">
                  {s.action.type === "record" && (
                    <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm hover:bg-emerald-700">
                      <Mic className="h-4 w-4" /> {s.action.label}
                    </button>
                  )}
                  {s.action.type === "photo" && (
                    <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm hover:bg-emerald-700">
                      <Camera className="h-4 w-4" /> {s.action.label}
                    </button>
                  )}
                  {s.action.type === "note" && (
                    <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white text-sm hover:bg-emerald-700">
                      ✍️ {s.action.label}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
