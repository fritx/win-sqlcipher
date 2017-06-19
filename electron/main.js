let { app, BrowserWindow } = require('electron')
let { join } = require('path')

let win

app.on('ready', () => {
  let url = 'file://' + join(__dirname, 'main.html')
  win = new BrowserWindow()
  win.loadURL(url)

  win.openDevTools()
})
