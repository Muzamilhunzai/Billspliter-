"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "dashboard", label: "Dashboard" },
  { href: "/groups", icon: "group", label: "Groups" },
  { href: "/balances", icon: "account_balance_wallet", label: "Balances" },
  { href: "/reports", icon: "query_stats", label: "Reports" },
  { href: "/admin", icon: "admin_panel_settings", label: "Admin" },
  { href: "/settings", icon: "settings", label: "Settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-full w-[240px] z-40 bg-surface-container border-r border-on-surface/10 hidden md:flex flex-col py-8">
      <div className="px-6 mb-10">
        <h1 className="font-headline text-2xl font-bold text-on-surface tracking-tighter">
          BillSplit Auto
        </h1>
        <p className="text-on-surface-variant text-xs font-medium mt-1 uppercase tracking-widest">
          Smart Ledger
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const isAdmin = item.href === "/admin";

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`py-3 px-6 flex items-center gap-3 font-medium text-sm transition-all duration-200 ${
                isActive
                  ? isAdmin
                    ? "bg-[#FF8C42]/10 text-[#FF8C42] rounded-r-full border-l-4 border-[#FF8C42]"
                    : "bg-primary/20 text-primary rounded-r-full border-l-4 border-primary"
                  : "text-on-surface/50 hover:text-on-surface hover:bg-on-surface/5"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={
                  isActive
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 mt-auto">
        <button className="w-full py-3 rounded-xl bg-gradient-to-br from-primary to-secondary text-on-primary-fixed font-bold shadow-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            add_circle
          </span>
          Add Expense
        </button>
        <Link
          href="/login"
          className="mt-6 text-on-surface/50 hover:text-on-surface flex items-center gap-3 font-medium transition-all py-3 text-sm"
        >
          <span className="material-symbols-outlined">logout</span>
          <span>Logout</span>
        </Link>
      </div>
    </aside>
  );
}
