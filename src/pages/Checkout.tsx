import { motion } from "framer-motion";
import { Shield, Lock, Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputMask from "react-input-mask";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Schema de validação com Zod
const formSchema = z.object({
  name: z.string().min(3, { message: "O nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Por favor, insira um e-mail válido." }),
  phone: z.string().refine((val) => val.replace(/\D/g, '').length >= 10, {
    message: "O telefone deve ter pelo menos 10 dígitos.",
  }),
  cpf: z.string().refine((val) => val.replace(/\D/g, '').length >= 11, {
    message: "O CPF/CNPJ deve ter pelo menos 11 dígitos.",
  }),
});

const Checkout = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Valida no momento da alteração
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      cpf: "",
    },
  });

  const { isValid } = form.formState;

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Lógica de envio do formulário
    console.log(values);
    // Aqui você redirecionaria para a página de pagamento (Asaas, Mercado Pago)
  }

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

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground mb-2 block">Nome Completo</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome completo" 
                            {...field}
                            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground mb-2 block">E-mail</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="seu@email.com" 
                            {...field} 
                            className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground mb-2 block">WhatsApp (com DDD)</FormLabel>
                        <FormControl>
                          <InputMask
                            mask="(99) 99999-9999"
                            value={field.value}
                            onChange={field.onChange}
                          >
                            {(inputProps: any) => (
                              <Input
                                {...inputProps}
                                type="tel"
                                placeholder="(00) 00000-0000"
                                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              />
                            )}
                          </InputMask>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cpf"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground mb-2 block">CPF ou CNPJ</FormLabel>
                        <FormControl>
                           <InputMask
                            mask="999.999.999-99"
                            value={field.value}
                            onChange={field.onChange}
                          >
                            {(inputProps: any) => (
                              <Input
                                {...inputProps}
                                placeholder="000.000.000-00"
                                className="bg-input border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                              />
                            )}
                          </InputMask>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <motion.div
                    initial={false}
                    animate={isValid ? { opacity: 1, y: 0 } : { opacity: 0.5, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full"
                  >
                    <Button
                      type="submit"
                      className={`w-full py-4 h-auto rounded-xl font-display font-bold text-lg transition-all ${
                        isValid
                          ? "btn-primary-cta"
                          : "bg-muted text-muted-foreground cursor-not-allowed"
                      }`}
                      disabled={!isValid}
                    >
                      GARANTIR MEU ACESSO VIP
                    </Button>
                  </motion.div>
                </form>
              </Form>
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