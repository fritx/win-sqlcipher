'use strict'
require('shelljs/global')

if (process.platform !== 'win32') {
  // not windows
  throw new Error('only `win32` is supported. Perhaps you should look for `unix-sqlcipher`.')
} else {
  // windows
  // todo: pass build args
  exec('npm install sqlite3 --build-from-source')
}
