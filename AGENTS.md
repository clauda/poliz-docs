# AGENTS.md — docs-poliz

Guia para agentes de IA que trabalham neste repositório.

## O que é

Site público de documentação de produto do Poliz, feito em VitePress e publicado no GitHub Pages pelo workflow `.github/workflows/deploy.yml`, a cada push em `main` (Node 24). O público é cidadão e possível colaborador, não desenvolvedor. Aqui ficam conceitos (projetos, representantes, tramitação), funcionalidades, LGPD, termos, política de privacidade e a filosofia do projeto (apartidarismo, ética, autocrítica).

A documentação técnica fica nos repositórios de código: `../backend-poliz-api/AGENTS.md` e `../frontend-poliz-app/AGENTS.md`.

## Comandos

```bash
npm install
npm run docs:dev       # servidor local
npm run docs:build     # gera .vitepress/dist
npm run docs:preview
```

`vitepress` está fixado em `2.0.0-alpha.21`, sem caret, porque não existe 2.x estável e alphas podem quebrar entre si. Antes de subir a versão, rode `docs:build`.

## Estrutura

- `index.md`: home.
- `docs/<secao>/*.md`: páginas (`conceitos`, `funcionalidades`, `seguranca`, `filosofia`, `contribua`, mais `termos-de-uso.md` e `politica-de-privacidade.md`).
- `.vitepress/config.mts`: `nav` e `sidebar`. Página nova só aparece na navegação depois de entrar no `sidebar` (e no `nav`, se for o caso). Os links usam o caminho com `.md` (`/docs/conceitos/projetos.md`).
- `.vitepress/theme/`: tema padrão + `custom.css`.

## Conteúdo

- Português do Brasil, linguagem simples e tom neutro e apartidário. Não cite partidos ou políticos de forma valorativa.
- Termos e política de privacidade são texto com efeito jurídico. Não altere sem pedido explícito, e mantenha-os coerentes com `PRIVACIDADE.md` e `TERMOS.md` do frontend.
- Descreva funcionalidades como existem no app. Várias telas do frontend ainda usam dados fictícios (ver a seção "Dados" em `../frontend-poliz-app/AGENTS.md`). Não documente como pronto o que ainda é mock.
