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

<h1 align="center">
<br>
  <img src="https://github.com/Rocketseat/semana-omnistack-10/raw/master/.github/devradar.svg?sanitize=tru" alt="DevRadar" width="240">
<br>
<br>
DevRadar
</h1>

<p align="center">The monorepo of a developers finder mobile and web app, built in using Node.js for the develpment of backend with a restful API, ReactJS for the webs frontend and React-Native, with Expo, for mobile, android and iOS native.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

[//]: # (Add your gifs/images here:)
<div>
  <img src="./web/web_frontend.jpg" alt="web-frontend" height="425">
  <img src="./mobile/imgs/mobile_frontend_video.mov" alt="mobile-video" height="425">
  <img src="./mobile/imgs/mobile_frontend_1.mov" alt="mobile-1" height="425">
  <img src="./mobile/imgs/mobile_frontend_2.mov" alt="mobile-2" height="425">
  <img src="./mobile/imgs/mobile_frontend_3.mov" alt="mobile-3" height="425">
  <img src="./mobile/imgs/mobile_frontend_4.mov" alt="mobile-4" height="425">
  <img src="./mobile/imgs/mobile_frontend_5.mov" alt="mobile-5" height="425">
  <img src="./mobile/imgs/mobile_frontend_6.mov" alt="mobile-6" height="425">
</div>

<hr />

## Features
[//]: # (Add the features of your project here:)
This app features all the latest tools and practices in mobile development!

- ⚛️ **React Js** — A JavaScript library for building user interfaces
- ⚛️ **React Native** — A lib that provides a way to create native apps for Android and iOS
- 💹 **Node Js** — A web framework for Node Js
- 📄 **MongoDB** — A cross-platform and open-source document-oriented database
- ♻️ **Socket IO** — A library for realtime web applications

## Instalando o Node.js e o Yarn

First install Node.js by the [executable](https://nodejs.org/en/download/) or by the [Chocolatey](https://chocolatey.org/install) with the command:
```bash
cinst nodejs.install
```
For others packages managers, see the [link](https://nodejs.org/en/download/package-manager/).

After, install the Yarn with the command:
```bash
choco install yarn
```
To install by the executable or others package managers, see the [link](https://yarnpkg.com/en/docs/install#windows-stable).

## Getting started

Before start, create a file called ".env" on the backend folder, like the model file "env_example", with your mongoDB database credentials.

To start the backend:
```bash
cd backend
yarn dev
```

To start the web application:
```bash
cd web
yarn start
```

If its yours first time using expo, use this command:
```bash
yarn global add expo-cli
```

To start the mobile application:
```bash
cd mobile
yarn start
```
Download the Expo app in the Play Store or App Store on your phone, or use some emulator, and syncronize with the the Expo opened on the browser.

Make sure that the IP putted on the file "mobile/src/services/utils/IP.js" is equal to the IP shown on the Expo in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.
