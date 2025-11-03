import { BarChart3, IndianRupee, Users, QrCode, Crown, Sparkles } from "lucide-react";

export default function Impact() {
  const monthly = {
    contributions: 528400, // INR
    orders: 1342,
    artisans: 41,
  };

  const progress = Math.min(100, Math.round((monthly.orders / 2000) * 100));

  const leaderboard = [
    { name: "Mandai Explorers", points: 420 },
    { name: "Copper Street Listeners", points: 380 },
    { name: "Basket Weave Watchers", points: 310 },
  ];

  return (
    <section id="impact" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Impact & participation</h2>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <QrCode className="h-4 w-4 text-emerald-600" />
          Scan street QR codes to order or log a challenge.
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-3 gap-4">
        <div className="rounded-2xl ring-1 ring-gray-200 bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">This month</p>
            <BarChart3 className="h-5 w-5 text-emerald-600" />
          </div>
          <div className="mt-2 text-3xl font-bold text-gray-900 inline-flex items-center gap-2">
            <IndianRupee className="h-7 w-7" /> {monthly.contributions.toLocaleString("en-IN")}
          </div>
          <p className="text-xs text-gray-500">Direct to artisans via tracked purchases</p>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
              <span>Orders tracked</span>
              <span>{monthly.orders}/2000 target</span>
            </div>
            <div className="h-2 rounded-full bg-emerald-100 overflow-hidden">
              <div className="h-2 bg-emerald-600" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl ring-1 ring-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600">Active artisans</p>
          <div className="mt-2 text-3xl font-bold text-gray-900 inline-flex items-center gap-2">
            <Users className="h-7 w-7 text-emerald-600" /> {monthly.artisans}
          </div>
          <p className="text-xs text-gray-500">Participating workshops across all routes</p>
          <div className="mt-4 text-sm text-emerald-700">
            Leave a testimonial after each purchase to grow trust.
          </div>
        </div>

        <div className="rounded-2xl ring-1 ring-gray-200 bg-white p-5">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Crown className="h-4 w-4 text-emerald-600" /> Leaderboard
          </div>
          <ul className="mt-2 space-y-2">
            {leaderboard.map((t, i) => (
              <li key={t.name} className="flex items-center justify-between rounded-lg bg-emerald-50/60 px-3 py-2 text-sm text-emerald-900">
                <span className="inline-flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-white text-emerald-700 ring-1 ring-emerald-200 text-xs">{i + 1}</span>
                  {t.name}
                </span>
                <span className="inline-flex items-center gap-1 text-emerald-800"><Sparkles className="h-4 w-4" /> {t.points}</span>
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-gray-600">Earn points by logging sensory challenges and responsible purchases.</p>
        </div>
      </div>
    </section>
  );
}
