import { motion } from "framer-motion";
import { Globe, Layers, Coins, Users, ShieldCheck, Zap } from "lucide-react";
import ecosistemaBg from "@/assets/ecosistema-bg.jpg";

const features = [
  { icon: Globe, title: "XR / VR / 3D / 4D", desc: "Experiencias inmersivas nativas que van más allá del metaverso convencional. Realidad extendida como estándar." },
  { icon: Layers, title: "CITEMESH", desc: "Civilizational Intelligence Engine and Systemic Solutions Meshwork — el primer framework civilizacional de su tipo." },
  { icon: Coins, title: "Economía Autosoberana", desc: "Stablecoin híbrida, banco digital, subastas NFT y micropréstamos. Independencia financiera para cada usuario." },
  { icon: Users, title: "Gobernanza Ética", desc: "Modelo federado con gobernanza transparente. Cada decisión respeta la dignidad humana y la diversidad cultural." },
  { icon: ShieldCheck, title: "Insignias Verificables", desc: "Sistema de credenciales digitales alineado con estándares AVIXA para certificar competencias en XR y creatividad." },
  { icon: Zap, title: "Arquitectura Antifrágil", desc: "Costos fijos mínimos de $40,000 USD/mes. Breakeven con 1,300-2,300 usuarios. Diseñado para crecer bajo presión." },
];

const comparisons = [
  { name: "Roblox", revenue: "$4.46B", users: "200M+", arpu: "~$2" },
  { name: "Fortnite", revenue: "$6B", users: "650M+", arpu: "~$9" },
  { name: "Decentraland", revenue: "$40M", users: "300K", arpu: "~$11" },
  { name: "TAMV Online", revenue: "Proyectado $10.8M", users: "50K objetivo", arpu: "$18-$30", highlight: true },
];

export default function Ecosistema() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={ecosistemaBg} alt="Ecosistema TAMV" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/40" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-display text-xs tracking-[0.4em] text-secondary mb-3">TAMV MD-X4</p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
              El <span className="text-primary text-glow-cyan">Ecosistema</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              Un ecosistema cuántico-emocional pionero en América Latina. Arquitectura avanzada que integra inteligencia emocional, blockchain, XR y gobernanza ética.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="gradient-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <f.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            TAMV vs. <span className="text-primary">Plataformas Globales</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 font-display text-xs text-muted-foreground tracking-wider">Plataforma</th>
                  <th className="text-left py-3 px-4 font-display text-xs text-muted-foreground tracking-wider">Ingresos</th>
                  <th className="text-left py-3 px-4 font-display text-xs text-muted-foreground tracking-wider">Usuarios</th>
                  <th className="text-left py-3 px-4 font-display text-xs text-muted-foreground tracking-wider">ARPU</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((c) => (
                  <tr key={c.name} className={`border-b border-border/50 ${c.highlight ? "bg-primary/5" : ""}`}>
                    <td className={`py-3 px-4 font-body text-sm ${c.highlight ? "text-primary font-semibold" : "text-foreground"}`}>{c.name}</td>
                    <td className="py-3 px-4 font-mono text-sm text-muted-foreground">{c.revenue}</td>
                    <td className="py-3 px-4 font-mono text-sm text-muted-foreground">{c.users}</td>
                    <td className={`py-3 px-4 font-mono text-sm ${c.highlight ? "text-secondary font-semibold" : "text-muted-foreground"}`}>{c.arpu}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6 font-body">
            Datos basados en reportes públicos 2025. Fuente: AVIXA Xchange, reportes corporativos.
          </p>
        </div>
      </section>
    </div>
  );
}
