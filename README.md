# DevRadar

Projeto para aprendizado de JavaScript, utilizando Node.js para desenvolver o backend com uma API restful, ReactJS para o frontend web e o React-Native, com o Expo, para o mobile, nativo para android e iOS.


## Instalando o Node.js e o Yarn

Primeiro instale o Node.js pelo [executável](https://nodejs.org/en/download/) ou pelo [Chocolatey](https://chocolatey.org/install) pelo comando:
```bash
cinst nodejs.install
```
Para outros packages managers, veja o [link](https://nodejs.org/en/download/package-manager/).

Depois, instale o Yarn pelo comando:
```bash
choco install yarn
```
Para instalar pelo executável ou por outros package managers, ver o [link](https://yarnpkg.com/en/docs/install#windows-stable).


## Como inicializar as aplicações

Antes de iniciar, criar um arquivo chamado ".env" na pasta backend, a partir do modelo do arquivo env_example, com as credenciais do banco de dados do MongoDB.

Para iniciar o backend:
```bash
cd backend
yarn dev
```

Para iniciar a aplicação web:
```bash
cd web
yarn start
```

Se for a primeira vez utilizando o Expo no ambiente, usar o comando:
```bash
yarn global add expo-cli
```

Para iniciar a aplicação mobile:
```bash
cd mobile
yarn start
```
Baixe o aplicativo do Expo pela play store ou app store no celular, ou utilize emuladores, e sincronize com o Expo aberto no navegador.
Certificar-se que o IP colocado no arquivo "mobile/src/services/utils/IP.js" é igual ao IP mostrado pelo Expo no browser.
