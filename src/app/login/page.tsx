import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row overflow-hidden bg-background">
      {/* Left Panel */}
      <section className="hidden md:flex md:w-1/2 bg-surface-container-low relative flex-col items-center justify-center p-12 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[120px] rounded-full" />

        <div className="relative z-10 text-center mb-16">
          <h1 className="font-headline font-black text-6xl tracking-tighter text-on-surface mb-4">
            BillSplit <span className="gradient-text">Auto</span>
          </h1>
          <p className="text-on-surface-variant text-lg font-medium max-w-xs mx-auto">
            Smart Ledger for high-velocity financial tracking.
          </p>
        </div>

        <div className="relative z-10 space-y-6 w-full max-w-sm">
          {[
            {
              icon: "payments",
              color: "text-secondary bg-secondary/20",
              title: "Ali paid",
              value: "Rs. 3,600",
              sub: "Dinner",
              offset: "-translate-x-8",
            },
            {
              icon: "account_balance_wallet",
              color: "text-primary bg-primary/20",
              title: "You are owed",
              value: "Rs. 850",
              sub: "Active Balances",
              offset: "translate-x-4",
            },
            {
              icon: "check_circle",
              color: "text-secondary bg-secondary/10",
              title: "Group settled ✓",
              value: "",
              sub: "Weekend Trip",
              offset: "-translate-x-4",
            },
          ].map((card, i) => (
            <div
              key={i}
              className={`bg-surface-container-highest/40 backdrop-blur-xl p-6 rounded-xl border border-outline-variant/10 flex items-center gap-4 transform ${card.offset} shadow-2xl`}
              style={{ borderLeft: "4px solid", borderImage: "linear-gradient(180deg, #a8a4ff 0%, #49f4c8 100%) 1" }}
            >
              <div className={`h-12 w-12 rounded-full ${card.color} flex items-center justify-center`}>
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <div>
                <p className="text-on-surface text-sm font-medium">
                  {card.title}{" "}
                  {card.value && (
                    <span className="font-mono text-secondary">{card.value}</span>
                  )}
                </p>
                <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-0.5">
                  {card.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Right Panel */}
      <section className="flex-1 bg-surface-container flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-[400px]">
          <header className="mb-10">
            <div className="md:hidden mb-8">
              <h2 className="font-headline font-black text-3xl tracking-tighter text-on-surface">
                BillSplit <span className="gradient-text">Auto</span>
              </h2>
            </div>
            <h2 className="font-headline font-bold text-4xl text-on-surface tracking-tight mb-2">
              Welcome back
            </h2>
            <p className="text-on-surface-variant">
              Access your kinetic ledger and split effortlessly.
            </p>
          </header>

          <form className="space-y-6" action="/dashboard">
            <div className="space-y-2">
              <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant ml-1">
                Email Address
              </label>
              <input
                className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                placeholder="name@example.com"
                type="email"
                defaultValue="ali@example.com"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-xs font-label uppercase tracking-widest text-on-surface-variant">
                  Password
                </label>
                <a href="#" className="text-xs font-medium text-primary hover:text-secondary transition-colors">
                  Forgot password?
                </a>
              </div>
              <input
                className="w-full h-14 px-5 bg-surface-container-highest border-none rounded-xl text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                placeholder="••••••••"
                type="password"
                defaultValue="password"
              />
            </div>
            <Link
              href="/dashboard"
              className="w-full h-14 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold rounded-xl kinetic-glow hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
            >
              Login to Dashboard
              <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </form>

          <div className="relative my-10 flex items-center">
            <div className="flex-grow border-t border-outline-variant/20" />
            <span className="flex-shrink mx-4 text-xs font-label uppercase tracking-widest text-outline">
              or
            </span>
            <div className="flex-grow border-t border-outline-variant/20" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Link
              href="/dashboard"
              className="h-12 border border-outline-variant/30 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
              Demo User
            </Link>
            <Link
              href="/admin"
              className="h-12 border border-outline-variant/30 rounded-xl text-sm font-medium text-on-surface hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
              Demo Admin
            </Link>
          </div>

          <footer className="mt-10 text-center">
            <p className="text-on-surface-variant text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/register"
                className="text-primary font-bold hover:underline decoration-secondary decoration-2 underline-offset-4 ml-1"
              >
                Register Now
              </Link>
            </p>
          </footer>
        </div>
      </section>

      <div className="md:hidden fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
    </main>
  );
}
