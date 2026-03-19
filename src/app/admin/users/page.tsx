import Shell from "@/components/Shell";
import { USERS } from "@/lib/data";
import Link from "next/link";

const STATUS_STYLE = {
  active: "text-secondary",
  blocked: "text-error",
  pending: "text-on-surface-variant",
};
const STATUS_DOT = {
  active: "bg-secondary shadow-[0_0_8px_rgba(73,244,200,0.6)]",
  blocked: "bg-error shadow-[0_0_8px_rgba(255,110,132,0.6)]",
  pending: "bg-on-surface-variant",
};

export default function AdminUsersPage() {
  return (
    <Shell title="Manage Users">
      <div className="pt-8 px-6 md:px-10 max-w-7xl mx-auto">
        {/* Breadcrumb & Title */}
        <div className="flex items-center gap-2 text-primary font-bold text-sm mb-6">
          <Link href="/admin" className="flex items-center gap-1 hover:underline">
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            Back to Admin
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 lg:pb-0">
            {["All Users", "Active", "Blocked", "Admins"].map((t, i) => (
              <button
                key={t}
                className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  i === 0
                    ? "bg-primary text-on-primary-fixed font-bold"
                    : "text-on-surface/60 hover:text-on-surface hover:bg-surface-container-highest"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center bg-surface-container-highest px-4 py-3 rounded-xl border border-on-surface/5 max-w-sm w-full">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
            <input
              className="bg-transparent border-none focus:outline-none text-sm text-on-surface placeholder:text-on-surface-variant w-full ml-2"
              placeholder="Search accounts..."
              type="text"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-surface-container-low rounded-2xl overflow-hidden border border-on-surface/5 shadow-2xl">
          <div className="overflow-x-auto scrollbar-none">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-surface-container-high border-b border-on-surface/5">
                  <th className="px-6 py-5 w-12">
                    <input className="rounded bg-background border-on-surface/10 text-primary" type="checkbox" />
                  </th>
                  {["User Identity", "Email Address", "Role", "Groups", "Total Expenses", "Joined", "Status", ""].map((h) => (
                    <th key={h} className="px-6 py-5 text-[10px] uppercase tracking-widest font-bold text-on-surface-variant whitespace-nowrap">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-on-surface/5">
                {USERS.map((user) => (
                  <tr key={user.id} className="group hover:bg-surface-container-highest/50 transition-colors">
                    <td className="px-6 py-5">
                      <input className="rounded bg-background border-on-surface/10 text-primary" type="checkbox" />
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-headline border border-on-surface/5"
                          style={{ backgroundColor: user.color + "20", color: user.color }}
                        >
                          {user.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-on-surface">{user.name}</p>
                          <p className="text-xs text-on-surface-variant">@{user.username}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-sm font-medium text-on-surface-variant">
                      {user.email}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span
                        className={`inline-block px-3 py-1 text-[10px] font-bold rounded-full uppercase tracking-tighter ${
                          user.role === "admin"
                            ? "bg-primary/20 text-primary"
                            : "bg-surface-container text-on-surface"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center font-mono text-sm">
                      {String(user.groups).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-5 text-right font-mono text-sm text-secondary">
                      Rs. {user.totalExpenses.toLocaleString()}.00
                    </td>
                    <td className="px-6 py-5 text-center text-xs text-on-surface-variant whitespace-nowrap">
                      {user.joinedAt}
                    </td>
                    <td className="px-6 py-5 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${STATUS_DOT[user.status]}`} />
                        <span className={`text-xs font-bold uppercase ${STATUS_STYLE[user.status]}`}>
                          {user.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-on-surface/40 hover:text-on-surface transition-colors p-2 rounded-lg hover:bg-surface-container-highest">
                        <span className="material-symbols-outlined text-lg">more_vert</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between mb-20">
          <p className="text-sm text-on-surface-variant">
            Showing {USERS.length} of 248 users
          </p>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-on-surface/10 hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_left</span>
            </button>
            {[1, 2, 3].map((p) => (
              <button
                key={p}
                className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                  p === 1
                    ? "bg-primary text-on-primary-fixed"
                    : "border border-on-surface/10 hover:bg-surface-container-highest"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="w-10 h-10 rounded-lg flex items-center justify-center border border-on-surface/10 hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        {/* Bulk Action Bar */}
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] bg-surface-container-highest rounded-2xl py-4 px-8 shadow-2xl border border-primary/20 flex items-center justify-between z-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-primary font-bold font-mono text-sm">2</span>
            </div>
            <span className="text-sm font-bold text-on-surface">users selected</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-xl text-on-surface/70 hover:text-on-surface hover:bg-surface-container-high transition-all text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">block</span> Block
            </button>
            <button className="px-6 py-2 rounded-xl bg-error text-on-error font-bold text-sm hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-error/20">
              <span className="material-symbols-outlined text-lg">delete</span> Delete
            </button>
          </div>
        </div>
      </div>
    </Shell>
  );
}
