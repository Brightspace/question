# d2l-question

[![Build status][ci-image]][ci-url]

[Polymer](https://www.polymer-project.org)-based web component for D2L questions.


For further information on this and other Brightspace UI components, see the docs at [ui.developers.brightspace.com](http://ui.developers.brightspace.com/).

## Installation

```shell
bower install d2l-question
```

## Usage

## Developing, Testing and Contributing

After cloning the repo, run `npm install` to install dependencies.

If you don't have it already, install the [Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli) globally:

```shell
npm install -g polymer-cli
```

To start a [local web server](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#serve) that hosts the demo page and tests:

```shell
polymer serve
```

To access demo page, type http://127.0.0.1:8081/components/d2l-question/demo/ in browser

To lint ([eslint](http://eslint.org/) and [Polymer lint](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#lint)):

```shell
npm run lint
```

To run unit tests locally using [Polymer test](https://www.polymer-project.org/2.0/docs/tools/polymer-cli-commands#tests):

```shell
polymer test --skip-plugin sauce
```

To lint AND run local unit tests:

```shell
npm test
```

To run unit tests on browser:

```shell
http://127.0.0.1:8081/components/d2l-question/test/
```

[ci-url]: https://travis-ci.com/Brightspace/question
[ci-image]: https://travis-ci.com/Brightspace/question.svg
