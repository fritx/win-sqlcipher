'use strict'

if (process.platform !== 'win32') {
  // not windows
  console.warn('only `win32` is supported. Perhaps you should look for `cross-sqlcipher`.')
  process.exit(1)
}
