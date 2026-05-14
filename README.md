# Vip Lar Imobiliária — Landing Page da Equipe

Landing page mobile-first para apresentar as corretoras e corretores da Vip Lar Imobiliária. Cada card abre direto uma conversa no WhatsApp com mensagem pré-preenchida identificando a origem do lead.

## Demo

Hospedada em: _(adicionar URL do Vercel após o primeiro deploy)_

## Stack

- HTML5
- CSS3 (mobile-first, sem frameworks)
- JavaScript vanilla (sem build step)
- Google Fonts (Inter)

Zero dependências e zero processo de build. Basta servir os arquivos estáticos.

## Estrutura do projeto

```
.
├── index.html          # estrutura da página
├── styles.css          # estilos (mobile-first, responsivo)
├── script.js           # dados da equipe + render dos cards
├── public/             # imagens estáticas
│   ├── logo.png
│   ├── achlley-orben.jpeg
│   ├── carina-andrade.jpeg
│   ├── cleimar-meurer.jpeg
│   ├── gislene-loch.jpeg
│   ├── guilhermezappellini.jpeg
│   └── tania-turazzi.jpeg
├── .gitignore
└── README.md
```

## Rodar localmente

Como é estático, qualquer servidor HTTP serve. As três opções mais práticas:

**Python (já vem no Windows/Mac):**

```bash
cd c:\vl
python -m http.server 8000
```

**Node:**

```bash
npx serve .
```

**VS Code:** extensão "Live Server" → botão direito no `index.html` → "Open with Live Server".

Acesse `http://localhost:8000` (ou a porta indicada pelo servidor).

## Personalizar

Toda a configuração da equipe está no array `CORRETORAS` no início de `script.js`:

```js
{
  nome: "Nome Sobrenome",
  cargo: "Corretora",
  foto: "public/arquivo.jpeg",
  whatsapp: "5548999999999", // 55 + DDD + número, só dígitos
}
```

Outros pontos de configuração no mesmo arquivo:

- `CTA_TEXTO` — texto do botão (atualmente "WhatsApp")
- `MENSAGEM_PADRAO` — mensagem que abre pré-preenchida no chat

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
- **Performance**: sem frameworks, sem build, fontes com `preconnect`, imagens com `loading="lazy"`.

## Deploy

Funciona em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

### Vercel (recomendado)

```bash
npm i -g vercel
cd c:\vl
vercel        # preview
vercel --prod # produção
```

Ou conecte o repositório do GitHub em [vercel.com/new](https://vercel.com/new) — cada push faz deploy automático.

## Licença

Uso interno Vip Lar Imobiliária.
# new-vl
