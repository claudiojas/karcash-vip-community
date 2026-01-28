# Histórico de Progresso do Projeto KarCash

Este documento serve como uma linha do tempo local e detalhada das alterações significativas feitas no projeto. O objetivo é complementar o histórico do Git com o "porquê" por trás das decisões técnicas e de produto.

---

### **Data:** 28/01/2026
### **Responsável:** Gemi

#### **Módulo Afetado:**
-   `src/pages/Checkout.tsx` (Formulário de Checkout)

#### **Descrição da Alteração:**
Foi realizada uma refatoração completa no formulário de checkout para aumentar a robustez, melhorar a experiência do usuário (UX) e garantir a qualidade dos dados coletados.

#### **Justificativa Técnica e de Produto:**

1.  **Migração para Validação com `zod` e `react-hook-form`**:
    *   **Problema Anterior**: A validação era manual, baseada em `useState`, o que é verboso, propenso a erros e difícil de manter. O estado de validade do formulário (`isValid`) era um cálculo simples que não cobria todos os casos de uso.
    *   **Solução**:
        *   Instalamos `zod`, `react-hook-form` e `@hookform/resolvers`.
        *   Criamos um `formSchema` com `zod` para definir regras de validação claras e tipadas para cada campo (nome, e-mail, telefone, cpf).
        *   Substituímos o gerenciamento de estado manual pelo hook `useForm`, que agora controla o estado, a validação (`mode: 'onChange'`) e o processo de submissão do formulário.
    *   **Benefício**: O código ficou mais limpo, declarativo e seguro. As regras de negócio para os dados estão centralizadas no schema, e o formulário reage em tempo real às entradas do usuário, habilitando o botão de CTA apenas quando tudo está 100% válido.

2.  **Melhoria de UX com `react-input-mask`**:
    *   **Problema Anterior**: A formatação dos campos de telefone e CPF era feita com funções manuais (`formatPhone`, `formatCPF`), o que podia ser confuso para o usuário e menos eficiente.
    *   **Solução**: Instalamos e implementamos `react-input-mask` para aplicar máscaras diretamente nos campos de `telefone` e `cpf`.
    *   **Benefício**: O usuário agora é guiado durante o preenchimento, vendo o formato esperado (ex: `(99) 99999-9999`), o que reduz a fricção e a taxa de erros.

3.  **Aprimoramento do Feedback Visual (Estilo de Foco)**:
    *   **Problema Anterior**: Não havia um feedback claro quando um campo estava ativo (em foco).
    *   **Solução**: Adicionamos classes de utilitário do Tailwind CSS (`focus-visible:ring-2 focus-visible:ring-primary/70`) para criar um "anel" de destaque sutil na cor primária da marca ao redor do campo focado.
    *   **Benefício**: O usuário tem uma indicação visual clara de qual campo está preenchendo, melhorando a acessibilidade e a usabilidade do formulário.

#### **Bibliotecas Adicionadas:**
-   `zod`
-   `react-hook-form`
-   `@hookform/resolvers`
-   `react-input-mask`
-   `@types/react-input-mask` (dev)

---

### **Data:** 28/01/2026
### **Responsável:** Gemi & Cláudio

#### **Módulo Afetado:**
-   `src/pages/Checkout.tsx` (Formulário de Checkout)
-   `src/lib/supabaseClient.ts`
-   Configuração de Banco de Dados e Políticas do Supabase

#### **Descrição da Alteração:**
Integração do formulário de checkout com o backend do Supabase para persistir os dados dos leads. O processo envolveu uma depuração significativa para resolver um erro persistente de política de segurança (RLS).

#### **Justificativa Técnica e de Produto:**

1.  **Remoção do Campo CPF/CNPJ**:
    *   **Problema**: O formulário solicitava um dado sensível (CPF) muito cedo no funil, o que poderia aumentar a fricção e diminuir a taxa de conversão.
    *   **Solução**: Removemos o campo CPF do formulário de checkout (`Checkout.tsx`), do schema de validação (`zod`) e da chamada para o Supabase. A coleta deste dado foi delegada para o gateway de pagamento, que é o ambiente apropriado.
    *   **Benefício**: Formulário mais enxuto e rápido de preencher, aumentando a probabilidade de captura do lead. Redução da responsabilidade sobre dados sensíveis (LGPD).

2.  **Resolução de Erro de RLS (`Row Level Security`)**:
    *   **Problema**: Mesmo com a política `Allow anon insert` configurada no Supabase, a inserção de dados falhava com o erro `new row violates row-level security policy`.
    *   **Diagnóstico**: Após extensa depuração (verificação de chaves de API, reinicialização de servidor, etc.), descobrimos que a causa raiz era uma chamada `.select()` encadeada à operação `.insert()` no código do frontend.
    *   **Causa Raiz**: O `.select()` tentava ler a linha recém-inserida, mas a política de RLS do banco de dados **corretamente negava** a permissão de leitura (`SELECT`) para usuários anônimos. A operação inteira falhava por causa da parte de leitura, não da de inserção.
    *   **Solução**: Removemos a chamada `.select()` da query do `supabase-js`, resultando em uma operação de "insert puro", que é permitida pela política de RLS.
    *   **Benefício**: A integração com o Supabase agora funciona corretamente, respeitando as políticas de segurança robustas que foram definidas (permitir apenas inserção e negar leitura, atualização e deleção para usuários públicos).

3.  **Melhoria do Feedback de UX e Código**:
    *   **Solução**: Envolvemos as chamadas da biblioteca de notificações (`sonner`) em `setTimeout(..., 0)` para resolver um aviso comum do React sobre atualizações de estado durante a renderização. A função `onSubmit` foi reestruturada para usar `try/catch/finally`, melhorando o controle sobre o estado de `loading` e o tratamento de erros.

---

## Próximas Tarefas Sugeridas (Baseado no MVP)

Com a captura de leads via formulário de checkout e persistência no Supabase funcionando, as próximas etapas focam em automatizar o funil e implementar a inteligência de retenção, conforme o `CONTEXT_KARCASH.md`.

1.  **Automação de Entrega**:
    *   **Objetivo**: Garantir que, após a submissão bem-sucedida do formulário e o pagamento (em uma etapa posterior), o usuário receba automaticamente o acesso VIP.
    *   **Subtarefas**:
        *   Implementar o redirecionamento para o **Grupo VIP** pós-pagamento.
        *   Configurar o envio de **e-mail de boas-vindas** com o link de acesso e as instruções necessárias.
    *   **Ferramentas Potenciais**: Supabase Edge Functions (para automação de e-mails via SendGrid/Resend) ou um serviço de automação de marketing.

2.  **Inteligência de Retenção**:
    *   **Objetivo**: Entender os motivos pelos quais os usuários cancelam a assinatura para melhorar a oferta e reduzir o churn.
    *   **Subtarefas**:
        *   Desenvolver o **fluxo de cancelamento** (ex: uma página ou modal específico).
        *   Implementar a **coleta de feedback** no momento do cancelamento (motivos, sugestões).
        *   Persistir esses dados na tabela `churn_feedback` no Supabase.
