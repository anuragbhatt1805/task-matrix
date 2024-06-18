const { contextBridge, Notification } = require('electron');
const os = require('os');

 function getUser() {   
  return os?.userInfo()?.username || "Guest";
}

function NotifyUser(options) {
  console.log(options);
  new Notification({ title:options.title, body: options.message }).show();
  return "Notified";
}

contextBridge.exposeInMainWorld('username', { getUser });
contextBridge.exposeInMainWorld('notification', { NotifyUser });
