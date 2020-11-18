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