import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";

interface ShellProps {
  title: string;
  children: React.ReactNode;
}

export default function Shell({ title, children }: ShellProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <TopBar title={title} />
      <main className="md:ml-[240px] pt-16 pb-24 md:pb-12 min-h-screen">
        {children}
      </main>
      <BottomNav />
      {/* FAB desktop */}
      <button className="fixed bottom-8 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-on-primary-fixed shadow-[0_0_40px_rgba(168,164,255,0.4)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center z-50 group hidden md:flex">
        <span className="material-symbols-outlined text-3xl transition-transform group-hover:rotate-90">
          add
        </span>
        <div className="absolute -top-12 right-0 bg-surface-container-highest text-on-surface text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap ghost-border">
          Add Expense
        </div>
      </button>
    </div>
  );
}
