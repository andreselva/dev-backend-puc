## Descrição

Este é o projeto da Fase 1 da disciplina de Desenvolvimento de Sistemas Backend, com foco em construção de APIs seguindo boas práticas e princípios de arquitetura limpa.

O sistema foi desenvolvido com o objetivo de explorar conceitos essenciais de desenvolvimento backend, tais como: injeção de dependências, modularização, e integração com banco de dados relacional.

## Tecnologias utilizadas
### Nest.js
- Descrição: NestJS é um framework progressivo para construção de aplicações Node.js eficientes e escaláveis, utilizando TypeScript por padrão.
- Motivo da escolha: O NestJS oferece uma estrutura organizada e modular que facilita a criação de APIs REST, além de adotar princípios do SOLID e aplicar conceitos como injeção de dependências de forma nativa.
- Observação pessoal: Achei muito interessante como o NestJS permite construir uma API do zero de forma rápida e limpa. A curva de aprendizado é tranquila e a produtividade aumenta consideravelmente com o uso de decorators e modules bem definidos.

### Typescript
- Descrição: TypeScript é um superset do JavaScript que adiciona tipagem estática e recursos de orientação a objetos, sem perder a flexibilidade do JavaScript.
- Motivo da escolha: A tipagem forte do TypeScript ajuda a capturar erros em tempo de desenvolvimento e torna o código mais robusto e fácil de manter. Mesmo enfrentando alguns desafios iniciais, senti que o projeto se tornou mais sólido e confiável graças ao uso dessa tecnologia.

### SQLite
- Descrição: SQLite é um banco de dados relacional leve, autocontido e sem servidor, ideal para aplicações de pequeno porte ou de uso local.
- Motivo da escolha: Escolhi o SQLite por sua simplicidade e facilidade de configuração, além de ser perfeito para o escopo deste projeto, que não exige uma solução de banco de dados mais robusta ou distribuída.

# Iniciando o projeto

## No terminal do VSCODE, executar:
```bash
$ npm install
```

## Para rodar o seeding do banco de dados, executar:
```bash
$ npx ts-node src/Database/seeding.ts
```

## Compilar e rodar a API:

```bash
# development
$ npm run start

ou

# watch mode
$ npm run start:dev

```