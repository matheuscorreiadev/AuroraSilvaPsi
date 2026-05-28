# Landing Page - Dra. Aurora Silva

Landing page pública, responsiva e focada em conversão para uma psicóloga chamada Dra. Aurora Silva. O layout transmite acolhimento, paz e profissionalismo usando verde-menta, off-white e cinza escuro.

## Estrutura

- `index.html`: estrutura semântica da página, com header, hero, sobre, serviços, CTA e rodapé.
- `src/css/styles.css`: todo o visual da landing page em CSS puro, incluindo responsividade.
- `src/js/script.js`: menu mobile, ano automático no rodapé, inicialização dos ícones e evento de rastreamento dos CTAs.

## Tecnologias Usadas

- HTML5 semântico.
- CSS3 puro, sem Tailwind e sem framework CSS.
- JavaScript puro.
- Lucide Icons via CDN para os ícones.
- Google Fonts para a fonte Inter.
- Google Maps incorporado por iframe.

## Seções

- Hero Section: frase de impacto, foto profissional placeholder e botão principal "Agendar Consulta".
- Sobre mim: biografia, abordagens terapêuticas e chips de especialidades.
- Serviços e especialidades: cards para Terapia Individual, Terapia de Casal, Ansiedade e Depressão.
- Contatos e localização: WhatsApp, e-mail, endereço e mapa integrado.

## Campos Dinâmicos Para o SaaS

Alguns elementos possuem atributos `data-field` para facilitar substituição dinâmica:

- `professional_name`
- `professional_title`
- `hero_headline`
- `hero_subtitle`
- `profile_photo`
- `bio`
- `whatsapp`
- `email`
- `address`

Os botões de conversão possuem `data-cta`, permitindo que o SaaS capture eventos de clique:

- `header-whatsapp`
- `mobile-whatsapp`
- `hero-whatsapp`
- `section-whatsapp`

O JavaScript dispara um evento customizado chamado `landing:cta-click` sempre que um CTA é clicado.

## Como Usar

Abra o arquivo `index.html` diretamente no navegador. A página não precisa de build, `node_modules`, Tailwind ou servidor local.

Para produção, substitua os placeholders de WhatsApp, e-mail, endereço, CRP, foto e mapa pelos dados reais da profissional.
