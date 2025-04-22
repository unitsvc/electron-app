console.log('preload', process.version)

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    ping: () => ipcRenderer.invoke('ping'),
    send: (data) => {
        ipcRenderer.send('api/send', data)
    }
})

ipcRenderer.on('api/send', (event, arg) => {
    console.log('api/send', arg);
});
