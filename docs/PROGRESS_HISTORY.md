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
