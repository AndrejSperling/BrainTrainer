import {BrowserWindow, ipcMain} from "electron";
export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;

    private static onWindowAllClosed() {
        if (process.platform !== 'darwin')
            Main.application.quit();
    }

    private static onClose() {
        Main.mainWindow = null;
    }

    private static onReady() {
        console.log("onReady");
        Main.mainWindow = new Main.BrowserWindow({width: 800, height: 600});
        //Main.mainWindow.setMenu(null);
        Main.mainWindow.loadURL('file://' + __dirname + '/../index.html');
        Main.mainWindow.webContents.openDevTools();
        Main.mainWindow.on('closed', Main.onClose);
    }

    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {

        Main.BrowserWindow = browserWindow;
        Main.application = app;

        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
        Main.application.on('activate', () => {
            console.log("activate");
            // On OS X it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (Main.mainWindow === null) {
                Main.onReady();
            }
        });

        ipcMain.on('asynchronous-message', (event, arg) => {
            console.log(arg);
            event.sender.send('asynchronous-reply', 'async pong');
        });

        ipcMain.on('synchronous-message', (event, arg) => {
            console.log(arg);
            event.returnValue = 'sync pong';
        });
    }
}