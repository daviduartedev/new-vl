# Vip Lar Imobiliária — Landing Page da Equipe

Landing page mobile-first para apresentar as corretoras e corretores da Vip Lar Imobiliária. Cada card abre direto uma conversa no WhatsApp com mensagem pré-preenchida identificando a origem do lead.

## Demo

Hospedada em: _(adicionar URL do Vercel após o primeiro deploy)_

## Stack

- [Next.js](https://nextjs.org/) (App Router)
- React 19 + TypeScript
- CSS global (mobile-first, sem Tailwind)
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) (Inter)
- [`next/image`](https://nextjs.org/docs/app/building-your-application/optimizing/images) para fotos e logo

Deploy otimizado na [Vercel](https://vercel.com/) (detecção automática de framework).

## Estrutura do projeto

```
.
├── app/
│   ├── globals.css     # estilos (mobile-first)
│   ├── layout.tsx      # layout raiz, metadados, fonte Inter
│   └── page.tsx        # página inicial
├── components/
│   ├── TeamGrid.tsx    # grid de cards + links WhatsApp
│   └── WhatsAppIcon.tsx
├── lib/
│   ├── corretoras.ts   # dados da equipe
│   └── whatsapp.ts     # URL wa.me + mensagem padrão
├── public/             # assets estáticos (servidos em /)
│   ├── logo.png
│   ├── achlley-orben.jpeg
│   ├── carina-andrade.jpeg
│   ├── cleimar-meurer.jpeg
│   ├── gislene-loch.jpeg
│   ├── guilhermezappellini.jpeg
│   └── tania-turazzi.jpeg
├── next.config.ts
├── vercel.json         # força framework Next.js na Vercel
├── package.json
├── tsconfig.json
├── .gitignore
└── README.md
```

## Rodar localmente

Requer [Node.js](https://nodejs.org/) 20+ (recomendado: LTS).

```bash
cd c:\vl
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Personalizar

A equipe está em `lib/corretoras.ts`:

```ts
{
  nome: "Nome Sobrenome",
  cargo: "Corretora",
  foto: "/arquivo.jpeg",       // arquivo em public/
  whatsapp: "5548999999999",   // 55 + DDD + número, só dígitos
}
```

Texto do botão: constante `ctaTexto` no mesmo ficheiro. Mensagem pré-preenchida: função `mensagemPadrao` em `lib/whatsapp.ts`.

## Responsividade

- **Mobile (padrão)**: 2 colunas, foto vertical no topo do card.
- **Tablet / Desktop (≥ 768px)**: 3 colunas.
- **Desktop grande (≥ 1200px)**: 6 cards em linha única.
- **≤ 360px**: tipografia, fotos e botões reduzidos.

## Decisões de UX

- **Mobile-first**: layout pensado para 90%+ do tráfego mobile.
- **Tap target adequado**: o card inteiro é clicável (não só o botão).
- **Verde WhatsApp**: botão usa a cor oficial (`#25D366`) com ícone SVG.
- **WhatsApp direto**: 1 toque = chat aberto com mensagem pré-preenchida.
- **Acessibilidade**: `aria-label` em cada link, foco visível, contraste adequado, `prefers-reduced-motion` respeitado.
- **Performance**: imagens otimizadas com `next/image`, fonte auto-hospedada via `next/font`, cabeçalhos de segurança em `next.config.ts`.

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o projeto. A Vercel deteta Next.js e define `npm run build` e a pasta de output automaticamente.
3. Cada push na branch de produção gera um novo deploy.

### 404 com build “Ready” (Next.js)

O repositório inclui `vercel.json` com `"framework": "nextjs"` para a Vercel aplicar sempre o preset correto.

No dashboard do projeto: **Settings → General → Build & Development Settings**, confira:

- **Framework Preset**: **Next.js** (não “Other” nem site estático genérico).
- **Root Directory**: vazio ou `.` (use subpasta só se o app Next não estiver na raiz do repo).
- **Output Directory**: **vazio**. Não defina `public`, `out` nem `.next` manualmente — para Next.js a Vercel usa o output interno; um valor errado aqui costuma gerar **404 em `/`** mesmo com build verde.

Depois de alterar, faça **Redeploy** do último commit.

Alternativa CLI:

```bash
npm i -g vercel
cd c:\vl
vercel        # preview
vercel --prod # produção
```

## Licença

Uso interno Vip Lar Imobiliária.
