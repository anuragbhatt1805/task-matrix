const { app, BrowserWindow } = require('electron');
const path = require('path');
// const os = require('os');


// module.exports = function getUser() {
//   return os.userInfo().username || process.env.USERNAME;
//   // return "Anurag Bhatt 1235";
// }

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 950,
    menuBarVisible: false,
    autoHideMenuBar: true,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    resizable: false,
    title: 'Electron WBT App',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      javascript: true,
    },
  });

  win.loadURL('http://localhost:3000');
  // win.loadFile(path.join(__dirname, 'build', 'index.html'))
  win.webContents.openDevTools();
}

app.name = 'Task Matrix';

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
  // contextBridge.exposeInMainWorld('username', { getUser });
});
