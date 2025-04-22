const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        autoHideMenuBar: true,
        alwaysOnTop: false,
        x: 0,
        y: 0,
        webPreferences: {
            preload: path.resolve(__dirname, './ preload.js')
        }
    })
    ipcMain.on('api/send', (e, data) => {
        console.log(e.processId, data)
    })
    win.loadFile('pages/index.html')
    win.webContents.openDevTools();
}

// https://www.electronjs.org/zh/docs/latest/tutorial/tutorial-first-app
app.on('ready', () => {
    console.log(__dirname)
    ipcMain.handle('ping', () => 'pong')
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
