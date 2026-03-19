"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/dashboard", icon: "home", label: "Home" },
  { href: "/groups", icon: "group", label: "Groups" },
  { href: "/balances", icon: "account_balance_wallet", label: "Balances" },
  { href: "/reports", icon: "analytics", label: "Reports" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center h-20 pb-safe px-4 bg-background/90 backdrop-blur-xl border-t border-on-surface/5 z-50 rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
      {NAV_ITEMS.slice(0, 2).map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all ${
              isActive ? "text-secondary scale-110" : "text-on-surface/40"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="text-[10px] uppercase tracking-widest mt-1 font-medium">
              {item.label}
            </span>
          </Link>
        );
      })}

      {/* FAB center */}
      <button className="flex flex-col items-center justify-center -translate-y-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/30">
          <span
            className="material-symbols-outlined text-on-primary-fixed text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            add_circle
          </span>
        </div>
      </button>

      {NAV_ITEMS.slice(2).map((item) => {
        const isActive = pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center justify-center transition-all ${
              isActive ? "text-secondary scale-110" : "text-on-surface/40"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            <span className="text-[10px] uppercase tracking-widest mt-1 font-medium">
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
