# Mean Verbs Desktop App

A simple Electron desktop wrapper for [mean-verbs.vercel.app](https://mean-verbs.vercel.app/).

## Screenshots

![App Screenshot](<img width="778" height="667" alt="image" src="https://github.com/user-attachments/assets/90228a59-344d-4e39-8e97-7eacf756d62f" />


## How to Build and Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/)

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app in development mode

```bash
npm start
```

### 3. Build a portable Windows app

```bash
npm run build
```

- Output: `mean_verbs-win32-x64` folder with a portable `.exe` file

### 4. Build a Windows installer (setup .exe)

```bash
npm run dist
```

- Output: `dist/Mean Verbs Setup 1.0.0.exe` (installer)

## Libraries Used

- [electron](https://www.electronjs.org/) - Main framework for building desktop apps with web tech
- [electron-packager](https://github.com/electron/electron-packager) - For portable builds
- [electron-builder](https://www.electron.build/) - For creating installers



