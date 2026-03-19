import Shell from "@/components/Shell";
import { GROUPS, formatRs } from "@/lib/data";
import Link from "next/link";

export default function GroupsPage() {
  return (
    <Shell title="Groups">
      <div className="pt-8 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-2">
              Your Groups
            </h2>
            <p className="text-on-surface-variant">
              Track shared expenses across {GROUPS.filter((g) => g.status === "active").length} active groups.
            </p>
          </div>
          <button className="bg-gradient-to-br from-primary to-secondary text-on-primary-fixed px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 w-full md:w-auto">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              add_circle
            </span>
            New Group
          </button>
        </header>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {GROUPS.map((group) => (
            <div
              key={group.id}
              className="bg-surface-container group hover:bg-surface-container-high transition-all duration-300 rounded-2xl overflow-hidden relative flex flex-col ghost-border"
              style={{ borderLeft: `4px solid ${group.accentColor}` }}
            >
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(to right, ${group.accentColor}66, ${group.accentColor}22)`,
                }}
              />
              <div className="p-6 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-2xl mb-2 block">{group.emoji}</span>
                    <h3 className="font-headline text-xl font-bold text-on-surface">
                      {group.name}
                    </h3>
                  </div>
                  {group.status === "active" && (
                    <span className="bg-secondary-container/30 text-secondary text-[10px] font-mono font-bold px-2 py-1 rounded tracking-tighter uppercase">
                      Active
                    </span>
                  )}
                </div>

                <div className="flex items-center -space-x-3 mb-8">
                  {group.members.slice(0, 4).map((member) => (
                    <div
                      key={member.id}
                      className="w-9 h-9 rounded-full border-2 border-surface-container flex items-center justify-center text-xs font-bold"
                      style={{ backgroundColor: member.color + "20", color: member.color }}
                    >
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  ))}
                  {group.members.length > 4 && (
                    <div className="w-9 h-9 rounded-full border-2 border-surface-container bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-primary">
                      +{group.members.length - 4}
                    </div>
                  )}
                </div>

                <div className="mt-auto space-y-4">
                  <div className="text-sm text-on-surface-variant">
                    <span className="font-body">
                      {group.expenses.length} expenses ·{" "}
                      <span className="font-mono text-on-surface">
                        {formatRs(group.totalSpent)} total
                      </span>
                    </span>
                  </div>

                  <div>
                    {group.yourBalance > 0 && (
                      <span className="px-3 py-1 bg-secondary-container/20 text-secondary text-xs font-bold rounded-full border border-secondary/10">
                        You are owed {formatRs(group.yourBalance)}
                      </span>
                    )}
                    {group.yourBalance < 0 && (
                      <span className="px-3 py-1 bg-error-container/20 text-error-dim text-xs font-bold rounded-full border border-error/10">
                        You owe {formatRs(group.yourBalance)}
                      </span>
                    )}
                    {group.yourBalance === 0 && (
                      <span className="px-3 py-1 bg-surface-container-highest text-on-surface-variant text-xs font-bold rounded-full border border-outline-variant/20">
                        Settled Up
                      </span>
                    )}
                  </div>

                  <Link
                    href={`/groups/${group.id}`}
                    className="pt-4 border-t border-outline-variant/10 flex items-center justify-between text-primary font-headline font-bold text-sm hover:gap-3 transition-all"
                  >
                    View Group
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Add New Placeholder */}
          <button className="border-2 border-dashed border-outline-variant/30 rounded-2xl flex flex-col items-center justify-center p-8 group hover:border-primary/50 transition-all min-h-[320px]">
            <div className="w-16 h-16 rounded-full bg-surface-container-highest flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-primary text-3xl">add_circle</span>
            </div>
            <span className="font-headline text-lg font-bold text-on-surface">
              Create New Group
            </span>
            <p className="text-on-surface-variant text-sm text-center mt-2 max-w-[200px]">
              Start splitting bills with friends and family instantly.
            </p>
          </button>
        </div>
      </div>
    </Shell>
  );
}
