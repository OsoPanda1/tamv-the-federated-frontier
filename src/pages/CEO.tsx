import { motion } from "framer-motion";
import { ExternalLink, Clock, Code, Award, BookOpen } from "lucide-react";

const milestones = [
  { year: "2024-2025", event: "Diseño y arquitectura del Códice Maestro TAMV DM-X4™" },
  { year: "2025", event: "Publicación en AVIXA Xchange — reconocimiento internacional" },
  { year: "2025", event: "Desarrollo de Isabella AI — IA ética y emocional" },
  { year: "2025", event: "Creación del concepto CITEMESH" },
  { year: "Feb 2026", event: "Lanzamiento público oficial de TAMV Online" },
];

const links = [
  { label: "Blog Oficial", url: "https://tamvonlinenetwork.blogspot.com", icon: BookOpen },
  { label: "GitHub", url: "https://github.com/OsoPanda1", icon: Code },
  { label: "AVIXA Xchange", url: "https://xchange.avixa.org/posts/tamv-online-primer-plataforma-mexicana-civilizacional-digital", icon: Award },
];

export default function CEO() {
  return (
    <div>
      {/* Hero Bio */}
      <section className="min-h-[70vh] flex items-center gradient-hero">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl mx-auto">
            <p className="font-display text-xs tracking-[0.4em] text-secondary mb-3">CEO & FUNDADOR</p>
            <h1 className="font-display text-3xl md:text-5xl font-black text-foreground mb-2">
              Edwin Oswaldo <span className="text-primary text-glow-cyan">Castillo Trejo</span>
            </h1>
            <p className="font-display text-lg text-secondary mb-6">(Anubis Villaseñor)</p>
            
            <div className="line-decoration w-48 mb-8" />

            <div className="space-y-4 font-body text-base text-muted-foreground leading-relaxed">
              <p>
                Desarrollador independiente mexicano, visionario y arquitecto del ecosistema TAMV Online. 
                Desde un pueblito en México, ha dedicado más de <span className="text-primary font-semibold">21,000 horas documentadas</span> a 
                construir un ecosistema civilizatorio que desafía a las plataformas globales más grandes del mundo.
              </p>
              <p>
                Creador de <span className="text-primary">Isabella AI</span>, una inteligencia artificial ética y emocionalmente inteligente, 
                y del concepto <span className="text-primary">CITEMESH</span> (Civilizational Intelligence Engine and Systemic Solutions Meshwork).
              </p>
              <p>
                Su trabajo ha sido reconocido en plataformas internacionales como <span className="text-secondary">AVIXA Xchange</span>, 
                foros de OpenAI, y la comunidad GPT Builders. Edwin defiende un modelo de tecnología que prioriza 
                la dignidad humana, la gobernanza ética y la soberanía digital.
              </p>
              <p className="text-secondary italic">
                "Este proyecto es dedicado a mi madre, Reina Trejo Serrano. Gracias por nunca rendirte."
              </p>
            </div>

            <div className="flex items-center gap-4 mt-8">
              <Clock className="text-primary" size={20} />
              <span className="font-mono text-sm text-muted-foreground">+21,000 horas registradas y documentadas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-center text-foreground mb-12">
            <span className="text-primary">Trayectoria</span>
          </h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4 items-start"
              >
                <div className="min-w-[100px] font-mono text-xs text-primary mt-1">{m.year}</div>
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="font-body text-sm text-muted-foreground">{m.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-display text-xl font-bold text-center text-foreground mb-8">
            Presencia <span className="text-secondary">Digital</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-card rounded-lg p-6 border border-border hover:border-primary/30 transition-all duration-500 text-center group"
              >
                <link.icon className="mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" size={24} />
                <p className="font-body text-sm text-foreground">{link.label}</p>
                <ExternalLink className="mx-auto mt-2 text-muted-foreground" size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
