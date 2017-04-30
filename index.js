import('./asyncChunk').then(chunk => {
  console.info('loaded ' + chunk.name);
});
