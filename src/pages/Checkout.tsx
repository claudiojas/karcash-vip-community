import { motion } from "framer-motion";
import { useState } from "react";
import { Shield, Lock, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
  });

  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);
    
    // Check if all fields are filled
    setIsValid(
      newFormData.name.length > 2 &&
      newFormData.email.includes("@") &&
      newFormData.phone.length >= 10 &&
      newFormData.cpf.length >= 11
    );
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-card border-b border-border py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground text-lg">KC</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              Kar<span className="text-primary">Cash</span>
            </span>
          </a>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-4 h-4 text-primary" />
            <span>COMPRA SEGURA</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Order Summary */}
            <div className="card-elevated mb-8">
              <h2 className="font-display font-bold text-lg text-foreground mb-4">
                Resumo do Pedido
              </h2>
              
              <div className="flex items-center justify-between py-4 border-b border-border">
                <div>
                  <p className="font-medium text-foreground">Assinatura Mensal VIP</p>
                  <p className="text-sm text-muted-foreground">Acesso ao grupo exclusivo</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground line-through text-sm">R$ 199,90</p>
                  <p className="font-display font-bold text-xl text-primary">R$ 49,90</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="font-medium text-foreground">Total:</span>
                <span className="font-display font-bold text-2xl text-foreground">R$ 49,90</span>
              </div>

              <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                <p className="text-sm text-primary font-medium text-center">
                  🔥 Você está economizando R$ 150,00 (75% OFF)
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="card-elevated">
              <h2 className="font-display font-bold text-lg text-foreground mb-6">
                Seus Dados
              </h2>

              <form className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground mb-2 block">
                    E-mail
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-foreground mb-2 block">
                    WhatsApp (com DDD)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={formatPhone(formData.phone)}
                    onChange={(e) => handleChange({ 
                      ...e, 
                      target: { ...e.target, name: "phone", value: e.target.value.replace(/\D/g, "") } 
                    })}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <div>
                  <Label htmlFor="cpf" className="text-foreground mb-2 block">
                    CPF ou CNPJ
                  </Label>
                  <Input
                    id="cpf"
                    name="cpf"
                    type="text"
                    placeholder="000.000.000-00"
                    value={formatCPF(formData.cpf)}
                    onChange={(e) => handleChange({ 
                      ...e, 
                      target: { ...e.target, name: "cpf", value: e.target.value.replace(/\D/g, "") } 
                    })}
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>

                <motion.button
                  type="button"
                  className={`w-full py-4 rounded-xl font-display font-bold text-lg transition-all ${
                    isValid
                      ? "btn-primary-cta"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                  disabled={!isValid}
                  whileHover={isValid ? { scale: 1.02 } : {}}
                  whileTap={isValid ? { scale: 0.98 } : {}}
                >
                  PRÓXIMO
                </motion.button>
              </form>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span>Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                <span>SSL Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary" />
                <span>PCI Compliant</span>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} KarCash. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
