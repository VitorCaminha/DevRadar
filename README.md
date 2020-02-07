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
  <img src="https://i.ibb.co/vkxgbqh/web-frontend.jpg" alt="web-frontend" height="425">
  <img src="https://media.giphy.com/media/VGPyRPg3GYz9NsMrPs/giphy.gif" alt="mobile-video" height="425">
  <img src="https://i.ibb.co/QfPXLSK/mobile-frontend-1.png" alt="mobile-1" height="425">
  <img src="https://i.ibb.co/WNhBN5Y/mobile-frontend-2.png" alt="mobile-2" height="425">
  <img src="https://i.ibb.co/DWXQVyj/mobile-frontend-3.png" alt="mobile-3" height="425">
  <img src="https://i.ibb.co/HGRT2s7/mobile-frontend-4.png" alt="mobile-4" height="425">
  <img src="https://i.ibb.co/NrQ3MyT/mobile-frontend-5.png" alt="mobile-5" height="425">
  <img src="https://i.ibb.co/ypzVGnP/mobile-frontend-6.png" alt="mobile-6" height="425">
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

## Installing Node.js and Yarn

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
