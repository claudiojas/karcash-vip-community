# 🚀 KarCash - Acesso VIP

Bem-vindo ao repositório da Landing Page de Acesso VIP do KarCash. Este projeto é a porta de entrada para a comunidade exclusiva de revendedores e investidores de automóveis que buscam as melhores oportunidades do mercado.

O objetivo principal é converter visitantes em assinantes da comunidade VIP, oferecendo acesso privilegiado a carros "limpos" (sem sinistro/leilão) com margens reais de 20% a 50% abaixo da tabela FIPE.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com uma stack moderna e performática:

### Frontend
-   **[Vite](https://vitejs.dev/)**: Build tool ultrarrápida.
-   **[React](https://react.dev/)**: Biblioteca de UI.
-   **[TypeScript](https://www.typescriptlang.org/)**: Tipagem estática.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Estilização utility-first.
-   **[Framer Motion](https://www.framer.com/motion/)**: Animações fluidas.
-   **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)**: Formulários e validação robusta.

### Backend & Integrações
-   **[Supabase](https://supabase.com/)**: Database (PostgreSQL) e Autenticação.
-   **[Vercel Serverless Functions](https://vercel.com/docs/functions)**: API para envio de e-mails (`api/send-welcome-email.ts`).
-   **[Resend](https://resend.com/)**: Serviço de e-mail transacional.

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura limpa e desacoplada para garantir escalabilidade:

```
/
├── api/                  # Serverless Functions (Node.js)
│   └── send-welcome-email.ts  # Envio de e-mails via Resend
├── src/
│   ├── assets/           # Imagens e dados reais dos carros (KARCASH_MODELOS)
│   ├── components/       # Componentes React reutilizáveis
│   ├── pages/            # Páginas (Index, Checkout, Success)
│   ├── repositories/     # Camada de acesso a dados (Supabase)
│   │   └── subscriptionRepository.ts
│   ├── services/         # Camada de serviços externos (API)
│   │   └── api.ts
│   └── lib/              # Configurações (Supabase Client, Utils)
```

### Padrões Usados
-   **Repository Pattern:** `subscriptionRepository.ts` isola toda a comunicação com o Supabase. O frontend não chama `supabase` diretamente.
-   **Service Layer:** `api.ts` centraliza as chamadas para APIs externas (como a nossa API de e-mail), tratando erros de forma padronizada.

## ⚙️ Como Executar o Projeto Localmente

**Pré-requisitos:** Node.js (v18+) e NPM/Yarn.

1.  **Clone e Instale:**
    ```bash
    git clone https://github.com/claudiojas/karcash-vip-access.git
    cd karcash-vip-access
    npm install
    ```

2.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz:
    ```env
    VITE_SUPABASE_URL=sua_url_supabase
    VITE_SUPABASE_ANON_KEY=sua_key_anon
    RESEND_API_KEY=re_123... (Necessário para testar e-mail via Vercel CLI)
    ```

3.  **Rodar Frontend (Vite):**
    ```bash
    npm run dev
    ```
    *Acesse em `http://localhost:5173`.*

4.  **Rodar API Serverless (Opcional):**
    Para testar o envio de e-mail localmente, você precisa do Vercel CLI:
    ```bash
    npx vercel dev
    ```

## 🧠 Estratégia de Copywriting (Gatilhos Mentais)

A Landing Page foi otimizada com 21 gatilhos mentais para alta conversão, focada na proposta de valor única: **"Carros abaixo da FIPE sem histórico de Leilão/Sinistro"**.

-   **Hero Section:** Ativa *Curiosidade*, *Promessa* e *Exclusividade*.
-   **Seção "O Segredo":** Usa *Dissonância Cognitiva* (Leilão é ruim) e *Razão e Porquê*.
-   **Cards de Ofertas:** Utiliza *Ancoragem de Preço* e *Especifidade* (Lucro Exato).

---
*Atualizado em 04/02/2026.*