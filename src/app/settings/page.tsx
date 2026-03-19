import Shell from "@/components/Shell";
import { ME } from "@/lib/data";

const SETTINGS_SECTIONS = [
  {
    title: "Profile",
    items: [
      { label: "Full Name", value: ME.name, type: "text" },
      { label: "Email Address", value: ME.email, type: "email" },
      { label: "Username", value: `@${ME.username}`, type: "text" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <Shell title="Settings">
      <div className="pt-8 px-6 max-w-3xl mx-auto space-y-10 pb-12">
        {/* Profile Card */}
        <section className="bg-surface-container rounded-2xl p-8 ghost-border">
          <h3 className="font-headline text-xl font-bold mb-6">Profile Settings</h3>
          <div className="flex items-center gap-6 mb-8">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold font-headline"
              style={{ backgroundColor: ME.color + "20", color: ME.color }}
            >
              {ME.avatar}
            </div>
            <div>
              <h4 className="font-bold text-xl">{ME.name}</h4>
              <p className="text-on-surface-variant text-sm">{ME.email}</p>
              <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full mt-1 inline-block">
                {ME.role}
              </span>
            </div>
            <button className="ml-auto px-4 py-2 border border-outline-variant/30 rounded-xl text-sm font-bold hover:bg-surface-container-highest transition-colors">
              Change Avatar
            </button>
          </div>
          <div className="space-y-4">
            {SETTINGS_SECTIONS[0].items.map((item) => (
              <div key={item.label} className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  {item.label}
                </label>
                <input
                  className="w-full h-12 bg-surface-container-low border-none rounded-xl px-4 text-on-surface ring-1 ring-outline-variant/20 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  type={item.type}
                  defaultValue={item.value}
                />
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-3 bg-gradient-to-r from-primary to-secondary text-on-primary-fixed font-bold rounded-xl hover:brightness-110 transition-all">
            Save Changes
          </button>
        </section>

        {/* Notifications */}
        <section className="bg-surface-container rounded-2xl p-8 ghost-border">
          <h3 className="font-headline text-xl font-bold mb-6">Notifications</h3>
          <div className="space-y-4">
            {[
              "New expense added to your group",
              "Someone settles a debt with you",
              "Payment reminder sent",
              "Group settlement complete",
            ].map((item) => (
              <div key={item} className="flex items-center justify-between py-2 border-b border-outline-variant/10 last:border-0">
                <span className="text-sm text-on-surface">{item}</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary" />
                </label>
              </div>
            ))}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-surface-container rounded-2xl p-8 border border-error/20">
          <h3 className="font-headline text-xl font-bold mb-2 text-error">Danger Zone</h3>
          <p className="text-on-surface-variant text-sm mb-6">
            These actions are irreversible. Please proceed with caution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 border border-error/30 text-error rounded-xl text-sm font-bold hover:bg-error/10 transition-colors">
              Delete All Data
            </button>
            <button className="px-6 py-3 bg-error text-on-error rounded-xl text-sm font-bold hover:brightness-110 transition-all">
              Delete Account
            </button>
          </div>
        </section>
      </div>
    </Shell>
  );
}
