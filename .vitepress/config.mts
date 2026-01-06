import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Poliz',
  description: 'Tudo é político',
  appearance: true,
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/logo.svg',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',
    nav: [
      {
        text: 'Biblioteca',
        items: [
          {
            // Title for the section.
            text: 'Conceitos Básicos',
            items: [
              { text: 'Projetos', link: '/docs/conceitos/projetos.md' },
              { text: 'Representantes', link: '/docs/conceitos/representantes.md' },
              { text: 'Transparência', link: '/docs/conceitos/portal-da-transparencia.md' },
              { text: 'Perguntas Frequentes', link: '/docs/conceitos/faq.md' },
            ]
          }
        ]
      },
      { text: 'Ir para o APP', link: 'https://poliz.com.br' },
    ],
    sidebar: [
      {
        text: 'Biblioteca',
        items: [
          {
            text: 'Conceitos Básicos',
            items: [
              {
                text: 'Projetos',
                items: [
                  {
                    text: 'O que são projetos?',
                    link: '/docs/conceitos/projetos.md',
                  },
                  {
                    text: 'Situação e Tramitação',
                    link: '/docs/conceitos/situacoes-tramitacoes.md',
                  },
                ],
              },
              { text: 'Representantes', link: '/docs/conceitos/representantes.md' },
              { text: 'Transparência', link: '/docs/conceitos/portal-da-transparencia.md' },
              { text: 'Perguntas Frequentes', link: '/docs/conceitos/faq.md' },
            ],
          },
          {
            text: 'Funcionalidades',
            items: [
              { text: 'Opinião', link: '/docs/funcionalidades/opiniao.md' },
              { text: 'Quem disse isso?', link: '/docs/funcionalidades/quem-disse-isso.md' },
              { text: 'Quiz de Alinhamento', link: '/docs/funcionalidades/quiz-de-alinhamento.md' },
            ],
          },
        ],
      },
      {
        text: 'Segurança e LGPD',
        items: [
          { text: 'Privacidade dos Dados', link: '/docs/seguranca/privacidade-dos-dados.md' },
          { text: 'Tratamento de Dados', link: '/docs/seguranca/tratamento-de-dados.md' },
          { text: 'Privacy by Design', link: '/docs/seguranca/privacy-by-design.md' },
        ],
      },

      {
        text: 'Filosofia',
        items: [
          { text: 'Somos Apartidários', link: '/docs/filosofia/apartidarios.md' },
          { text: 'Informar para Transformar', link: '/docs/filosofia/educar.md' },
        ],
      },
      {
        text: 'Contribua',
        items: [
          { text: 'Como colaborar', link: '/docs/contribua/como-colaborar.md' },
        ],
      }
    ],
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/poliz.app' }
    ],
    lastUpdated: {
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    },
    docFooter: {
      prev: 'Descubra',
      next: 'Continue lendo... '
    }
  },
  sitemap: {
    hostname: 'https://sobre.poliz.com.br'
  }
})
