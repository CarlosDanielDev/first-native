# Configurando um Projeto React Native!

Olá, me chamo Carlos Daniel, e minha intenção com este passo a passo, e explicar
de uma maneira clara, como configurar um projeto `React-Native`, lembrando que,
é necessário que você tenha familiaridade com a estrutura de um peojeto `Reactjs`.

## 1º Passo

Bem antes de mais nada é necessário fazer todas as configurações de ambiente,
para que seja possível inciar uma aplicação `React-Native`, neste [link](https://https://docs.rocketseat.dev/ambiente-react-native/introducao), você pode conferir, como configurar seu ambiente
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

