Your Module Name(Upper Camel)
---

<p align="right">
  <a href="https://npmjs.org/package/your-module-name">
    <img src="https://img.shields.io/npm/v/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://travis-ci.org/59naga/your-module-name">
    <img src="http://img.shields.io/travis/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/your-module-name/coverage">
    <img src="https://img.shields.io/codeclimate/github/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://codeclimate.com/github/59naga/your-module-name">
    <img src="https://img.shields.io/codeclimate/coverage/github/59naga/your-module-name.svg?style=flat-square">
  </a>
  <a href="https://gemnasium.com/59naga/your-module-name">
    <img src="https://img.shields.io/gemnasium/59naga/your-module-name.svg?style=flat-square">
  </a>
</p>

> Description

Installation
---
```bash
npm install your-module-name --save
```

Stacktrace was broken
---
published code is compressed and the source map is provided.
not supported by the sourcemap in NodeJS. but this resolved in the [node-source-map-support](https://github.com/evanw/node-source-map-support#readme).

```bash
npm install source-map-support --save-dev
```
```js
import 'source-map-support/register';
```
or...
```bash
$ mocha --require source-map-support/register
```

Development
---
Requirement global
* NodeJS v5.10.0
* Npm v3.8.3

```bash
git clone https://github.com/59naga/your-module-name
cd your-module-name
npm install

npm test
```

License
---
[MIT](http://59naga.mit-license.org/)
