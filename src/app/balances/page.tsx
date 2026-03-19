"use client";
import Shell from "@/components/Shell";
import { BALANCES_OWE, BALANCES_OWED, formatRs } from "@/lib/data";
import { useState } from "react";

export default function BalancesPage() {
  const [showModal, setShowModal] = useState(false);
  const [selectedBalance, setSelectedBalance] = useState(BALANCES_OWE[0]);

  return (
    <Shell title="Balances">
      <div className="pt-8 px-6 max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4 bg-surface-container-low p-1.5 rounded-full border border-outline-variant/10">
            <button className="px-6 py-2 rounded-full text-sm font-bold bg-surface-container-highest text-on-surface shadow-sm">
              All Time
            </button>
            <button className="px-6 py-2 rounded-full text-sm font-medium text-on-surface-variant hover:text-on-surface transition-colors">
              Monthly
            </button>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-on-surface-variant">Simplify Debts</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input defaultChecked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* You Owe */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-6 bg-tertiary rounded-full" />
                <h3 className="font-headline text-lg font-bold">You Owe</h3>
              </div>
              <span className="font-mono text-tertiary font-bold">
                {formatRs(BALANCES_OWE.reduce((s, b) => s + b.amount, 0))}
              </span>
            </div>
            <div className="space-y-4">
              {BALANCES_OWE.map((bal) => (
                <div
                  key={bal.id}
                  className="bg-surface-container rounded-xl p-5 flex items-center gap-4 relative group hover:bg-surface-container-high transition-colors"
                >
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-tertiary rounded-r-full" />
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: bal.to.color + "20", color: bal.to.color }}
                  >
                    {bal.to.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-on-surface">{bal.to.name}</h4>
                    <p className="text-xs text-on-surface-variant font-medium">{bal.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-tertiary font-bold">{formatRs(bal.amount)}</p>
                    <button
                      onClick={() => { setSelectedBalance(bal); setShowModal(true); }}
                      className="mt-2 px-4 py-1.5 bg-tertiary/10 text-tertiary text-xs font-bold rounded-lg border border-tertiary/20 hover:bg-tertiary hover:text-on-tertiary transition-all"
                    >
                      Settle Up
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* You're Owed */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2 h-6 bg-secondary rounded-full" />
                <h3 className="font-headline text-lg font-bold">You Are Owed</h3>
              </div>
              <span className="font-mono text-secondary font-bold">
                {formatRs(BALANCES_OWED.reduce((s, b) => s + b.amount, 0))}
              </span>
            </div>
            <div className="space-y-4">
              {BALANCES_OWED.map((bal) => (
                <div
                  key={bal.id}
                  className="bg-surface-container rounded-xl p-5 flex items-center gap-4 relative group hover:bg-surface-container-high transition-colors"
                >
                  <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-secondary rounded-r-full" />
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: bal.from.color + "20", color: bal.from.color }}
                  >
                    {bal.from.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-on-surface">{bal.from.name}</h4>
                    <p className="text-xs text-on-surface-variant font-medium">{bal.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-secondary font-bold">{formatRs(bal.amount)}</p>
                    <button className="mt-2 px-4 py-1.5 text-on-surface-variant text-xs font-bold rounded-lg border border-outline-variant/30 hover:bg-surface-container-highest hover:text-on-surface transition-all">
                      Send Reminder
                    </button>
                  </div>
                </div>
              ))}

              <button className="border-2 border-dashed border-outline-variant/10 rounded-xl p-8 flex flex-col items-center justify-center text-on-surface-variant/40 w-full hover:border-outline-variant/30 transition-colors">
                <span className="material-symbols-outlined text-4xl mb-2">add_circle</span>
                <p className="text-xs uppercase tracking-widest font-bold">Record new balance</p>
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Settle Up Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-background/60 backdrop-blur-sm">
          <div className="w-full max-w-md bg-surface-container-highest rounded-2xl p-8 border border-outline-variant/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-headline text-xl font-bold">Settle Up</h3>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-surface-container/50 p-4 rounded-xl">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: selectedBalance.to.color + "20", color: selectedBalance.to.color }}
                >
                  {selectedBalance.to.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-xs text-on-surface-variant font-medium">Paying to</p>
                  <h4 className="font-bold">{selectedBalance.to.name}</h4>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-on-surface-variant">
                    Rs.
                  </span>
                  <input
                    className="w-full bg-surface-container border-none rounded-xl py-4 pl-12 pr-4 font-mono text-2xl font-bold focus:outline-none focus:ring-2 focus:ring-primary text-primary"
                    type="text"
                    defaultValue={selectedBalance.amount.toLocaleString()}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Payment Method
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Cash", "Bank", "EasyPaisa", "JazzCash"].map((m, i) => (
                    <button
                      key={m}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${
                        i === 0
                          ? "bg-primary text-on-primary-fixed"
                          : "bg-surface-container text-on-surface-variant border border-outline-variant/20 hover:border-primary/50"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Note (Optional)
                </label>
                <textarea
                  className="w-full bg-surface-container border-none rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary h-20 resize-none"
                  placeholder="e.g. Cleared grocery debt"
                />
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-4 bg-gradient-to-br from-primary to-secondary text-on-primary-fixed font-black uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-transform active:scale-95 shadow-xl shadow-primary/20"
              >
                Confirm Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
