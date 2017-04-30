import('./asyncChunk').then(chunk => {
  console.info('Loaded ' + chunk.name);
});
