# WebApp

## 介绍

WebApp是基于electron框架开发的web启动器，WebApp实现了网页的桌面化，例如：Home Assistant（后简称HA）的后台管理页面依赖于web，每次管理HA时总是需要打开浏览器再输入地址，但通过这个应用程序，仅需输入HA的后台管理页面的地址，即可像使用普通管理软件一样管理HA，并还能保持后台运行。

## 安装

### 在Releases安装

如果你的目标平台是amd64或者macOS（Apple Slicon），前往[Releases](https://github.com/Zerodotgit/web-app/releases)页面下载你对应系统的版本。

现提供**Windwos(amd64)**,**macOS(Apple Silicon)**，**Linux(Debian amd64,RedHat amd64)**安装包

### 编译安装

如果你使用平台没有被包含在上述平台中，比如：Raspberry Pi，Orange Pi等，你仍可以通过编译安装的方式进行安装。

#### 安装前准备：

需确认已经安装下表所列出的软件：

| 依赖软件     | 最低版本 |
| ------------ | -------- |
| Node.js      | v20.16.9 |
| npm          | v10.8.1  |
| yarn（可选） | v1.22.22 |

若没有安装，前往[Node.js](https://nodejs.org/zh-cn/download/package-manager)下载并安装

#### Step 1

克隆仓库

```bash
git clone https://github.com/Zerodotgit/web-app.git
```

#### Step 2

安装依赖

```bash
cd web-app/
npm install
```

编译

```bash
npm run make
# 或者
yarn make
```

## 开发

执行：

```bash
git clone https://github.com/Zerodotgit/web-app.git && cd web-app
npm install
```