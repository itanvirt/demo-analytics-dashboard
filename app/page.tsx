import { TrendingUp, TrendingDown, ShoppingCart, Users, Eye, Package, Github, Database, LayoutDashboard } from "lucide-react";
import { revenueData, trafficSources, conversionData, topPages, kpis } from "./data";
import { RevenueChart, OrdersChart, TrafficPieChart, ConversionChart } from "./components/Charts";

const iconMap = [TrendingUp, ShoppingCart, Package, TrendingUp, Users, ShoppingCart];

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="sticky top-0 z-10 border-b" style={{ background: "rgba(8,8,15,0.9)", borderColor: "var(--border)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LayoutDashboard size={18} className="text-violet-400" />
            <span className="font-semibold text-white text-sm">Analytics Dashboard</span>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: "rgba(139,92,246,0.15)", color: "#a78bfa" }}>Demo</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs" style={{ color: "#475569" }}>Mock data — 2024</span>
            <a
              href="https://github.com/itanvirt/demo-analytics-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
              style={{ background: "var(--surface-2)", color: "#94a3b8", border: "1px solid var(--border)" }}
            >
              <Github size={13} />
              Source
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Data Sources Banner */}
        <div className="flex flex-wrap items-center gap-2 mb-8 p-3 rounded-xl text-xs" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <Database size={13} style={{ color: "#64748b" }} />
          <span style={{ color: "#64748b" }}>Data sources:</span>
          {[
            { label: "Google Analytics 4", color: "#f97316" },
            { label: "Shopify", color: "#10b981" },
            { label: "Postgres DB", color: "#06b6d4" },
          ].map((s) => (
            <span key={s.label} className="px-2 py-0.5 rounded-full font-medium" style={{ background: `${s.color}15`, color: s.color, border: `1px solid ${s.color}30` }}>
              {s.label}
            </span>
          ))}
          <span style={{ color: "#334155" }}>·</span>
          <span style={{ color: "#475569" }}>Seeded with realistic mock data for demo purposes</span>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {kpis.map((kpi, i) => {
            const Icon = iconMap[i];
            return (
              <div key={kpi.label} className="p-4 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
                <div className="flex items-center justify-between mb-3">
                  <Icon size={15} style={{ color: "#475569" }} />
                  <span className="flex items-center gap-0.5 text-xs font-semibold" style={{ color: kpi.up ? "#10b981" : "#f87171" }}>
                    {kpi.up ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                    {kpi.change}
                  </span>
                </div>
                <p className="text-lg font-bold text-white leading-none mb-1">{kpi.value}</p>
                <p className="text-xs" style={{ color: "#475569" }}>{kpi.label}</p>
              </div>
            );
          })}
        </div>

        {/* Charts Row 1 */}
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2 p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-semibold text-white text-sm">Revenue Over Time</h2>
                <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Monthly revenue — Jan to Dec 2024</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-lg font-medium" style={{ background: "rgba(139,92,246,0.1)", color: "#a78bfa", border: "1px solid rgba(139,92,246,0.2)" }}>
                GA4 + Shopify
              </span>
            </div>
            <RevenueChart data={revenueData} />
          </div>

          <div className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="mb-4">
              <h2 className="font-semibold text-white text-sm">Traffic Sources</h2>
              <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Where visitors come from</p>
            </div>
            <TrafficPieChart data={trafficSources} />
            <div className="space-y-2 mt-3">
              {trafficSources.map((s) => (
                <div key={s.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                    <span style={{ color: "#94a3b8" }}>{s.name}</span>
                  </div>
                  <span className="font-medium text-white">{s.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid lg:grid-cols-3 gap-4 mb-4">
          <div className="p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="mb-4">
              <h2 className="font-semibold text-white text-sm">Conversion Rate Trend</h2>
              <p className="text-xs mt-0.5" style={{ color: "#475569" }}>8-week rolling — Postgres</p>
            </div>
            <ConversionChart data={conversionData} />
            <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
              <span className="text-xs" style={{ color: "#475569" }}>Current week</span>
              <span className="text-lg font-bold" style={{ color: "#10b981" }}>3.7%</span>
            </div>
          </div>

          <div className="lg:col-span-2 p-6 rounded-2xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-semibold text-white text-sm">Monthly Orders</h2>
                <p className="text-xs mt-0.5" style={{ color: "#475569" }}>Order volume by month — Shopify</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-lg font-medium" style={{ background: "rgba(6,182,212,0.1)", color: "#22d3ee", border: "1px solid rgba(6,182,212,0.2)" }}>
                Shopify API
              </span>
            </div>
            <OrdersChart data={revenueData} />
          </div>
        </div>

        {/* Top Pages Table */}
        <div className="p-6 rounded-2xl mb-8" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="font-semibold text-white text-sm">Top Pages</h2>
              <p className="text-xs mt-0.5" style={{ color: "#475569" }}>By pageviews — Google Analytics 4</p>
            </div>
            <Eye size={15} style={{ color: "#475569" }} />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {["Page", "Views", "Bounce Rate", "Avg. Time"].map((h) => (
                    <th key={h} className="text-left pb-3 font-medium text-xs" style={{ color: "#475569" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {topPages.map((row, i) => (
                  <tr key={row.page} style={{ borderBottom: i < topPages.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <td className="py-3 font-mono text-xs" style={{ color: "#a78bfa" }}>{row.page}</td>
                    <td className="py-3 text-white font-medium text-xs">{row.views.toLocaleString()}</td>
                    <td className="py-3 text-xs" style={{ color: "#94a3b8" }}>{row.bounce}</td>
                    <td className="py-3 text-xs" style={{ color: "#94a3b8" }}>{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center py-4">
          <p className="text-xs" style={{ color: "#334155" }}>
            Demo by{" "}
            <a href="https://tanviratuhin.com" style={{ color: "#7c3aed" }}>Tanvir Tuhin</a>
            {" "}· All data is mock/seeded ·{" "}
            <a href="https://github.com/itanvirt/demo-analytics-dashboard" style={{ color: "#7c3aed" }}>View source</a>
          </p>
        </div>
      </main>
    </div>
  );
}
