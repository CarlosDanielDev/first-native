# Configurando um Projeto React Native!

Olá, me chamo Carlos Daniel, e minha intenção com este passo a passo, e explicar
de uma maneira clara, como configurar um projeto `React-Native`.

## 1º Passo

Bem antes de mais nada é necessário fazer todas as configurações de ambiente,
para que seja possível inciar uma aplicação `React-Native`, neste [link](https://https://docs.rocketseat.dev/ambiente-react-native/introducao), você pode conferir, como configurar seu ambiente e emuladores.
para executar aplicações `React-Native`.

Depois de seguir todas as configurações, vamos dar inicio a configuração do nosso
projeto.

Aqui, é importante salientar que para este tutorial vou utilizar o [yarn](https://https://yarnpkg.com/pt-BR/),
mas você pode utilizar o [npm](https://https://www.npmjs.com/) que vem instalado junto com,
o [node](https://nodejs.org/pt-br/).

no seu terminal execute:

```bash
yarn add react-native-cli -G
```
> Note que eu estou utilizando a flag `-G`, que significa que é uma dependência
> global.


*Para você que está utilizando `MAC`, é necessário que você tenha instalado o [CocoaPods](https://cocoapods.org), execute no seu terminal o comando abaixo.*

```bash
sudo gem install cocoapods
```

*Ignore este passo caso você esteja utilizando Linux ou Windows*.

## 2º Passo

Agora com a ferramenta de linhda de comando do `React-Native` instalada na sua máquina
vamos prosseguir com a configuração do nosso projeto.

No seu terminal execute o seguinte comando:

```bash
react-native init firstReactNative
```
> `firstReactNative` é só o nome que eu escolhi para este projeto, você pode dar o nome
> que quiser, isso fica a seu critério.

Após a instalação das dependências finalizar, vamos executar o seguinte comando:


> Se você está no linux, certifique-se de que seu **emulador** do `android` esteja ativo,
> se for usar seu dispositivo físico, também certifique-se de que ele está conectado
> a rede `Wi-Fi` ou no cabo `USB`.
Linux
```bash
cd firstReactNative && react-native run-android && react-native start
```

MAC
```bash
cd firstReactNative && react-native run-ios
```

Após Finalizar a instalação do App, ele deverá abrir uma janela do terminal com
o `Metro-Bundler`(Metro é um packager de JavaScript. Ele pega um arquivo de
entrada e várias opções e devolve um único arquivo JavaScript que inclui todo o
seu código e suas dependências.), e no seu emulador deverá abrir a aplicação.

Bem, agora é hora de fazer nosso ***Hello World!***.

## 3º Passo



Na raiz do projeto existe um arquivo chamado `App.js`, apague tudo dentro dele,
e dexe-o dessa forma:

```jsx
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
    </View>
  );
}

```

Isso deverá gerar um `Hello Wolrd!` na tela do seu emulador ou dispositivo móvel.

## 3º Passo

Agora vamos instalar o `ESLint`, uma ferramenta que vai nos ajudar a padrionizar
o nosso código, no seu terminal, execute o comando abaixo:

> Provavelmente, na raiz do seu projeto exista um arquivo chamado `.eslintrc.js`,
> apague esse arquivo para prosseguirmos com a configuração.


```bash
yarn add eslint -D
```
> Note que eu utilizei a flag `-D` que sinaliza que essa dependência, é uma
> dependência de desenvolvimento.

Logo após a instalação do `ESLint`, execute no terminal o seguinte comando:

```bash
yarn eslint --init
```
Algumas perguntas irão aparecer no terminal agora.

Para a primeira pergunta *How would you like to use ESLint?*
selecione a opção:
`To check syntax, find problems, and enforce code style`
e pressione <code>ENTER</code> para continuar.

Para a segunda pergunta: *What type of modules does your project use?*,
selecione a opção: `JavaScript modules (import/export)`.

Para a terceira pergunta: *Which framework does your project use?*

Como estamos configuranso o `ESLint` para o **REACT**, selecione a opção:
`React`.

Agora, o terminal está perguntando: *Does your project use TypeScript?*, como
não estamos utilizando `TYPESCRIPT`, pressione a tecla <code>N</code> e em
seguida tecle <code>ENTER</code>.

Agora ele nos pergunta: *Where does your code run?*, onde nosso código está
rodando, como é uma aplicação `React-Native`, ela vai rodar no `emulador` ou `mobile-device`,
desmarque a opção `Browser` com o teclado, e tecle <code>ENTER</code> para continuar.

Agora ele nos pergunta: *How would you like to define a style for your project?*
selecione a opção: `Use a popular style guide`, e tecle <code>ENTER</code>, para
continuar.

Para a pergunta: *Which style guide do you want to follow?*, Eu optei por
escolher a opção `Airbnb (https://github.com/airbnb/javascript)`, que é o padrão
de código que utilizo em 100% dos meus projetos `React`, e é com ela que vamos
configurar todos os `snnipets` de padronização de código.

Para a pergunta: *What format do you want your config file to be in?*, selecione
a opção `Javascript`.

Agora ele nos pergunta: *Would you like to install them now with npm?*, presssione
<code>Y</code> e tecle <code>ENTER</code> para continuar, e aguarde o processo
finalizar.

Observe a raiz do seu projeto, e apague o seguinte arquivo, `package-lock.json`,
e em seguida, execute no terminal:

```bash
yarn
```
> O que acabamos de fazer foi registrar as dependências que o `ESLint` instalou,
> no `package-lock.json`, no nosso `yarn.lock`.

Agora na raiz do seu projeto crie o arquivo `.editorconfig`, deixe-o exatamente
asssim:

```editorconfig
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Agora vamos instalar masi algumas dependências para finalizar a configuração do
nosso Style Guide.

execute no terminal:

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Agora vamos editar o arquivo `.eslintrc.js`, deixe-o exatamente assim:

```js
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser:'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {extensions: ['.jsx', '.js']}
    ],
    'import/prefer-default-export': 'off'
  },
};
```

Você deve estar se perguntando, ok, por que isso tudo ?

Bem, não é necessário entender todas essas regras, e configurações deste arquivo,
mas algumas coisas são interessantes de ter conhecimento, as partes desse arquivo
de configuração que nós editamos.

1. `extends`
```js
extends: [
    'airbnb',
    'prettier',// new
    'prettier/react'// new
  ],
```
Aqui nós estamos dizendo pro `ESLint` que vamos utilizar mais algumas configurações,
além do padrão de código da `Airbnb`, são elas o `prettier`, e o `prettier/react`.

Nós tambem adicionamos isso no arquivo:

```js
 parser:'babel-eslint',// new
```
Isso serve pra dizer pro `ESLint` que nós vamos utilizar as últimas features do
javascript.


Nós também configuramos a parte de plugins:

```js
plugins: [
    'react',
    'prettier' // new
  ],
```
Adicionamos o `prettier` como um plugin.

Agora vamos configurar algumas regras:

```js
rules: {
  'prettier/prettier': 'error', // Primeira regra
  'react/jsx-filename-extension': [
    'warn',
    {extensions: ['.jsx', '.js']}
  ], // Segunda regra
  'import/prefer-default-export': 'off' // terceira regra
},
```
A primeira regra, nós estamos dizendo pro `ESLint` que queremos que o `prettier`
informe como `erro`, todas as regras que ele encontrar e não estiver de
acordo com o nosso código.

A segunda regra, sobrescreve uma regra do padrão da `Airbnb`, essa regra consiste
em somente escrevermos código `JSX`(**Javascript** misturado com **HTML**), em arquivos
que terminem com a estenção `.jsx`, com essa regra que configuramos, podemos escrever
código `JSX`, tanto em arquivos `.jsx` quanto em arquivos  com a extenção `.js`.

A terceira regra também é uma regra de sobreposiçã á uma regra do padrão de código
da `Airbnb`, essa regra consiste que em arquivos que temos somente um `export`,
esse `export` seja um `export default`.

## 5º Passo

Agora na raiz do seu projeto, provavelmente exista um arquivo chamado `.prettierrc.js`,
apague-o e crie um arquivo chamado `.prettierrc`.

Deixe o arquivo exatamente assim:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}

```
Essa configuração, faz com que o `prettier` e a `style-guide` da `Airbnb` tenham
uma, digamos assim, **Harmonia**.


## 6º Passo

1. Esquema de pastas.

dentro da raiz do projeto cir um pasta chamada `src`, dentro da `src`, crie um arquivo
chamado `index.js`.

Agora recorte todo o conteúdo do arquivo `App.js` da raiz do projeto e cole-o, no arquivo
`src/index.js`, em sequida apague o arquivo `App.js` da raiz do projeto, e edite o arquivo
`index.js` da ***raiz*** do projeto.

> Atenção, edite o arquivo `index.js` da ***raiz***, não o `index.js` da pasta `src`.

Deixe o arquivo `index.js` da raiz do projeto, exatamente assim:


```jsx
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
```

## Debug

Aqui vou configurar uma ferramenta de `debug` externa, a ferramenta se chama [reactotron](https://github.com/infinitered/reactotron), [baixe](https://github.com/infinitered/reactotron/releases) essa aplicação e instale na sua maquina, se estiver usando linux-debian (ou ubuntu) [click-aqui](https://github.com/infinitered/reactotron/releases/download/v2.17.1/reactotron-app_2.17.1_amd64.deb) para inciar o download automaticamente.

Bem, depois de instalado, abra a aplicação, deixe ela aberta e vamos as suas configurações.

Agora em seu terminal, execute o seguinte comando para instalar as dependências do `reactotron`, no nosso projeto `React-Native`.

```bash
yarn add reactotron-react-native
```

Agora, dentro da pasta `src`, vamos criar uma pasta chamada `config`, é lá que vamos abstrair todos os arquivos de configuração da nossa aplicação.

Dentro dessa pasta vamos criar um arquivo chamado `ReactotronConfig.js`,
se estiver no linex execute o comando na raiz do projeto:

```bash
touch src/config/ReactotronConfig.js
```

Agora vamos editar este aqrquivo, deixe-o exatamente assim:

```jsx
import Reactotron from 'reactotron-react-native';

if(__DEV__){
  const tron = Reactotron.configure({host: 'seu-ip-local'})
    .useReactNative()
    .connect();

  console.tron = tron
  tron.clear();
}
```
1. Importamos o `Reactotron`

2. Criamos uma condição
  * Essa condição verifica se estamos em ambiente de `dev` ou não.

3. Inicializando o Reactotron
  * Neste ponto eu declaro uma constate recebendo o reactotron e algumas configurações necessárias para o uso do debug do `Reactotron`.
4. Criei uma propriedade chamada `tron` dentro do Objeto `console` do javascript.
  * Dentro da propriedade `tron`, que criamos no objeto global `console` e lá colocamos a constante que inicia o `Reactotron`.


Agora vamos importar esse aquivo de configuração aue acabamos de criar dentro do nosso `src/index.js`.

```jsx
import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import './config/ReactotronConfig';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
    </View>
  );
}
```
> Agora se você verificar a aplicação do Reactotron na aba `timeline`, existe uma notificação de conexão, isso signfica que deu tudo certo.

Agora podemos debugar de uma maneira mais *sagaz* no `React-Native`, a unica mudança é que ao inves de simplesmente digitar `console.log('Alguma coisa')`, vamos utilizar `console.tron.log('Alguma coisa')`.



## Roteamento

Ok, agora vamos confirar o esquema de rotas da nossa apicação, primeiramente vamos esquematizar como serão exibidas as nossas `pages`.

Dentro da pasta `src` crie uma pasta com o nome `pages`.

Dentro da pasta `pages` nós vamos usar o seguinte esquema, para cada `page/view` que nós criarmos, ex: Main, é a página de inicio da aplicação, ao invés de criarmos um arquivo `Main.js`, vamos criar uma pasta com esse nome, e dentro dessa pasta vamos criar um arquivo `index.js`, então fica assim: `pages/Main/index.js`.

Para esse exemplo vamos criar 2 `pages/views` muito simples, Main, e About, caso use Linux, ou Mac, execute no terminal o comando abaixo:

```bash
mkdir src/pages  src/pages/Main src/pages/About && touch src/pages/Main/index.js src/pages/About/index.js
```
Dentro de cada pasta dentro de `pages`, existe um arquivo `index.js`, edite-os e deixe-os assim:

* `Main/index.js`

```jsx
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Main() {
  return <View />;
}

```

* `About/index.js`

```jsx
import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function About() {
  return <View />;
}
```

Agora dentro da minhas pasta `src`, vamos criar um arquivo com o nome de `routes.js`:

```bash
touch src/routes.js
```

Voltando ao terminal, vamos instalar o `react-navigation`.

```bash
yarn add react-navigation
```
> A biblioteca `react-native` muda constantemente, é interessante sempre seguir o passo a passo da propria [documentacao](https://reactnavigation.org/docs/pt-BR/getting-started.html), portanto, só vou fazer um apontamento dessa configuração aqui neste guia.

* Como não vamos utilizar o `Expo`, instale essas [dependências](https://reactnavigation.org/docs/pt-BR/getting-started.html#installing-dependencies-into-a-bare-react-native-project)

* Caso esteja no `Mac`, faça este passo

```bash
cd ios && pod install && cd ..
```

Para o android, continue lendo as docs, pois existe um passo muito importante
<img src="https://i.imgur.com/YG2oySO.png" alt="Passo Android"/>

Para finalizar a instalação da dependecia do `react-navigation` é necessário editar o arquivo
`android/app/build.gradle`, adicionando os códigos da imagem acima.

Nessa seção insira os código da imagem acima:

```java
dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.facebook.react:react-native:+"  // From node_modules
    // código aqui
    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}
```

Deve ficar assim:

```java
dependencies {
    implementation fileTree(dir: "libs", include: ["*.jar"])
    implementation "com.facebook.react:react-native:+"  // From node_modules
    implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
    if (enableHermes) {
        def hermesPath = "../../node_modules/hermes-engine/android/";
        debugImplementation files(hermesPath + "hermes-debug.aar")
        releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
        implementation jscFlavor
    }
}

```
> lembrando que esses códigos podem varia de acordo com a versão do `React-Navigation`, então certifique-se de que o código é exatamente o da documentação.

Agora muita atenção nessa parte da documentação:

<img src="https://i.imgur.com/8BvE1tn.png" alt="acoes MainActivity">

Você vai editar o arquivo `android/app/src/main/java/com/<nome_do_seu_projeto>/MainActivity.java`, mas seguintes seções:

```java
package com.modulo5_native;

import com.facebook.react.ReactActivity;

// primeira seção
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "modulo5_native";
  }


}

```

Deve ficar assim:5

```java
package com.modulo5_native;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "modulo5_native";
  }
  // segunda seção

}

```

Agora adicione a ultima parte do código:6

```java
package com.modulo5_native;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "modulo5_native";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}

```


Certo, nós acabamos de instalar uma lib que mexe diretamente no código nativo, seja ele *IOS*, ou *ANDROID*, nós devemos rodar novamente os seguintes comando:

* `android`
```bash
react-native run-android
```
* `ios`
```bash
react-native run-ios
```
Agora vamos configurar nosso arquivo de rotas, nós vamos utilizar nesse exemplo, a navegação por stack, mas você, tem total de liberdade de consultar a [documentação](https://reactnavigation.org/docs/pt-BR/hello-react-navigation.html), e escolher qual tipo de navegação você acha interessante.

* para a navegação stack, vamo utilizar uma lib exrterna pra isso, a `react-navigation-stack`, então no seu terminal, execute:

```bash
yarn add react-navigation-stack
```

Agora edite seu arquivo `roputes.js`, deixe-o dessa forma:


```jsx
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import About from './pages/About';

const Routes = createAppContainer(createStackNavigator({ Main, Repository }));

export default Routes;

```

Pronto, nossa navegação está praticamente criada, pronta pra ser utilizada.

O que fizemos aqui ?

1. importamos o App Cointainer.
* Ele vai cobrir toda nossa navegação.
2. Importamos a navegação stack.
* Aqui eu configuro as `pages/views`(chame como preferir), que utilizarão a navegação stack.
3. Exportei a constante de rotas expondo ela pra minha aplicação.


Agora vamos editar o arquivo `src/index.js`, deixe-o exatamente assim.


```jsx
import React from 'react';
import './config/ReactotronConfig';
import Routes from './routes';

export default function App() {
  return <Routes />;
}

```
Pronto Navegação Finalizada!!
