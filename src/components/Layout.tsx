import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Inicio" },
  { path: "/ecosistema", label: "Ecosistema" },
  { path: "/isabella-ai", label: "Isabella AI" },
  { path: "/ceo", label: "CEO & Fundador" },
  { path: "/tecnologia", label: "Tecnología" },
  { path: "/comunidad", label: "Comunidad" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-surface">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <Link to="/" className="font-display text-xl font-bold tracking-wider text-primary text-glow-cyan">
            TAMV<span className="text-secondary"> ONLINE</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-body font-medium transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary bg-primary/10 border-glow-cyan"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden overflow-hidden glass-surface border-t border-border"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-6 py-3 text-sm font-body ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-lg text-primary text-glow-cyan mb-3">TAMV ONLINE</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Ecosistema Civilizatorio Federado Nativo XR, VR, 3D y 4D con IA Cognitiva. Pionero en Latinoamérica.
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm text-secondary mb-3">ENLACES</h4>
              <div className="space-y-2">
                <a href="https://tamvonlinenetwork.blogspot.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  <ExternalLink size={14} /> Blog Oficial
                </a>
                <a href="https://github.com/OsoPanda1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  <ExternalLink size={14} /> GitHub
                </a>
                <a href="https://xchange.avixa.org/posts/tamv-online-primer-plataforma-mexicana-civilizacional-digital" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-body">
                  <ExternalLink size={14} /> AVIXA Xchange
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-display text-sm text-secondary mb-3">MD-X4</h4>
              <p className="text-sm text-muted-foreground font-body">
                Dedicado a <span className="text-secondary">Reina Trejo Serrano</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2 font-body">
                +21,000 horas documentadas · Lanzamiento público 5 de febrero 2026
              </p>
            </div>
          </div>
          <div className="line-decoration mt-8 mb-4" />
          <p className="text-center text-xs text-muted-foreground font-body">
            © 2026 TAMV ONLINE NETWORK · CEO Fundador: Edwin Oswaldo Castillo Trejo (Anubis Villaseñor)
          </p>
        </div>
      </footer>
    </div>
  );
}
