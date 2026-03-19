import Link from "next/link";

const COLORS = ["#6C63FF", "#00D4AA", "#FF5C5C", "#FF8C42", "#A855F7", "#EC4899"];

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen w-full flex-col md:flex-row bg-background">
      {/* Left Panel - Form */}
      <section className="w-full md:w-1/2 bg-surface-container flex flex-col justify-center items-center px-8 py-12 md:px-24">
        <div className="w-full max-w-md">
          <div className="mb-10 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span
                className="material-symbols-outlined text-on-primary-fixed font-bold"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                account_balance_wallet
              </span>
            </div>
            <span className="font-headline font-black text-2xl tracking-tighter text-on-surface">
              BillSplit Auto
            </span>
          </div>

          <div className="mb-8">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight text-on-surface mb-2">
              Create Account
            </h1>
            <p className="text-on-surface-variant text-sm">
              Join the ecosystem of automated group finances.
            </p>
          </div>

          <form className="space-y-5" action="/dashboard">
            <div className="space-y-1.5">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Full Name
              </label>
              <input
                className="w-full h-12 bg-surface-container-low border-none rounded-xl px-4 text-on-surface ring-1 ring-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/50"
                placeholder="Enter your name"
                type="text"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Email
              </label>
              <input
                className="w-full h-12 bg-surface-container-low border-none rounded-xl px-4 text-on-surface ring-1 ring-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/50"
                placeholder="you@example.com"
                type="email"
              />
            </div>
            <div className="space-y-1.5">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Password
              </label>
              <input
                className="w-full h-12 bg-surface-container-low border-none rounded-xl px-4 text-on-surface ring-1 ring-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/50"
                placeholder="••••••••"
                type="password"
              />
              <div className="flex gap-1.5 h-1.5 w-full mt-2">
                <div className="flex-1 bg-secondary rounded-full" />
                <div className="flex-1 bg-secondary rounded-full" />
                <div className="flex-1 bg-surface-container-highest rounded-full" />
                <div className="flex-1 bg-surface-container-highest rounded-full" />
              </div>
              <p className="text-[10px] text-secondary font-medium tracking-tight">
                STRENGTH: MODERATE
              </p>
            </div>
            <div className="space-y-1.5">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Confirm Password
              </label>
              <input
                className="w-full h-12 bg-surface-container-low border-none rounded-xl px-4 text-on-surface ring-1 ring-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all placeholder:text-outline/50"
                placeholder="••••••••"
                type="password"
              />
            </div>

            {/* Color Selector */}
            <div className="space-y-3 py-2">
              <label className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                Select Identity Color
              </label>
              <div className="flex justify-between items-center bg-surface-container-low p-3 rounded-2xl ring-1 ring-outline-variant/10">
                {COLORS.map((color, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`w-8 h-8 rounded-full transition-transform hover:scale-110 ${
                      i === 0 ? "ring-2 ring-offset-4 ring-offset-surface-container ring-primary" : ""
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 py-2">
              <input
                className="w-5 h-5 rounded-md bg-surface-container-highest border-none ring-1 ring-outline-variant/30 text-primary mt-0.5"
                id="terms"
                type="checkbox"
              />
              <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="terms">
                I agree to the{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>{" "}
                and acknowledge the{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
              </label>
            </div>

            <Link
              href="/dashboard"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-headline font-bold text-lg kinetic-glow transition-all active:scale-[0.98] flex items-center justify-center"
            >
              Create Account
            </Link>
          </form>

          <p className="mt-8 text-center text-sm text-on-surface-variant">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-bold hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </section>

      {/* Right Panel - Features */}
      <section className="hidden md:flex w-1/2 bg-background flex-col justify-center px-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 blur-[100px] rounded-full" />

        <div className="relative z-10 space-y-12">
          <div className="space-y-4">
            <h2 className="font-headline text-5xl font-extrabold tracking-tighter text-on-surface leading-tight max-w-md">
              The future of group{" "}
              <span className="text-secondary italic">ledgering.</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-sm">
              Experience precision-engineered expense tracking for high-velocity lifestyles.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: "electric_bolt",
                color: "text-primary bg-primary/10",
                title: "Split easily",
                desc: "Advanced algorithms handle complex splits across multiple currencies and participants instantly.",
              },
              {
                icon: "monitoring",
                color: "text-secondary bg-secondary/10",
                title: "Track balances",
                desc: "Real-time visibility into net debt and receivable status with precision data rendering.",
              },
              {
                icon: "done_all",
                color: "text-on-surface bg-surface-container-highest",
                title: "Settle fast",
                desc: "One-tap settlement triggers that simplify complex chain-reimbursements between group members.",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="group flex items-start gap-6 p-6 rounded-2xl bg-surface-container-high/40 backdrop-blur-md ghost-border relative overflow-hidden transition-all hover:bg-surface-container-high/60"
                style={{ borderLeft: "4px solid", borderImage: "linear-gradient(to bottom, #a8a4ff, #49f4c8) 1" }}
              >
                <div className={`w-14 h-14 rounded-xl ${feat.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
                    {feat.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["AH", "AR", "SK"].map((initials, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-xs font-bold text-primary"
                >
                  {initials}
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                +12k
              </div>
            </div>
            <p className="text-xs text-on-surface-variant font-medium">
              Already managing{" "}
              <span className="text-secondary font-mono">Rs. 42M+</span> monthly.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
