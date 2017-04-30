module.exports = {
  entry: './index.js',
  plugins: [
    {
      apply(compiler) {
        compiler.plugin('compilation', function(compilation) {
          compilation.mainTemplate.plugin('require-ensure', function(source, chunk, hash) {
            // `source` is the source code returned by the existing 'require-ensure' plugin,
            // e.g. from JsonpMainTemplatePlugin.js or NodeMainTemplatePlugin.js

            // e.g. prepend a statement to the chunk-loading code
            return this.asString([
              "console.info('loading chunk ' + chunkId);",
              source,
            ]);
          });
        });
      }
    }
  ],
};
