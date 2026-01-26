# 🚀 Projeto KarCash - Documentação de Contexto

## 📄 Motivação do Projeto
O KarCash nasce para preencher uma lacuna no mercado de revenda e investimento automotivo. O objetivo é criar uma "Usina de Vendas" que transforma o público orgânico do Instagram em assinantes recorrentes de uma comunidade VIP. O foco não é vender o carro em si, mas sim o **acesso privilegiado a oportunidades de lucro** (carros com margem de 20% a 50% abaixo da FIPE).

## 👤 Detalhes do Pedido (Cliente: Gustavo)
O cliente já possui uma operação ativa (cerca de 250 membros) e deseja profissionalizar o funil para escala.
- **Modelo de Negócio:** Assinatura mensal recorrente.
- **Referência:** Replicar a autoridade e o fluxo do `clubedocarroapp.com.br`.
- **Dores do Cliente:** Necessidade de automação na entrega do acesso e controle de quem está ativo/inadimplente.

## 🎯 O Que o Projeto Precisa (Requisitos MVP)
1. **Landing Page de Alta Conversão:**
   - Design Mobile-First (estilo aplicativo).
   - Gatilhos mentais de urgência e prova social.
   - Vitrine de ofertas de exemplo para gerar desejo.
2. **Sistema de Checkout e Coleta de Dados:**
   - Coleta obrigatória de: Nome, E-mail, WhatsApp e CPF/CNPJ.
   - Interface que inspire 100% de confiança.
3. **Automação de Entrega:**
   - Redirecionamento para o Grupo VIP pós-pagamento.
   - Envio de e-mail de boas-vindas com o link de acesso.
4. **Inteligência de Retenção:**
   - Fluxo de cancelamento com coleta de feedback (motivo da saída) para melhoria da estratégia.
5. **Infraestrutura Custo Zero (Validação):**
   - Hospedagem na Vercel e Banco de Dados no Supabase (Planos Free).

## 🛠️ Estratégia de Desenvolvimento (Stack & Arquitetura)
O desenvolvimento será dividido em **Sprints de 14 dias**, focando em performance, zero manutenção e UX.

- **Frontend:** React + Vite + Tailwind CSS (Gerado para agilidade inicial e refinado manualmente).
- **Backend/Database:** Supabase para persistência de dados de usuários e logs de cancelamento.
- **Pagamentos:** Integração com Gateway (Asaas ou Mercado Pago).
- **Arquitetura de Dados:**
    - Tabela `profiles`: Dados do assinante.
    - Tabela `subscriptions`: Status da assinatura e datas.
    - Tabela `churn_feedback`: Motivos de cancelamento coletados no modal de retenção.

## 📅 Cronograma (Sprints)
- **Sprint 1 (Dias 1-4):** Fundação, Landing Page e Coleta de Leads.
- **Sprint 2 (Dias 5-10):** Integração de Checkout e Motor Financeiro.
- **Sprint 3 (Dias 11-14):** Automações de E-mail, Fluxo de Retenção e Deploy Final.

---
*Documentação atualizada em: 25/01/2026*