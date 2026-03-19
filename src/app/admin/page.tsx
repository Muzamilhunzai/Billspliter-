import Shell from "@/components/Shell";
import Link from "next/link";

const KPI = [
  { label: "Total Users", value: "420", pct: "85%", color: "bg-admin-accent" },
  { label: "Active Groups", value: "156", pct: "60%", color: "bg-secondary" },
  { label: "Total Expenses", value: "2,400", pct: "75%", color: "bg-primary" },
  { label: "Rs. Tracked", value: "1.2M", pct: "90%", color: "bg-secondary-fixed-dim" },
  { label: "New This Week", value: "+24", pct: "40%", color: "bg-admin-accent", accent: true },
];
const BAR_HEIGHTS = [40, 60, 85, 50, 70, 45, 90, 30, 55, 80, 100, 40];
const SIGNUPS = [
  { initials: "AM", name: "Arjun Mehta", email: "arjun.m@example.com", time: "2 mins ago", status: "Verified" },
  { initials: "SK", name: "Sara Khan", email: "sara.k@gmail.com", time: "14 mins ago", status: "Verified" },
  { initials: "RD", name: "Rohan Das", email: "rohan.d@outlook.com", time: "1 hour ago", status: "Pending" },
];
const LATEST_EXP = [
  { icon: "restaurant", color: "text-secondary", desc: "Dinner at Taj", group: "Weekend Trip", amount: "Rs. 4,200", split: 4 },
  { icon: "electric_bolt", color: "text-primary", desc: "Electricity Bill", group: "Flatmates", amount: "Rs. 1,850", split: 3 },
  { icon: "shopping_bag", color: "text-admin-accent", desc: "Groceries", group: "Home", amount: "Rs. 940", split: 2 },
];

export default function AdminPage() {
  return (
    <Shell title="Admin System Control">
      <div className="pt-8 px-6 max-w-7xl mx-auto space-y-10">
        {/* Badge */}
        <div className="flex items-center gap-3">
          <h2 className="font-headline font-bold text-2xl">Admin System Control</h2>
          <span className="bg-admin-accent/20 text-admin-accent px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border border-admin-accent/30">
            Admin
          </span>
        </div>

        {/* KPI */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {KPI.map((k) => (
            <div key={k.label} className="admin-kinetic-accent bg-surface-container-high p-5 rounded-r-xl">
              <p className="text-on-surface-variant text-xs font-label uppercase tracking-wider mb-2">
                {k.label}
              </p>
              <h3 className={`font-headline text-3xl font-bold ${k.accent ? "text-admin-accent" : ""}`}>
                {k.value}
              </h3>
              <div className="mt-4 h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className={`h-full ${k.color} rounded-full`} style={{ width: k.pct }} />
              </div>
            </div>
          ))}
        </section>

        {/* Charts */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-surface-container p-6 rounded-2xl relative overflow-hidden group">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-headline text-lg font-bold">Daily Activity</h4>
                <p className="text-on-surface-variant text-sm">New Expenses vs Users</p>
              </div>
              <div className="flex gap-4">
                {[{ color: "bg-primary", label: "Expenses" }, { color: "bg-secondary", label: "Users" }].map((l) => (
                  <div key={l.label} className="flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full ${l.color}`} />
                    <span className="text-xs">{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-48 w-full flex items-end gap-1 px-2">
              {BAR_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-lg transition-all ${
                    i === 2 ? "bg-primary/40" : i === 4 ? "bg-secondary/40" : i === 6 ? "bg-primary/60" : i === 9 ? "bg-secondary/60" : i === 10 ? "bg-primary" : "bg-surface-container-highest"
                  }`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </div>

          {/* Donut */}
          <div className="bg-surface-container p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <h4 className="font-headline text-lg font-bold mb-1">User Status</h4>
            <p className="text-on-surface-variant text-sm mb-6">System-wide Health</p>
            <div className="relative w-40 h-40 mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle className="stroke-surface-container-highest" cx="18" cy="18" fill="none" r="16" strokeWidth="4" />
                <circle className="stroke-secondary" cx="18" cy="18" fill="none" r="16" strokeDasharray="75, 100" strokeWidth="4" />
                <circle className="stroke-primary" cx="18" cy="18" fill="none" r="16" strokeDasharray="15, 100" strokeDashoffset="-75" strokeWidth="4" />
                <circle className="stroke-error" cx="18" cy="18" fill="none" r="16" strokeDasharray="10, 100" strokeDashoffset="-90" strokeWidth="4" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-headline font-bold">420</span>
                <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Total</span>
              </div>
            </div>
            <div className="w-full space-y-2">
              {[{ color: "bg-secondary", label: "Active", val: "75%" }, { color: "bg-primary", label: "Inactive", val: "15%" }, { color: "bg-error", label: "Blocked", val: "10%" }].map((s) => (
                <div key={s.label} className="flex items-center justify-between text-xs px-2">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${s.color}`} />
                    <span className="font-medium">{s.label}</span>
                  </div>
                  <span className="font-mono">{s.val}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tables */}
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="font-headline text-xl font-bold">Recent Sign-ups</h4>
              <Link href="/admin/users" className="text-primary text-sm font-bold hover:underline">View All</Link>
            </div>
            <div className="space-y-2">
              {SIGNUPS.map((s) => (
                <div key={s.name} className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between hover:bg-surface-container transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary font-bold font-headline text-sm">
                      {s.initials}
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{s.name}</p>
                      <p className="text-xs text-on-surface-variant">{s.email}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-mono text-on-surface-variant">{s.time}</p>
                    <span className={`text-[10px] font-bold uppercase tracking-tighter ${s.status === "Verified" ? "text-secondary" : "text-on-surface-variant"}`}>
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h4 className="font-headline text-xl font-bold">Latest Expenses</h4>
              <button className="text-primary text-sm font-bold hover:underline">Audits</button>
            </div>
            <div className="space-y-2">
              {LATEST_EXP.map((e) => (
                <div key={e.desc} className="bg-surface-container-low p-4 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                      <span className={`material-symbols-outlined text-sm ${e.color}`}>{e.icon}</span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface">{e.desc}</p>
                      <p className="text-xs text-on-surface-variant">Group: {e.group}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-mono font-bold text-on-surface">{e.amount}</p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase">Split by {e.split}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
