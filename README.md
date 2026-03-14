# buscar-dados-api-react

Este é um projeto simples em React que busca dados de uma API de produtos e os exibe em uma lista.

## Visão Geral

O projeto utiliza as seguintes tecnologias:

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build para desenvolvimento frontend.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Tailwind CSS**: Framework de CSS para estilização.
- **Fake Store API**: API utilizada para obter os dados dos produtos.

## Funcionalidades

- Exibe uma lista de produtos obtida da API.
- Mostra uma mensagem de carregamento enquanto os dados estão sendo buscados.
- Exibe uma mensagem de erro caso a busca falhe.

## Como Executar o Projeto

Siga as instruções abaixo para rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/buscar-dados-api-react.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd buscar-dados-api-react
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Executando

Para iniciar o servidor de desenvolvimento, execute o seguinte comando:

```bash
npm run dev
```

Abra [http://localhost:5173](httphttp://localhost:5173) (ou a porta que o Vite indicar) em seu navegador para ver a aplicação.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm run lint`: Executa o linter para verificar o código.
- `npm run preview`: Inicia um servidor local para visualizar a build de produção.
