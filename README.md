
# Pinterest - Clone
## Descrição
Este projeto é uma aplicação de página única (SPA) desenvolvida em React, utilizando Vite como ferramenta de construção e JSON Server para simular uma API RESTful. O objetivo desta aplicação é fornecer uma interface interativa e dinâmica para os usuários, aproveitando a alta performance do Vite e a simplicidade do JSON Server para desenvolvimento.

## Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Passos de Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Kaiorc/pinterest-clone.git
   cd pinterest-clone
   ```
2.  Instale as dependências:
	  ```bash
	  npm install 
	  # ou
	  yarn install
	```
3. Inicie o JSON Server:
	Dentro da pasta, rode o comando:
	```bash
	npx json-server ./mock/db.json
	 ```
4. Em outra aba do terminal, inicie o servidor de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
5. Ainda no terminal do servidor Vite:
	Dê o comando `o` e pressione Enter, para que o navegador abra automaticamente na página da aplicação
	Ou
	Se quiser acessar manualmente, observe, no terminal com o servidor Vite, o endereço onde está aplicação, ele fica após "Local:", como em `➜  Local: http://localhost:XXXX/`
	
   ```bash
     VITE vX.X.XX  ready in XXX ms
	
	  ➜  Local:   http://localhost:XXXX/
	  ➜  Network: use --host to expose
	  ➜  press h + enter to show help
   ```

## Vídeo demo
https://github.com/Kaiorc/pinterest-clone/assets/76459361/70094eaa-4232-452a-9386-ff155136170a

## Screenshots

### Página Explorar
![screenshot-ideas-page](https://github.com/Kaiorc/pinterest-clone/assets/76459361/f9ecab11-c8b0-4dca-b613-7872d52405c5)

### Página Hoje
![screenshot-today-page](https://github.com/Kaiorc/pinterest-clone/assets/76459361/db567c76-7ccc-4f65-a6ea-737c59a4a009)

### Login
![screenshot-login-page](https://github.com/Kaiorc/pinterest-clone/assets/76459361/d4b1c0e2-a1f4-4348-931f-27bcaaa2da4f)

### Signin
![screenshot-signin-page](https://github.com/Kaiorc/pinterest-clone/assets/76459361/42bfa6cf-007d-4845-956a-b1fb2f26bcf1)



## Melhorias

### Funcionalidades Futuras

-   **Teste Unitário e Integração:** Adicionar testes unitários e de integração para aumentar a confiabilidade do sistema.
