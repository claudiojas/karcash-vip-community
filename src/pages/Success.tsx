import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Success = () => {
  // TODO: Replace with the actual VIP group link provided by the user
  const vipGroupLink = "https://chat.whatsapp.com/seu-grupo-vip-aqui";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header hideButtons />
      
      <main className="flex-1 flex items-center justify-center py-12 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full mx-auto flex items-center justify-center mb-6">
              <Check className="w-12 h-12" />
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl text-foreground mb-4">
              Parabéns e seja bem-vindo(a)!
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Sua inscrição foi recebida! Assim que o pagamento for confirmado, 
              seu acesso será liberado. Enquanto isso, você já pode entrar em nosso 
              grupo VIP exclusivo.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a href={vipGroupLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-sm">
                <Button className="w-full btn-primary-cta text-lg pulse-glow flex items-center gap-2">
                  ENTRAR NO GRUPO VIP AGORA
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <p className="text-sm text-muted-foreground">
                Um e-mail de confirmação com o mesmo link foi enviado para você. <br/> (Verifique sua caixa de spam)
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Success;
