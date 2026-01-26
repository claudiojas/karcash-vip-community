import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <span className="font-display font-bold text-primary-foreground text-lg">KC</span>
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Kar<span className="text-primary">Cash</span>
          </span>
        </a>

        {/* Desktop CTA */}
        <motion.a
          href="/checkout"
          className="hidden md:block btn-primary-cta text-sm py-3 px-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          QUERO ACESSO AGORA
        </motion.a>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-card border-t border-border p-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <a
            href="/checkout"
            className="btn-primary-cta block text-center text-sm py-3"
            onClick={() => setIsMenuOpen(false)}
          >
            QUERO ACESSO AGORA
          </a>
        </motion.div>
      )}
    </header>
  );
};
