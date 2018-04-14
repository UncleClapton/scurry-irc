/* eslint-disable import/no-extraneous-dependencies, global-require, no-console */

// Module Imports
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


// Component Constants
const isDev = process.env.NODE_ENV !== 'production';





// Component Variables
let mainWindow = null;




const loadExt = async () => {
  const installer = require('electron-devtools-installer');
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS',
  ];

  /* eslint-disable no-await-in-loop */
  for (const ext of extensions) {
    try {
      await installer.default(installer[ext], false);
    } catch (error) {
      console.log(`Failed to install extension: ${ext}. ${error.message}`);
    }
  }
  /* eslint-enable no-await-in-loop */
};

const createWindow = async () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    minWidth: 640,
    height: 800,
    minHeight: 480,
    frame: false,
    defaultFontFamily: 'sansSerif',
  });

  mainWindow.loadURL(isDev
    ? 'http://localhost:8080/'
    : url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    }));

  if (isDev) {
    await loadExt();
    mainWindow.webContents.openDevTools();
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', () => {
  createWindow();
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  app.quit();
});
