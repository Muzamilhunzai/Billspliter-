import Shell from "@/components/Shell";

const CHART_MONTHS = ["MAR", "APR", "MAY", "JUN", "JUL", "AUG"];
const CATEGORIES = [
  { label: "Housing", color: "bg-primary", pct: "75%", value: "45,000", dot: "bg-primary" },
  { label: "Dining", color: "bg-secondary", pct: "55%", value: "12,500", dot: "bg-secondary" },
  { label: "Travel", color: "bg-tertiary", pct: "35%", value: "8,200", dot: "bg-tertiary" },
  { label: "Others", color: "bg-surface-variant", pct: "20%", value: "18,550", dot: "bg-surface-variant" },
];
const GROUPS_SPEND = [
  { name: "Flat G-11", value: "Rs. 32,400", pct: "72%", color: "from-primary to-primary-dim" },
  { name: "Road Trip '24", value: "Rs. 24,100", pct: "54%", color: "from-secondary to-secondary-dim" },
  { name: "Office Lunch", value: "Rs. 12,800", pct: "28%", color: "from-tertiary to-tertiary-dim" },
  { name: "Gym Crew", value: "Rs. 8,950", pct: "18%", color: "from-surface-variant to-surface-variant" },
];
const TOP_EXPENSES = [
  { icon: "home", color: "text-primary bg-primary/10", desc: "July Rent", group: "Flat G-11", amount: "Rs. 12,000", date: "Jul 01, 2024" },
  { icon: "restaurant", color: "text-secondary bg-secondary/10", desc: "Dinner", group: "Road Trip '24", amount: "Rs. 4,500", date: "Jul 12, 2024" },
  { icon: "flight", color: "text-tertiary bg-tertiary/10", desc: "Air Tickets", group: "Flat G-11", amount: "Rs. 8,200", date: "Jul 05, 2024" },
  { icon: "shopping_bag", color: "text-primary bg-primary/10", desc: "Groceries", group: "Flat G-11", amount: "Rs. 3,100", date: "Jul 15, 2024" },
  { icon: "directions_car", color: "text-secondary bg-secondary/10", desc: "Fuel", group: "Road Trip '24", amount: "Rs. 2,800", date: "Jul 10, 2024" },
];

export default function ReportsPage() {
  return (
    <Shell title="Reports">
      <div className="pt-8 px-6 max-w-7xl mx-auto space-y-10">
        {/* Filters */}
        <section className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex p-1 bg-surface-container rounded-xl border border-outline-variant/10">
            {["Month", "3 Months", "Year", "Custom"].map((t, i) => (
              <button
                key={t}
                className={`px-5 py-2 text-sm rounded-lg transition-colors ${
                  i === 1
                    ? "bg-surface-container-highest text-primary font-bold shadow-sm"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-secondary px-2 py-1 bg-secondary/10 rounded-full border border-secondary/20">
              LIVE DATA
            </span>
            <p className="text-xs text-on-surface-variant">Last synced: Just now</p>
          </div>
        </section>

        {/* Spending Trend Chart */}
        <section>
          <div className="bg-[#1A1A22] rounded-2xl p-8 kinetic-card relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="font-headline font-bold text-xl text-on-surface">Spending Trend</h3>
                <p className="text-on-surface-variant text-sm">Comparison of total spend vs previous period</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-3xl font-bold text-on-surface tracking-tighter">Rs. 84,250</span>
                <p className="text-secondary text-sm font-mono">+12.4% from Q1</p>
              </div>
            </div>
            <div className="w-full h-48 relative">
              <svg className="w-full h-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(168,164,255,0.3)" />
                    <stop offset="100%" stopColor="rgba(168,164,255,0)" />
                  </linearGradient>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(73,244,200,0.15)" />
                    <stop offset="100%" stopColor="rgba(73,244,200,0)" />
                  </linearGradient>
                </defs>
                <path d="M0,170 Q100,140 200,150 T400,70 T600,100 T800,30 T1000,55 L1000,200 L0,200 Z" fill="url(#g1)" />
                <path d="M0,170 Q100,140 200,150 T400,70 T600,100 T800,30 T1000,55" fill="none" stroke="#a8a4ff" strokeWidth="3" />
                <path d="M0,185 Q150,165 300,175 T500,120 T700,150 T900,95 T1000,110 L1000,200 L0,200 Z" fill="url(#g2)" />
                <path d="M0,185 Q150,165 300,175 T500,120 T700,150 T900,95 T1000,110" fill="none" stroke="#49f4c8" strokeWidth="2" strokeDasharray="8,4" />
              </svg>
            </div>
            <div className="flex justify-between mt-2 px-2">
              {CHART_MONTHS.map((m) => (
                <span key={m} className="font-mono text-xs text-on-surface-variant">{m}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Categories & Groups */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donut */}
          <div className="bg-[#1A1A22] rounded-2xl p-8 kinetic-card">
            <h3 className="font-headline font-bold text-xl text-on-surface mb-8">Categories</h3>
            <div className="flex items-center justify-center gap-12 flex-wrap sm:flex-nowrap">
              <div className="relative w-48 h-48 flex items-center justify-center flex-shrink-0">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="50%" cy="50%" r="70" fill="none" stroke="#25252b" strokeWidth="20" />
                  <circle cx="50%" cy="50%" r="70" fill="none" stroke="#a8a4ff" strokeWidth="20" strokeDasharray="440" strokeDashoffset="110" />
                  <circle cx="50%" cy="50%" r="70" fill="none" stroke="#49f4c8" strokeWidth="20" strokeDasharray="440" strokeDashoffset="330" />
                  <circle cx="50%" cy="50%" r="70" fill="none" stroke="#ff7672" strokeWidth="20" strokeDasharray="440" strokeDashoffset="400" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-mono text-2xl font-bold text-on-surface">65%</span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest">Housing</span>
                </div>
              </div>
              <div className="space-y-4 flex-1">
                {CATEGORIES.map((cat) => (
                  <div key={cat.label} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`w-3 h-3 rounded-full ${cat.dot}`} />
                      <span className="text-sm text-on-surface">{cat.label}</span>
                    </div>
                    <span className="font-mono text-sm text-on-surface-variant">{cat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* By Group */}
          <div className="bg-[#1A1A22] rounded-2xl p-8 kinetic-card">
            <h3 className="font-headline font-bold text-xl text-on-surface mb-8">By Group</h3>
            <div className="space-y-6">
              {GROUPS_SPEND.map((g) => (
                <div key={g.name} className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-on-surface">{g.name}</span>
                    <span className="font-mono text-on-surface-variant">{g.value}</span>
                  </div>
                  <div className="h-3 bg-surface-container-highest rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${g.color} rounded-full`}
                      style={{ width: g.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Expenses Table */}
        <section>
          <div className="bg-[#1A1A22] rounded-2xl p-8 kinetic-card">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline font-bold text-xl text-on-surface">Top 5 Expenses</h3>
              <button className="text-primary text-sm font-bold hover:underline">
                View All Transactions
              </button>
            </div>
            <div className="overflow-x-auto scrollbar-none">
              <table className="w-full text-left">
                <thead className="text-[10px] uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/10">
                  <tr>
                    <th className="pb-4 font-bold">Category</th>
                    <th className="pb-4 font-bold">Description</th>
                    <th className="pb-4 font-bold">Group</th>
                    <th className="pb-4 font-bold text-right">Amount</th>
                    <th className="pb-4 font-bold text-right">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {TOP_EXPENSES.map((exp, i) => (
                    <tr key={i} className="hover:bg-surface-container-low/40 transition-colors">
                      <td className="py-5">
                        <div className={`w-10 h-10 rounded-xl ${exp.color} flex items-center justify-center`}>
                          <span className="material-symbols-outlined">{exp.icon}</span>
                        </div>
                      </td>
                      <td className="py-5 font-medium text-on-surface">{exp.desc}</td>
                      <td className="py-5 text-on-surface-variant text-sm">{exp.group}</td>
                      <td className="py-5 text-right font-mono font-bold text-on-surface">{exp.amount}</td>
                      <td className="py-5 text-right text-on-surface-variant text-sm">{exp.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
