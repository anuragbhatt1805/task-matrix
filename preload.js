const { contextBridge } = require('electron');
// const { getUser } = require('./main.js');
const os = require('os');

 function getUser() {
  console.log(os.userInfo());
  return os?.userInfo()?.username || "Guest";
}

contextBridge.exposeInMainWorld('username', { getUser });
