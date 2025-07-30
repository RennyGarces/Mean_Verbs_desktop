# Mean Verbs Desktop App

A simple Electron desktop wrapper for [mean-verbs.vercel.app](https://mean-verbs.vercel.app/).

## Features

- Cross-platform desktop app for Windows (Electron)
- Custom app icon
- Easy to build and run

## Screenshots

![App Screenshot](screenshot.png) <!-- Add your screenshot here if you want -->

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

## Project Structure

```
/ (project root)
  |-- src/              # App icon and static assets
  |-- main.js           # Electron main process
  |-- package.json      # Project config and scripts
  |-- .gitignore        # Git ignore rules
```

## Notes

- The app icon must be a `.ico` file with 256x256 size for best results.
- Windows may warn about "unknown publisher" unless you code-sign your installer.
- This project is for educational/demo purposes and wraps an external website.

---

Feel free to fork, modify, and share!
