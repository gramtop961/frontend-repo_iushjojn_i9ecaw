import { Store, Phone, MessageCircle, CheckCircle2, Leaf, WalletMinimal } from "lucide-react";

const crafts = [
  {
    id: 1,
    name: "Kumbharwada Pottery Co-op",
    craft: "Terracotta & clay cookware",
    open: true,
    needs: "150 orders/month to sustain",
    impact: { co2: "-38% vs aluminum", water: "-62% vs plastic" },
    photo:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop",
    contacts: {
      phone: "+91 98765 43210",
      whatsapp: "https://wa.me/919876543210",
      upi: "upi://pay?pa=kumbhar@upi&pn=Kumbhar%20Coop&cu=INR",
    },
  },
  {
    id: 2,
    name: "Shinde Copperworks",
    craft: "Hand‑raised copper utensils",
    open: false,
    needs: "90 orders/month to sustain",
    impact: { co2: "recyclable 100%", water: "long life > 20y" },
    photo:
      "https://images.unsplash.com/photo-1567568853817-49cebe3ce0b9?q=80&w=1200&auto=format&fit=crop",
    contacts: {
      phone: "+91 98200 11122",
      whatsapp: "https://wa.me/919820011122",
      upi: "upi://pay?pa=shinde@upi&pn=Shinde%20Copper&cu=INR",
    },
  },
  {
    id: 3,
    name: "Kasba Basketry",
    craft: "Cane & bamboo baskets",
    open: true,
    needs: "120 orders/month to sustain",
    impact: { co2: "biodegradable", water: "zero plastics" },
    photo:
      "https://images.unsplash.com/photo-1565544687485-3f9d69b4f6b5?q=80&w=1200&auto=format&fit=crop",
    contacts: {
      phone: "+91 98111 22334",
      whatsapp: "https://wa.me/919811122334",
      upi: "upi://pay?pa=kasba@upi&pn=Kasba%20Basketry&cu=INR",
    },
  },
];

function Badge({ children, color = "emerald" }) {
  const colors = {
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    red: "bg-red-50 text-red-700 ring-red-200",
    gray: "bg-gray-50 text-gray-700 ring-gray-200",
  };
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs ring-1 ${colors[color]}`}>{children}</span>
  );
}

export default function Craftspersons() {
  return (
    <section id="crafts" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      <div className="flex items-end justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Meet the craftspeople</h2>
          <p className="mt-1 text-sm text-gray-600">Direct links to buy, message, or call. Your payment goes straight to the maker.</p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <Badge><Leaf className="h-3 w-3" /> Climate‑smart crafts</Badge>
          <Badge color="gray"><WalletMinimal className="h-3 w-3" /> Transparent economics</Badge>
        </div>
      </div>

      <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {crafts.map((c) => (
          <div key={c.id} className="group rounded-2xl overflow-hidden ring-1 ring-gray-200 bg-white hover:ring-emerald-300 hover:shadow-sm transition">
            <div className="relative">
              <img src={c.photo} alt={`${c.name} ${c.craft}`} className="h-44 w-full object-cover" loading="lazy" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                {c.open ? (
                  <Badge>
                    <CheckCircle2 className="h-3 w-3" /> OPEN NOW
                  </Badge>
                ) : (
                  <Badge color="red">Closed • opens tomorrow</Badge>
                )}
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{c.name}</h3>
                  <p className="text-sm text-gray-600">{c.craft}</p>
                </div>
                <Badge color="gray">{c.needs}</Badge>
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-gray-600">
                <span className="inline-flex items-center gap-1"><Leaf className="h-3 w-3 text-emerald-600" /> {c.impact.co2}</span>
                <span className="inline-flex items-center gap-1"><Store className="h-3 w-3 text-emerald-600" /> {c.impact.water}</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                <a href={c.contacts.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-white font-medium hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" /> Chat
                </a>
                <a href={`tel:${c.contacts.phone}`} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white ring-1 ring-gray-200 px-3 py-2 text-gray-900 hover:bg-gray-50">
                  <Phone className="h-4 w-4" /> Call
                </a>
                <a href={c.contacts.upi} className="inline-flex items-center justify-center gap-2 rounded-lg bg-white ring-1 ring-emerald-200 px-3 py-2 text-emerald-700 hover:bg-emerald-50">
                  Pay
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
