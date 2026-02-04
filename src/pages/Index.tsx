import { motion } from "framer-motion";
import {
  CreditCard,
  MessageCircle,
  TrendingUp,
  Shield,
  Zap,
  Calendar,
  CheckCircle
} from "lucide-react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PhoneMockup } from "@/components/PhoneMockup";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CarCard } from "@/components/CarCard";
import { StepCard } from "@/components/StepCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { PricingCard } from "@/components/PricingCard";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { OpportunitySection } from "@/components/OpportunitySection";
import { FounderNote } from "@/components/FounderNote";



import fiorinoImg from "@/assets/KARCASH_MODELOS/FIORINO_ENDURANCE/FIORINO_ENDURANCE.jpeg";
import nivusImg from "@/assets/KARCASH_MODELOS/NIVUS_2024/NIVUS_2024.jpeg";
import poloImg from "@/assets/KARCASH_MODELOS/POLO_2024/POLO_2024.jpeg";
import betoneiraImg from "@/assets/KARCASH_MODELOS/VW26.2602023_BETONEIRA/VW26.2602023_BETONEIRA.jpeg";

const cars = [
  {
    name: "Fiorino Endurance",
    year: "2023",
    fipePrice: 84208,
    ourPrice: 54997,
    image: fiorinoImg,
  },
  {
    name: "Nivus Confortline TSI",
    year: "2024",
    fipePrice: 106665,
    ourPrice: 76997,
    image: nivusImg,
  },
  {
    name: "Polo Track 1.0",
    year: "2024",
    fipePrice: 69906,
    ourPrice: 47997,
    image: poloImg,
  },
  {
    name: "VW 26.260 E Const 8x4",
    year: "2023",
    fipePrice: 680000,
    ourPrice: 250997,
    image: betoneiraImg,
  },
];

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Revendedor há 2 anos",
    content: "Já comprei 15 carros pelo grupo. Lucro médio de R$ 12.000 por veículo. Melhor investimento que já fiz.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  },
  {
    name: "Ana Paula Silva",
    role: "Investidora",
    content: "Comecei há 3 meses e já recuperei o investimento 10x. As ofertas são reais e os carros são excelentes!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  },
  {
    name: "Roberto Oliveira",
    role: "Empresário",
    content: "Nunca pensei que fosse tão simples lucrar com carros. A curadoria é impecável. Recomendo demais!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  },
];

const benefits = [
  { icon: <Calendar className="w-6 h-6" />, title: "+300 ofertas por mês" },
  { icon: <Shield className="w-6 h-6" />, title: "Carros sem dívidas ou leilão" },
  { icon: <CreditCard className="w-6 h-6" />, title: "Financiável por qualquer banco" },
  { icon: <CheckCircle className="w-6 h-6" />, title: "Não precisa de CNPJ" },
  { icon: <Zap className="w-6 h-6" />, title: "Negocie sem pagar adiantado" },
  { icon: <MessageCircle className="w-6 h-6" />, title: "Suporte VIP no WhatsApp" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <OpportunitySection />
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Sua Próxima Oportunidade Espera.{" "}
                <span className="text-primary">Milhares Já Lucram Conosco.</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Não somos mágica, somos inteligência de mercado. Veja por que +5.000 membros já transformaram seu dinheiro com a KarCash.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { value: 5000, suffix: "+", label: "Membros Ativos" },
              { value: 10000, suffix: "+", label: "Carros Negociados" },
              { value: 50, prefix: "R$ ", suffix: "M+", label: "Em Lucros Gerados" },
              { value: 300, suffix: "+", label: "Ofertas por Mês" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="card-elevated text-center">
                  <div className="font-display font-bold text-3xl md:text-4xl text-primary mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Note (Replacing Testimonials) */}
      <FounderNote />

      {/* How It Works */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Sua Jornada de Lucro em{" "}
                <span className="text-primary">3 Passos Simples</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <StepCard
              number={1}
              title="Assine"
              description="Garanta seu acesso exclusivo à comunidade KarCash por apenas R$ 49,94/mês."
              icon={<CreditCard className="w-8 h-8" />}
              delay={0}
            />
            <StepCard
              number={2}
              title="Receba"
              description="Acesse diariamente 10 ofertas de carros até 50% abaixo da tabela FIPE."
              icon={<MessageCircle className="w-8 h-8" />}
              delay={0.1}
            />
            <StepCard
              number={3}
              title="Lucre"
              description="Negocie direto e coloque o lucro no seu bolso. Simples assim."
              icon={<TrendingUp className="w-8 h-8" />}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Car Offers */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Veja as Ofertas Que{" "}
                <span className="text-secondary">Você Está Perdendo!</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Estas são apenas algumas das oportunidades disponíveis para membros VIP
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {cars.map((car, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <CarCard {...car} />
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <a href="/checkout">
              <motion.button
                className="btn-secondary-cta"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                QUERO DESBLOQUEAR MAIS OFERTAS AGORA!
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Pare de Sonhar,{" "}
                <span className="text-gold">Comece a Lucrar.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Exclusivo para Membros VIP KarCash
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 0.05}>
                <div className="card-elevated flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-3 md:gap-4 p-4 md:p-5 h-full justify-center md:justify-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <span className="text-foreground font-medium text-xs md:text-base leading-tight">
                    {benefit.title}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                Sua Oportunidade de Lucro{" "}
                <span className="text-primary">Começa Agora</span>
              </h2>
            </div>
          </ScrollReveal>

          <PricingCard />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-navy" id="faq">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
                AINDA TEM DÚVIDAS?{" "}
                <span className="text-primary">A GENTE RESPONDE!</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              Não Deixe Essa Oportunidade Passar!
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 5.000 membros que já estão lucrando com carros abaixo da FIPE.
            </p>
            <a href="/checkout">
              <motion.button
                className="btn-primary-cta text-lg pulse-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                QUERO MEU ACESSO VIP AGORA!
              </motion.button>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
