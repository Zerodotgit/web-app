const {app, BrowserWindow} = require('electron')
const path = require('path')

//创建窗口
function createWindow(){
    const mainWindow = new BrowserWindow({
        width:300,
        height:400,
        autoHideMenuBar: true,

        // 预加载
        webPreferences: {
            preload: path.join(__dirname, 'pages', 'js', 'index.js'),
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.loadFile('./src/pages/index.html')
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})