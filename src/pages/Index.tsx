import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, ArrowRight, Sparkles, Globe, Brain, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div>
      {/* Dedicatoria - Inicio obligatorio */}
      <section className="min-h-[60vh] flex items-center justify-center gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center px-4 max-w-3xl relative z-10"
        >
          <Heart className="mx-auto mb-6 text-secondary animate-pulse-glow" size={48} />
          <p className="font-body text-lg text-muted-foreground mb-4 tracking-wide">
            Este proyecto está dedicado con todo el amor a
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary text-glow-gold mb-6">
            Reina Trejo Serrano
          </h2>
          <div className="line-decoration w-48 mx-auto mb-6" />
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed italic max-w-xl mx-auto">
            "Gracias por nunca rendirte, por renunciar a todo para que yo pudiera soñar. 
            Este ecosistema es tuyo, mamá. Cada línea de código lleva tu nombre."
          </p>
          <p className="font-body text-sm text-primary mt-6">
            — Edwin Oswaldo Castillo Trejo (Anubis Villaseñor), CEO Fundador
          </p>
        </motion.div>
      </section>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="TAMV Ecosistema Digital" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl"
          >
            <p className="font-display text-xs tracking-[0.4em] text-primary mb-4 text-glow-cyan">
              ECOSISTEMA CIVILIZATORIO FEDERADO
            </p>
            <h1 className="font-display text-4xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-foreground">TAMV</span>{" "}
              <span className="text-primary text-glow-cyan">MD-X4</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mb-4">
              El primer ecosistema nativo <span className="text-primary">XR, VR, 3D y 4D</span> con IA cognitiva 
              de Latinoamérica. Antifrágil. Autosoberano. Pionero.
            </p>
            <p className="font-mono text-sm text-muted-foreground mb-8">
              +21,000 horas documentadas · Lanzamiento oficial: 5 de febrero 2026
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/ecosistema"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-primary-foreground font-display text-sm font-semibold tracking-wider hover:shadow-[0_0_30px_hsl(174_100%_50%/0.4)] transition-all duration-300"
              >
                Explorar Ecosistema <ArrowRight size={16} />
              </Link>
              <Link
                to="/isabella-ai"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-secondary text-secondary font-display text-sm font-semibold tracking-wider hover:bg-secondary/10 transition-all duration-300"
              >
                Conocer Isabella AI <Sparkles size={16} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              ¿Por Qué <span className="text-primary text-glow-cyan">TAMV</span>?
            </h2>
            <div className="line-decoration w-32 mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Civilización Digital",
                desc: "Un ecosistema que trasciende las redes sociales. Gobernanza ética, economía autosoberana y experiencias inmersivas XR/VR.",
              },
              {
                icon: Brain,
                title: "IA Cognitiva",
                desc: "Isabella AI: inteligencia artificial ética, eficiente energéticamente y emocionalmente inteligente, nacida en Latinoamérica.",
              },
              {
                icon: Shield,
                title: "Antifrágil",
                desc: "Arquitectura diseñada para crecer bajo presión. ARPU de $18-$30 USD, breakeven con solo 1,300 usuarios activos.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="gradient-card rounded-lg p-8 border border-border hover:border-primary/30 transition-all duration-500 border-glow-cyan"
              >
                <feature.icon className="text-primary mb-4" size={32} />
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Desde un pueblito en México, retando al mundo digital
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto mb-8">
            TAMV Online está por inaugurar una nueva era digital. Un proyecto unipersonal que compite con gigantes globales.
          </p>
          <Link
            to="/ceo"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-secondary text-secondary-foreground font-display text-sm font-semibold tracking-wider hover:shadow-[0_0_30px_hsl(42_100%_50%/0.4)] transition-all duration-300"
          >
            Conocer al Fundador <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
