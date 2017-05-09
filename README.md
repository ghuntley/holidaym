# holidaym

[![Build Status][ci-image]][ci-url] [![dependencies][dependencies-image]][dependencies-url] [![dev-dependencies][dev-dependencies-image]][dev-dependencies-url]

Based on [ReactNativeTS]([original]), a minimal template of a [React Native](https://facebook.github.io/react-native/) project with [Typescript](https://www.typescriptlang.org/).

## Getting Started

* Requirements: [Node.js](https://nodejs.org) and [Yarn](https://yarnpkg.com/)

Rename `config.example.json` to `config.json` and set your api key.

Clone this repository:

```sh
git clone https://github.com/mrpatiwi/ReactNativeTS.git
cd ReactNativeTS
```

Install dependencies:

```sh
yarn
```

Start React Native server:

```sh
yarn start
```

Build the source-code with Typescript:

```sh
# Build once
yarn run build

# Build and watch for changes
yarn run build -- --watch
```

### iOS

```sh
yarn run ios
```

### Android

```sh
yarn run android
```

## Testing

This project uses Typescript + Jest. Run the test suite with:

```sh
yarn test
```

[original]: https://github.com/mrpatiwi/ReactNativeTS
[ci-image]: https://travis-ci.org/zaripych/holidaym.svg
[ci-url]: https://travis-ci.org/zaripych/holidaym
[dependencies-image]: https://david-dm.org/mrpatiwi/ReactNativeTS.svg
[dependencies-url]: https://david-dm.org/mrpatiwi/ReactNativeTS
[dev-dependencies-image]: https://david-dm.org/mrpatiwi/ReactNativeTS/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/mrpatiwi/ReactNativeTS#info=devDependencies
