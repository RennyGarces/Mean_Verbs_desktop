const { app, BrowserWindow } = require("electron");

const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 900,
    icon: path.join(__dirname, "..", "src", "favicon.ico"),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });
  win.loadURL("https://mean-verbs.vercel.app/");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
