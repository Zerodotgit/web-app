![alt logo](src/assets/icons/icon.png)

# WebApp

[简体中文](doc/README_CN.md)

## Introduction

The WebApp is a web launcher developed based on the Electron framework, which achieves the desktop-like experience of web pages. For example, the backend management page of Home Assistant (referred to as HA hereafter) relies on the web. Normally, every time one manages HA, they have to open a browser and enter the address. However, with this application, one only needs to input the address of HA's backend management page to manage HA just like using regular management software. Additionally, it can keep running in the background.

## Installation

### Install in Releases

If your target platform is amd64 or macOS (Apple Silicon), go to the [Releases](https://github.com/Zerodotgit/web-app/releases) page to download the version for your corresponding system.

Now providing **Windwos(amd64)**, **macOS(Apple Silicon)**, **Linux(Debian amd64, RedHat amd64)** installation packages

### Compile and install

If you are using a platform that is not included in the above platforms, such as Raspberry Pi, Orange Pi, etc., you can still install it by compiling and installing it.

#### Pre-installation preparation:

Need to confirm that the software listed in the table below has been installed:

| Dependencies | Minimum Version |
| ------------ | --------------- |
| Node.js      | v20.16.9        |
| npm          | v10.8.1         |
| yarn（可选） | v1.22.22        |

If not installed, go to [Node.js](https://nodejs.org/zh-cn/download/package-manager) to download and install.

#### Step 1

Cloning repository

```bash
git clone https://github.com/Zerodotgit/web-app.git
```

#### Step 2

Install dependencies

```bash
cd web-app/
npm install
```

Compile

```bash
npm run make
# or
yarn make
```

## Develop

Execute:

```bash
git clone https://github.com/Zerodotgit/web-app.git && cd web-app
npm install
```