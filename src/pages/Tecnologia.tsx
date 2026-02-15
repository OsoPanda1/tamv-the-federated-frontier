import { motion } from "framer-motion";
import { Database, Network, Cpu, Lock, Layers, Workflow } from "lucide-react";

const stack = [
  { icon: Network, title: "Arquitectura Federada", desc: "Red descentralizada con nodos autónomos que comparten gobernanza. Sin punto único de fallo." },
  { icon: Cpu, title: "IA Cognitiva 4D", desc: "Isabella AI opera en cuatro dimensiones: textual, visual, emocional y espacial (XR)." },
  { icon: Database, title: "Blockchain Híbrida", desc: "Stablecoin propia, smart contracts para gobernanza y registro inmutable de transacciones." },
  { icon: Lock, title: "Soberanía de Datos", desc: "Zero-knowledge proofs y encriptación end-to-end. Los datos pertenecen al usuario, siempre." },
  { icon: Layers, title: "Capas XR Nativas", desc: "WebXR, WebGL y frameworks 3D/4D integrados como primera capa, no como extensión." },
  { icon: Workflow, title: "CITEMESH Framework", desc: "Motor de inteligencia civilizacional que conecta soluciones sistémicas a través de una malla adaptativa." },
];

const specs = [
  { label: "Protocolo de Red", value: "Federado P2P con nodos soberanos" },
  { label: "Motor IA", value: "Isabella AI — Cognitiva Emocional" },
  { label: "Inmersión", value: "WebXR / WebGL / 3D / 4D nativo" },
  { label: "Economía", value: "Stablecoin híbrida + NFT + DeFi" },
  { label: "Seguridad", value: "ZK-Proofs + E2E Encryption" },
  { label: "Gobernanza", value: "DAO ética con pesos culturales" },
  { label: "Credenciales", value: "Insignias verificables (AVIXA-aligned)" },
  { label: "Escalabilidad", value: "Breakeven: 1,300 usuarios activos" },
];

export default function Tecnologia() {
  return (
    <div>
      <section className="min-h-[50vh] flex items-center gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-display text-xs tracking-[0.4em] text-secondary mb-3">ARQUITECTURA TÉCNICA</p>
            <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-4">
              <span className="text-primary text-glow-cyan">Tecnología</span>
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl">
              La columna vertebral técnica de TAMV: una arquitectura antifrágil diseñada para sostener una civilización digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stack */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stack.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="gradient-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-500"
              >
                <s.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display text-base font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            Especificaciones <span className="text-secondary">Técnicas</span>
          </h2>
          <div className="space-y-3">
            {specs.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="flex justify-between items-center py-3 border-b border-border/50"
              >
                <span className="font-display text-xs tracking-wider text-muted-foreground">{s.label}</span>
                <span className="font-body text-sm text-primary text-right">{s.value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
