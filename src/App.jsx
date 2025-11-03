import Hero from "./components/Hero";
import RoutesMap from "./components/RoutesMap";
import SensoryStories from "./components/SensoryStories";
import Craftspersons from "./components/Craftspersons";
import Impact from "./components/Impact";
import { Quote } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <RoutesMap />
      <SensoryStories />
      <Craftspersons />
      <Impact />

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-2xl ring-1 ring-gray-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
          <div className="flex items-start gap-3">
            <Quote className="h-6 w-6 text-emerald-600 shrink-0" />
            <div>
              <h3 className="font-semibold text-gray-900">Reflection</h3>
              <p className="mt-2 text-sm sm:text-base text-gray-700">
                What childhood smell does this market remind you of? Who would you share this handiwork with? How can you support the local artisan economy today and next month?
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a href="#routes" className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium shadow-sm hover:bg-emerald-700">Plan a route</a>
            <a href="#crafts" className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-emerald-700 font-medium ring-1 ring-emerald-200 hover:bg-emerald-50">Support a craftsperson</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Heritage Walk Pune — Sensory, action‑oriented, and multilingual.</p>
      </section>
    </div>
  );
}
