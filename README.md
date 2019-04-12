[![Travis Build Status](https://travis-ci.org/ulaval/modul-components.svg?branch=develop)](https://travis-ci.org/ulaval/modul-components)
[![CircleCI Build Status](https://circleci.com/gh/ulaval/modul-components/tree/develop.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/ulaval/modul-components)
[![npm version](https://badge.fury.io/js/%40ulaval%2Fmodul-components.svg)](https://badge.fury.io/js/%40ulaval%2Fmodul-components)

# modul-components

A set of VueJS components for MOD**UL** web applications (beta release).

## Documentation

[Check out our documentation](https://ulaval.github.io/modul)

## Getting started to use modul in your project

- To create components and directives use
> `npm run file-gen-cli`

### Prerequisites

- vue
- vue-router
- webpack
- typescript
- sass

### Start a new modul application and webpack configuration

Please refer to [this repository](https://github.com/ulaval/modul-typescript-template) for a template of a modul project.

## Contributing

### Deploy sandboxes

1. Clone this project and install using npm install
2. Run npm run install
3. Run npm run dev

### Deployment for local usage in your project

1. Run npm pack
2. Add the dependency in your package.json ("@ulaval/modul-components": "file://&lt;path-to&gt;\\ulaval-modul-components-&lt;version&gt;.tgz")

> The `npm pack` command produces multiple .js files along with their definition files (.d.ts), html templates, scss files, etc.
