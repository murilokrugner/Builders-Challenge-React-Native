<p align="center">
  <a href="https://platformbuilders.io">
    <img src="https://platformbuilders.io/assets/img/logo-footer.png" alt="Logo">
  </a>

<h3 align="center">Challenge Builders React Native</h3>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto visa a criação de um aplicativo Android e Ios de previsão do tempo para o desafio técnico da Platform Builders.

### Feito Com

Abaixo segue o que foi utilizado na criação deste projeto:

- [React Native](http://facebook.github.io/react-native/) - O React Native é um framework que permite o desenvolvimento de aplicações mobile usando JavaScript e React;
- [React Navigation](https://reactnavigation.org/) - O React Navigation surgiu da necessidade comunidade do React Native de uma navegação de forma fácil de se usar, e escrita toda em JavaScript;
- [@react-navigation/compat](https://github.com/react-navigation/react-navigation) -  Extensão para React Navigation
- [@react-navigation/native-stack](https://reactnavigation.org/) - Extensão para @react-navigation/stack
- [@react-navigation/stack](https://reactnavigation.org/) - Roteamento e navegação para seus aplicativos React Native em Stack.
- [React Native Gesture Handler](https://kmagiera.github.io/react-native-gesture-handler/) - API declarativa que permite a manipulação de toques e gestos no React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Reactotron](https://github.com/infinitered/reactotron) - O Reactotron é um app Desktop para inspecionar projetos em React ou React Native. Está disponível para macOS, Linux e Windows;
- [Reactotron-react-native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) - Plugin para configurar o Reactotron para se conectar ao projeto React Native;
- [@react-native-community/async-storage](https://github.com/react-native-async-storage/async-storage#readme) - Sistema de armazenamento de dados para React Native;
- [@react-native-community/geolocation](https://github.com/react-native-geolocation/react-native-geolocation) - API de geolocalização para React Native - Usada para obter permissões do usuário;
- [date-fns](https://date-fns.org/) - Biblioteca de utilitários de data JavaScript moderna;
- [react-native-geocoding](https://github.com/marlove/react-native-geocoding#readme) - Um módulo de geocodificação para React Native para transformar uma descrição de um local;
- [react-native-geolocation-service](https://github.com/react-native-geolocation/react-native-geolocation) - API de geolocalização para React Native;
- [react-native-google-places-autocomplete](https://github.com/FaridSafi/react-native-google-places-autocomplete#readme) - Componente de preenchimento automático personalizável do Google Places para aplicativos React-Native para iOS e Android;
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient) - Elemento de estilos para React Native;
- [react-native-permissions](https://github.com/zoontek/react-native-permissions) - Uma API de permissões unificadas para React Native no iOS, Android e Windows;
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) - Dependências de React Navigation;
- [react-native-screens](https://github.com/software-mansion/react-native-screens) - Dependências de React Navigation;
- [styled-components](https://styled-components.com/) - Use os melhores bits de ES6 e CSS para estilizar seus aplicativos sem estresse;
- [@react-native-community/netinfo](https://github.com/react-native-netinfo/react-native-netinfo) - Permite obter informações sobre a conexão com a internet;
- [react-native-statusbar-alert](https://github.com/gnestor/react-native-statusbar-alert) - Um alerta;
- [immer](https://github.com/immerjs/immer) - Crie a próxima árvore de estado imutável simplesmente modificando a árvore atual;
- [lottie](https://github.com/lottie-react-native/lottie-react-native) - Lottie é uma biblioteca móvel para Android e iOS que analisa animações do Adobe After Effects exportadas como JSON com bodymovin e as renderiza nativamente em dispositivos móveis!
- [react-native-shimmer-placeholder](https://github.com/tomzaku/react-native-shimmer-placeholder) - Loading for React Native
- [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) - Uma API de tela inicial para react-native que pode ocultar e mostrar programaticamente a tela inicial. Funciona em iOS e Android.
- [react-native-statusbar-alert](https://github.com/gnestor/react-native-statusbar-alert) - Um alerta de barra de status
- [redux, redux-persist, redux-saga, react-redux](https://redux.js.org/) - Um contêiner de estado previsível para aplicativos JS

## Para obter informações do clima, o projeto utiliza a API Open Weather
- [Open Weather](https://openweathermap.org/api) - Veja mais

## Para a padronização do código, o projeto utilizar as extensões para Visual Studio Code, como:
- [eslint](https://eslint.org/) - Encontre e corrija problemas em seu código JavaScript
- [prettier](https://prettier.io/) - Um formatador de código opinativo
- [editorconfig](https://editorconfig.org/) - EditorConfig ajuda a manter estilos de codificação consistentes para vários desenvolvedores
- [eslint-config-airbnb](https://github.com/airbnb/javascript) - Guia de estilo JavaScript do Airbnb

<!-- GETTING STARTED -->
## Começando

Para conseguir rodar o projeto, clone o mesmo e siga os passos abaixo.

### Pré-requisitos

Antes de seguirmos para as configurações do projeto, é ideal que você tenha o ambiente configurado para criar e testar aplicativos em React Native, para isso você pode seguir o guia do link abaixo como exemplo:

[Ambiente React Native (Android/iOS)](https://github.com/Rocketseat/ambiente-react-native)

### Estrutura de Arquivos

A estrutura de arquivos está da seguinte maneira:

```bash
BuildersChallengeRn
├── .assets
├── .coverage
├── src/
│   ├── assets/
│   │   └── logo.png
│   │   └── plus.png
│   │   └── refresh.png
│   │   └── weather-icon.json
│   ├── components/
│   │   ├── Button/
│   │   │   └── button.spec.tsx
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── CityLocation/
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── ConnectionInfo/
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── DateNow/
│   │   │   └── date-now.spec.tsx
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── ForecastComponents/
│   │   │   ├── ButtonPlus/
│   │   │   │   └── button-plus.spec.tsx
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ButtonReflesh/
│   │   │   │   └── button-reflesh.spec.tsx
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ForecastCity/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ForecastInformations/
│   │   │   │   └── forecast-informations.spec.tsx
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── PanelInformations/
│   │   │   │   └── panel-informations.spec.tsx
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   ├── HomeComponents/
│   │   │   ├── Header/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── WeatherForecast/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   ├── Line/
│   │   │   └── line.spec.tsx
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── LoadingComponents/
│   │   │   ├── LoadingCity/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── LoadingImage/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── LoadingPanel/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── LoadingSearchLocation/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── LoadingWeatherInformations/
│   │   │   │   └── index.tsx
│   │   │   │   └── styles.ts
│   │   ├── SearchPlaces/
│   │   │   └── index.tsx
│   ├── config/
│   │   └── ReactotronConfig.ts
│   ├── contexts/
│   │   └── ConnectionInfoContext.tsx
│   ├── functions/
│   │   └── asyncStorage/
│   │       └── index.ts
│   ├── pages/
│   │   ├── Home/
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── NewLocation/
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   │   ├── Welcome/
│   │   │   └── index.tsx
│   │   │   └── styles.ts
│   ├── permissions/
│   │   └── location.ts
│   ├── Router/
│   │   └── ApplicationPages/
│   │   │   └── index.tsx
│   ├── services/
│   │   └── api-open-weather.ts
│   │   └── apkKey-geocoder.ts
│   │   └── apkKey-google-places.ts
│   │   └── apkKey-open-weather.ts
│   ├── styles/
│   │   ├── background/
│   │   │   └── index.js
│   │   ├── colors/
│   │   │   └── index.js
│   │   ├── dimensions/
│   │   │   └── index.js
│   │   ├── fonts/
│   │   │   └── index.js
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── .buckconfig
├── .editorconfig
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── .prettierrc.js
├── .ruby-version
├── .watchmanconfig
├── app.json
├── babel.config.js
├── Gemfile
├── Gemfile.lock
├── index.js
├── jest.config.js
├── metro.config.js
├── package.json
├── react-native-config.js
└── README.md
└── ts.d.ts
└── tsconfig.json
└── yarn-error.log
└── yarn.lock
```
### Instalação

1. Com o projeto clonado, abra o mesmo em seu Terminal, Powershell ou CMD e execute os seguites comandos:
   - Se estiver utilizando Yarn execute:
     - ```sh
          yarn
          ```
   - Se estiver utilizando NPM execute:
     - ```sh
          npm install
          ```
2. Para executar o projeto em IOS, execute o seguinte comando:
   - ```sh
          ios/pod install
        ```
3. Depois de todas as dependências tiverem sido baixadas execute o projeto:

   - ```sh
          yarn run android
        ```
    - ```sh
           yarn run ios
        ```
    Caso utilize NPM:
    - ```sh
          npm run android
        ```
    - ```sh
          npm run ios
        ```
4. Agora com o projeto em executação podemos ver o seu funcionamento, abaixo temos alguns exemplos:

<div class="box">
    <p align="center">
        <a href="https://ibb.co/9yh3MkX">
            <img width="200" heigth="200" src="https://i.ibb.co/KVDz1pZ/Simulator-Screen-Shot-i-Phone-13-2022-03-17-at-11-20-39.png" alt="Logo">
        </a>
    </p>
    <p align="center">
        <a href="https://ibb.co/0FmNdrp">
            <img width="200" heigth="200" src="https://i.ibb.co/3M4XLc5/Simulator-Screen-Shot-i-Phone-13-2022-03-15-at-10-28-20.png" alt="Logo">
        </a>
    </p>
    <p align="center">
        <a href="https://ibb.co/5jx82Wf">
            <img width="200" heigth="200" src="https://i.ibb.co/n18cRs5/Simulator-Screen-Shot-i-Phone-13-2022-03-15-at-10-28-33.png" alt="Logo">
        </a>
    </p>
</div>

### Testes

1. Para o bom funcionamento da aplicação, realizamos os testes unitários. Nesse projeto podemos executar o seguinte comando para rodar os testes:

   - ```sh
          yarn test
        ```
    - ```sh
           npm test
        ```

 - Obtemos então os resultados:
 <p align="center">
        <a href="https://ibb.co/5jx82Wf">
            <img src="https://i.ibb.co/2tLqtgC/Captura-de-Tela-2022-03-15-a-s-10-53-12.png" alt="Logo">
        </a>
    </p>

- Você pode acessar também o relatório completo dos testes em:

```bash
    BuildersChallengeRn
    ├── coverage/
    │   ├── Icov-report/
    │   │   └── index.html
```
