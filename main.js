const {app, BrowserWindow, globalShortcut} = require('electron')
const electronLocalshortcut = require('electron-localshortcut');

app.on("ready", () => {
  let win = new BrowserWindow({width:1200, height:800, 'minWidth':500, 'minHeight':400, frame:false})
  win.loadURL('file://' + __dirname + '/index.html');
  win.show();
})