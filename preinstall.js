'use strict'

if (process.platform !== 'win32') {
  // not windows
  throw new Error('only `win32` is supported. Perhaps you should look for `cross-sqlcipher`.')
}
