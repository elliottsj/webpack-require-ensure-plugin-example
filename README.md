# webpack-require-ensure-plugin-example
Example of customizing webpack's `import()` / `require.ensure()` chunk loader runtime.

Look at [webpack.config.js](webpack.config.js) to see how the runtime is customized.

### Usage
```shell
npm install
npm start
```

Open http://localhost:8080/ and check the source of bundle.js:

![screenshot 2017-04-30 12 58 40](https://cloud.githubusercontent.com/assets/2177366/25566338/c18d19a0-2da4-11e7-9566-0374fa828486.png)

You should see "loading chunk 0" and "loaded asyncChunk" in the console.

### See also
* [webpack/webpack#803](https://github.com/webpack/webpack/issues/803)
