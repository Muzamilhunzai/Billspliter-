"use client";
import Shell from "@/components/Shell";
import { GROUPS, GROUP_BALANCES, formatRs, CATEGORY_META } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";

export default function GroupDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const group = GROUPS.find((g) => g.id === params.id) ?? GROUPS[0];
  const [tab, setTab] = useState<"expenses" | "balances" | "members">("expenses");

  const grouped: Record<string, typeof group.expenses> = {};
  group.expenses.forEach((e) => {
    if (!grouped[e.date]) grouped[e.date] = [];
    grouped[e.date].push(e);
  });

  return (
    <Shell title={group.name}>
      {/* Hero Banner */}
      <section
        className="h-[120px] relative overflow-hidden flex items-center px-8 border-b border-outline-variant/10"
        style={{
          background: `linear-gradient(to right, ${group.accentColor}33, #19191e, #19191e)`,
        }}
      >
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px]"
            style={{ backgroundColor: group.accentColor }}
          />
        </div>
        <div className="relative flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
          <div>
            <h1 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight">
              {group.name} {group.emoji}
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-2">
                {group.members.slice(0, 3).map((m) => (
                  <div
                    key={m.id}
                    className="h-8 w-8 rounded-full ring-2 ring-background flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: m.color + "30", color: m.color }}
                  >
                    {m.name[0]}
                  </div>
                ))}
                {group.members.length > 3 && (
                  <div className="h-8 w-8 rounded-full ring-2 ring-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface">
                    +{group.members.length - 3}
                  </div>
                )}
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-outline-variant/30 text-xs font-bold text-on-surface hover:bg-on-surface/5 transition-colors">
                <span className="material-symbols-outlined text-sm">person_add</span>
                Add Member
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Total Spent", value: formatRs(group.totalSpent), color: "text-secondary" },
              { label: "Settled", value: formatRs(group.settled), color: "text-primary" },
              { label: "Pending", value: formatRs(group.pending), color: "text-tertiary" },
            ].map((stat) => (
              <div key={stat.label} className="bg-surface-container-high px-4 py-2 rounded-xl flex flex-col">
                <span className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">
                  {stat.label}
                </span>
                <span className={`font-mono text-lg ${stat.color}`}>{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="sticky top-16 z-30 bg-background/80 backdrop-blur-lg px-8 py-4 border-b border-outline-variant/5">
        <div className="flex gap-8">
          {(["expenses", "balances", "members"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-3 font-bold text-sm tracking-wide capitalize transition-colors border-b-2 ${
                tab === t
                  ? "text-primary border-primary"
                  : "text-on-surface-variant border-transparent hover:text-on-surface"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section className="px-8 mt-10 space-y-12 pb-12">
        {tab === "expenses" && (
          <>
            {group.expenses.length === 0 ? (
              <div className="text-center py-20 text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-4 block">receipt_long</span>
                <p className="font-headline text-xl">No expenses yet</p>
                <p className="text-sm mt-2">Add your first expense to get started</p>
              </div>
            ) : (
              Object.entries(grouped).map(([date, expenses]) => (
                <div key={date}>
                  <h3 className="font-headline text-lg font-bold mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_#49f4c8]" />
                    {date}
                  </h3>
                  <div className="space-y-4">
                    {expenses.map((expense) => {
                      const cat = CATEGORY_META[expense.category];
                      return (
                        <div
                          key={expense.id}
                          className="group kinetic-card bg-surface-container-low hover:bg-surface-container transition-all flex items-center justify-between p-5 rounded-r-2xl"
                        >
                          <div className="flex items-center gap-5">
                            <div className={`w-12 h-12 rounded-2xl bg-surface-container-highest flex items-center justify-center ${cat.color}`}>
                              <span className="material-symbols-outlined text-2xl">{cat.icon}</span>
                            </div>
                            <div>
                              <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">
                                {expense.description}
                              </h4>
                              <p className="text-sm text-on-surface-variant mt-0.5">
                                <span className="text-on-surface font-medium">
                                  {expense.paidBy.name}
                                </span>{" "}
                                paid{" "}
                                <span className="font-mono text-on-surface">
                                  {formatRs(expense.amount)}
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="hidden lg:flex flex-col items-end">
                              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-widest">
                                Split among
                              </span>
                              <span className="text-sm font-medium">
                                {expense.splitAmong.length} members
                              </span>
                            </div>
                            <div
                              className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-tighter border ${
                                expense.yourShare < 0
                                  ? "bg-secondary/10 border-secondary/20 text-secondary"
                                  : "bg-primary/10 border-primary/20 text-primary"
                              }`}
                            >
                              {expense.yourShare < 0
                                ? `You lent: ${formatRs(expense.yourShare)}`
                                : `Your share: ${formatRs(expense.yourShare)}`}
                            </div>
                            <button className="p-2 text-on-surface-variant hover:text-on-surface transition-colors">
                              <span className="material-symbols-outlined">more_vert</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))
            )}
          </>
        )}

        {tab === "balances" && (
          <div className="space-y-4 max-w-2xl">
            <h3 className="font-headline text-2xl font-bold mb-6">Individual Balances</h3>
            {GROUP_BALANCES.map((bal) => (
              <div
                key={bal.id}
                className="bg-surface-container p-5 rounded-2xl flex items-center justify-between group hover:bg-surface-container-high transition-all border-l-4 border-l-secondary/40"
              >
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    <div
                      className="w-10 h-10 rounded-full border-2 border-surface-container flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: bal.from.color + "20", color: bal.from.color }}
                    >
                      {bal.from.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center border-2 border-surface-container">
                      <span className="material-symbols-outlined text-secondary text-sm">
                        arrow_forward
                      </span>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full border-2 border-surface-container flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: bal.to.color + "20", color: bal.to.color }}
                    >
                      {bal.to.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div>
                    <p className="text-on-surface font-medium">
                      {bal.from.name}{" "}
                      <span className="text-on-surface-variant text-sm">owes</span>{" "}
                      {bal.to.name}
                    </p>
                    <p className="font-mono text-secondary text-lg font-bold">
                      {formatRs(bal.amount)}
                    </p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-primary to-secondary text-on-primary-fixed text-xs font-black uppercase tracking-widest px-6 py-3 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  Settle Now
                </button>
              </div>
            ))}
          </div>
        )}

        {tab === "members" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
            {group.members.map((member) => (
              <div
                key={member.id}
                className="bg-surface-container p-5 rounded-2xl flex items-center gap-4 hover:bg-surface-container-high transition-all"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold font-headline"
                  style={{ backgroundColor: member.color + "20", color: member.color }}
                >
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="font-bold text-on-surface">{member.name}</p>
                  <p className="text-xs text-on-surface-variant">@{member.username}</p>
                  {member.role === "admin" && (
                    <span className="text-[10px] font-bold text-primary uppercase tracking-tighter">
                      Admin
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </Shell>
  );
}
