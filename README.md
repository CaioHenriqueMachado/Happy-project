<div align="center">
  <img src="./image/logo.svg" alt="Logo Happy" width="30%">
</div>


<p align="center">
  <a href="#projeto">
    Projeto 
  </a> | 
  <a href="#web">
    Layout Web
  </a> | 
  <a href="#mobile">
    Layout Mobile
  </a> | 
  <a href="#tecnologias">
    Tecnologias
  </a> | 
  <a href="#licenca">
    Licença
  </a>
</p>

<img src="./image/line.png" alt="line" width="100%">
<br>


<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<img src="./image/happy.png" alt="Happy" width="100%">


<img src="./image/line.png" alt="line" width="100%">
<br>

<h2 id="projeto" >Projeto</h2>
<p>O Happy é uma aplicação que conecta pessoas à casas de acolhimento institucional para fazer o dia de muitas crianças mais feliz. </p>


<img src="./image/line.png" alt="line" width="100%">
<br>
<h2 id="web">Layout Web</h2>



<img src="./image/line.png" alt="line" width="100%">
<br>
<h2 id="mobile">Layout Mobile</h2>


<img src="./image/line.png" alt="line" width="100%">
<br>

<h2 id="tecnologias" >Tecnologias</h2>
<p>Esse projeto foi desenvolvido com as seguintes tecnologias: </p>

 - Node.js
 - React
 - React Native
 - Expo
 - TypeScript



<img src="./image/line.png" alt="line" width="100%">
<br>
<h2 id="licenca" >Licença</h2>

Esse projeto está sob a licença MIT.

<img src="./image/line.png" alt="line" width="100%">
<br>










# Happy-project
Feito no NLW 3

CONECTAR NO FRONTEND
yarn start

CONECTAR NO BACKEND
yarn dev

CONECTAR NO MOBILE
yarn start

FRONT END
npm install ...
react-icons
react-router-dom e (npm install @types/react-router-dom - D)
leaflet
react-leaflet e (npm install @types/react-leaflet -D)

BACK END
npm init -y
npm install express e (npm install @types/express -D)
npm install typescript -D
npm install typeorm sqlite3


npm install ts-node-dev -D

criar arquivo tsc
npm tsc --init


MIGRATES:
criar:
yarn typeorm migration:create -n create_orphanages
rodar:
yarn typeorm migration:run
yarn typeorm migration:revert
(usando software BEEKEEPER STUDIO)
----

yarn add multer -D  e (yarn add @types/multer)(upload de imagens)

Para capturar erros
yarn add express-async-errors e (yarn @types/express-async-errors)

metodo de validação 
yarn add yup e (npm install @types/yup -D)


yarn add cors


yarn add axios




-------------------------------
MOBILE

expo-cli
expo google fonts (expo install @expo-google-fonts/nunito expo-font)
expo install react-native-maps

para rotas: react navigation (yarn add @react-navigation/native)
pacotes caso use o expo (expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view)
escolhendo o tipo de navegação: foi usada a STACK (yarn add @react-navigation/stack)

axios (yarn add axios) (para chamadas http)

(expo install expo-image-picker)