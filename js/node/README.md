# React/Sass/Redux Boilerplate

Boilerplate and guide for a React/Sass/Redux build.

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```

Run an initial webpack build
```
> webpack
```

Start the development server (changes will now update live in browser)
```
> npm start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)

## Project Setup (main specs)

file: package.json
- list of all the dependencies that you need for you app to work

file: webpack.config.js
- webpack: built tool
- devServer: sets a development server that allows to change the code and refresh live
- loaders for js: converts all JSX code to pure JavaScript
- loaders fo scss: converts from SCSS to CSS.

file: .babelrc
- javaScript compiler
- helps you compile those features down to a supported version

folder src:
- is being generated automatically by the built tool (bundle.min.js)
- 'root' is where the app is going to be displayed at index.html

folder dev:
- where the code is being written
