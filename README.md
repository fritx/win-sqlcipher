# win-sqlcipher

> Encrypted sqlite3 for Windows
> See also: [cross-sqlcipher](https://github.com/fritx/cross-sqlcipher)

```sh
npm install win-sqlcipher

# for NW.js (formally node-webkit)
npm i win-sqlcipher --runtime=node-webkit --target=0.12.3 --target_arch=ia32
```

```js
var sqlite3 = require('win-sqlcipher').verbose();
var db = new sqlite3.Database('test.db');

db.serialize(function() {
  db.run("PRAGMA KEY = 'secret'");
  db.run("PRAGMA CIPHER = 'aes-128-cbc'");

  db.run("DROP TABLE IF EXISTS lorem");
  db.run("CREATE TABLE lorem (info TEXT)");

  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
    console.log(row.id + ": " + row.info);
  });
});

db.close();
```

## Credits

- https://github.com/mapbox/node-sqlite3#building-for-sqlcipher
- https://coolaj86.com/articles/building-sqlcipher-for-node-js-on-raspberry-pi-2/
- https://github.com/delaballe/node-sqlcipher#usage
- https://github.com/liubiggun/node-sqlite3/commits/master
