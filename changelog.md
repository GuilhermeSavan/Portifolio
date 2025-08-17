# Changelog

Todas as alterações relevantes neste projeto estão listadas abaixo, organizadas por commit.

---

## Add slider-card for projets section - 2025-07-21
### Added
- Slider na seção de projetos para navegação entre diferentes projetos.
- Slider interno em cada card de projeto para navegar entre seções (ex: descrição, links, tecnologias, etc).

## Add partial css for project section - 2025-08-04
### Styled
- Card de projeto (`#project_card`) com layout flex, sombras, bordas arredondadas e transições para interação.
- Slider interno (`.desc_slider`) com organização de descrição e links.
- Botões de controle (`.project-controls` e `.slider-controls`) com estilos de hover/active.
- Links de projeto (`.link_project a`) com feedback visual (bordas e escala ao ativar).
- Títulos e textos ajustados (ex: `#projects h4`, `.project_name`) para consistência visual. 

## Migrate project builder for vite - 2025-08-12
### Changed
- Troca de builder do CRA para Vite, devido a descontinuidade do CRA.

## Merge dev branch for main - 2025-08-13
### Changed
- Merge da branch dev para main para testes no vercel.

## fixing card css responsive with and height - 2025-08-17
### fixed
- Troca dos valores de altura e largura do experience-card para pixels.
- Excluisão do arquivo App.js, sem utilizada apoós migração para Vite.