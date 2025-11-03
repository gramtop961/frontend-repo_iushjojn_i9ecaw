import { BarChart3, IndianRupee, Users, QrCode } from "lucide-react";

export default function Impact() {
  const monthly = {
    contributions: 482000, // INR
    orders: 1216,
    artisans: 37,
  };

  const progress = Math.min(100, Math.round((monthly.orders / 1500) * 100));

  return (
    <section id="impact" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Economic impact</h2>
        <div className="hidden sm:flex items-center gap-2 text-sm text-gray-600">
          <QrCode className="h-4 w-4 text-emerald-600" />
          Scan on‑street QR codes to order online.
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
          <p className="text-xs text-gray-500">Users contributed directly to artisans</p>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1">
              <span>Orders tracked</span>
              <span>{monthly.orders}/1500 target</span>
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
          <p className="text-xs text-gray-500">Participating workshops on current routes</p>
          <div className="mt-4 text-sm text-emerald-700">
            Growing monthly. Want to join? <a href="#" className="underline">Apply here</a>.
          </div>
        </div>

        <div className="rounded-2xl ring-1 ring-gray-200 bg-white p-5">
          <p className="text-sm text-gray-600">Why it matters</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-700 list-disc pl-5">
            <li>Converts tourist footfall into steady, year‑round demand</li>
            <li>Frames crafts as climate solutions, not nostalgia</li>
            <li>Transparent economics: what stability really costs</li>
          </ul>
          <div className="mt-4 text-sm text-gray-600">
            Share your purchases with referral codes to grow the impact.
          </div>
        </div>
      </div>
    </section>
  );
}
