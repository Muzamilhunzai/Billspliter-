import Shell from "@/components/Shell";
import { GROUPS, formatRs } from "@/lib/data";
import Link from "next/link";

const STAT_CARDS = [
  {
    icon: "payments",
    label: "Total Spent",
    value: "Rs. 18,450",
    badge: "+12%",
    badgeColor: "bg-secondary/10 text-secondary",
    iconColor: "text-primary",
    valueColor: "",
  },
  {
    icon: "trending_down",
    label: "You Owe",
    value: "Rs. 3,200",
    badge: "High",
    badgeColor: "bg-error/10 text-error",
    iconColor: "text-error",
    valueColor: "text-error",
  },
  {
    icon: "trending_up",
    label: "You're Owed",
    value: "Rs. 6,750",
    badge: "Pending",
    badgeColor: "bg-secondary/10 text-secondary",
    iconColor: "text-secondary",
    valueColor: "text-secondary",
  },
  {
    icon: "group",
    label: "Active Groups",
    value: "4",
    badge: "Steady",
    badgeColor: "bg-primary/10 text-primary",
    iconColor: "text-primary",
    valueColor: "",
  },
];

const CHART_HEIGHTS = [60, 45, 80, 30, 90, 55, 75];
const CHART_SECONDARY_HEIGHTS = [40, 20, 50, 15, 60, 30, 45];

export default function DashboardPage() {
  const recentGroups = GROUPS.slice(0, 2);

  return (
    <Shell title="Dashboard">
      <div className="pt-8 px-6 max-w-7xl mx-auto space-y-10">

        {/* Stat Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STAT_CARDS.map((card, i) => (
            <div
              key={i}
              className="bg-[#1A1A22] border border-[#2E2E3E] rounded-2xl p-5 kinetic-border relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 bg-surface-container-highest rounded-lg ${card.iconColor}`}>
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor} uppercase tracking-tighter`}>
                  {card.badge}
                </span>
              </div>
              <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest mb-1">
                {card.label}
              </p>
              <h3 className={`font-mono text-2xl font-bold ${card.valueColor}`}>
                {card.value}
              </h3>
            </div>
          ))}
        </section>

        {/* Charts Row */}
        <section className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Spending Chart */}
          <div className="lg:col-span-6 bg-surface-container rounded-2xl p-6 ghost-border relative overflow-hidden">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h4 className="font-headline font-bold text-lg">Spending This Month</h4>
                <p className="text-on-surface-variant text-sm">Comparison of total vs personal share</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-xs text-on-surface-variant">Paid</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-secondary" />
                  <span className="text-xs text-on-surface-variant">Share</span>
                </div>
              </div>
            </div>
            <div className="h-64 flex items-end gap-2">
              {CHART_HEIGHTS.map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-primary/20 rounded-t relative group"
                  style={{ height: `${h}%` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-secondary/40 rounded-t"
                    style={{ height: `${CHART_SECONDARY_HEIGHTS[i]}%` }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Category Chart */}
          <div className="lg:col-span-4 bg-surface-container rounded-2xl p-6 ghost-border">
            <h4 className="font-headline font-bold text-lg mb-6">By Category</h4>
            <div className="space-y-5">
              {[
                { label: "Food", value: "Rs. 5,400", pct: "75%", color: "bg-primary" },
                { label: "Rent", value: "Rs. 12,000", pct: "90%", color: "bg-secondary" },
                { label: "Transport", value: "Rs. 2,100", pct: "35%", color: "bg-tertiary" },
                { label: "Fun", value: "Rs. 3,200", pct: "45%", color: "bg-primary-dim" },
                { label: "Other", value: "Rs. 850", pct: "15%", color: "bg-on-surface-variant" },
              ].map((cat, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-on-surface-variant">{cat.label}</span>
                    <span className="text-on-surface font-mono">{cat.value}</span>
                  </div>
                  <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                    <div className={`h-full ${cat.color} rounded-full`} style={{ width: cat.pct }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Activity & Groups */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-surface-container rounded-2xl p-6 ghost-border">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline font-bold text-lg">Recent Activity</h4>
              <button className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                View All
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined">restaurant</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Ali paid{" "}
                    <span className="font-mono text-secondary">Rs. 3,600</span>
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    &apos;Dinner at Cuckoo&apos;s Den&apos; in{" "}
                    <span className="text-on-surface">Lahore Trip</span>
                  </p>
                </div>
                <p className="text-[10px] text-on-surface-variant font-mono uppercase">2H AGO</p>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-primary">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">home</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">
                    Ahmed paid{" "}
                    <span className="font-mono text-primary">Rs. 12,000</span>
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    &apos;July Rent&apos; in{" "}
                    <span className="text-on-surface">Flat G-11</span>
                  </p>
                </div>
                <p className="text-[10px] text-on-surface-variant font-mono uppercase">YESTERDAY</p>
              </div>
            </div>
          </div>

          {/* Your Groups */}
          <div className="bg-surface-container rounded-2xl p-6 ghost-border">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-headline font-bold text-lg">Your Groups</h4>
              <Link href="/groups" className="text-primary text-xs font-bold uppercase tracking-widest hover:underline">
                Explore
              </Link>
            </div>
            <div className="space-y-4">
              {recentGroups.map((group) => (
                <Link
                  key={group.id}
                  href={`/groups/${group.id}`}
                  className="p-4 rounded-xl bg-surface-container-highest flex items-center justify-between cursor-pointer hover:bg-surface-bright transition-all block"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/20 to-secondary/20 flex items-center justify-center border border-outline-variant/20 text-2xl">
                      {group.emoji}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">{group.name}</h5>
                      <div className="flex gap-1 mt-1">
                        {group.members.slice(0, 3).map((m) => (
                          <div
                            key={m.id}
                            className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                            style={{ backgroundColor: m.color + "30", color: m.color }}
                          >
                            {m.name[0]}
                          </div>
                        ))}
                        {group.members.length > 3 && (
                          <div className="w-5 h-5 rounded-full bg-primary-container text-[8px] flex items-center justify-center text-on-primary-container font-bold">
                            +{group.members.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <span
                    className={`inline-block px-2 py-1 rounded text-[10px] font-mono font-bold ${
                      group.yourBalance >= 0
                        ? "bg-secondary/10 text-secondary"
                        : "bg-error/10 text-error"
                    }`}
                  >
                    {group.yourBalance >= 0 ? "+" : ""}
                    {formatRs(group.yourBalance)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Shell>
  );
}
