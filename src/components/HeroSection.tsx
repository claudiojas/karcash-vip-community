import { motion } from "framer-motion";
import { PhoneMockup } from "./PhoneMockup";

export const HeroSection = () => {
    return(

        <>
            {/* Hero Section */}
            <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-4">
                    {/* Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        >
                        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                            🚀 LANÇAMENTO DO NOSSO SITE
                        </span>
                        </motion.div>
        
                        <motion.h1
                        className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        >
                        O Método para Lucrar{" "}
                        <span className="text-primary">R$10k a R$50k</span>{" "}
                        <span className="text-gold">com Veículos sem precisar de Leilões.</span>
                        </motion.h1>
        
                        <motion.p
                        className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        >
                        Acesso à nossa Seleção de Especialistas: 
                        Nossa equipe filtra 5.000 veículos por dia para entregar apenas os 10 melhores no seu celular.
                        </motion.p>
        
                        <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        >
                        <a href="/checkout">
                            <motion.button
                            className="btn-primary-cta text-base md:text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            >
                            Quero entrar para a Lista VIP e receber o aviso!
                            </motion.button>
                        </a>
                        <p className="text-muted-foreground text-sm mt-4">
                            ✓ Acesso imediato • ✓ Apenas 100 vagas • ✓ Cancele quando quiser
                        </p>
                        </motion.div>
                    </div>
        
                    {/* Phone Mockup */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <PhoneMockup />
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}