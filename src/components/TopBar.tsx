"use client";

interface TopBarProps {
  title: string;
}

export default function TopBar({ title }: TopBarProps) {
  return (
    <header className="fixed top-0 right-0 left-0 md:left-[240px] h-16 z-50 bg-background/70 backdrop-blur-md flex justify-between items-center px-6 border-b border-on-surface/5">
      <h2 className="font-headline font-extrabold text-xl text-on-surface tracking-tight">
        {title}
      </h2>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center bg-surface-container rounded-full px-4 py-1.5 ghost-border">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">
            search
          </span>
          <input
            className="bg-transparent border-none focus:outline-none text-sm text-on-surface w-48 ml-2 placeholder:text-on-surface-variant/50"
            placeholder="Search..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          <button className="text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-on-primary-fixed font-bold text-xs">
            AH
          </div>
        </div>
      </div>
    </header>
  );
}
