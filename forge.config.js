const { FusesPlugin } = require('@electron-forge/plugin-fuses');
const { FuseV1Options, FuseVersion } = require('@electron/fuses');
const path = require('path')

module.exports = {
  packagerConfig: {
    asar: true,
    icon: path.join(__dirname, 'src/assets/icons/icon')
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'WebApp',
        authors: 'Zhiyuan Xu',
        noMsi: true,
        target: 'nsis',
        setupExe: 'WebAppSetup-v1.0.0.exe',
        description: 'web网页启动器',
        setupIcon: path.join(__dirname, 'src/assets/icons/icon.ico'),
        icon: path.join(__dirname, 'src/assets/icons/icon.ico'),
        shortcuts:{
          createDesktopShortcut: true,
          createStartMenuShortcut: true,
        }
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        maintainer: 'Zhiyuan Xu',
        homepage: 'https://github.com/Zerodotgit/web-app',
        icon: path.join(__dirname, 'src/assets/icons/icon.png'),
        categories: ['Utility'],
        priority: 'optional',
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {
        maintainer: 'Zhiyuan Xu',
        homepage: 'https://github.com/Zerodotgit/web-app',
        icon: path.join(__dirname, 'src/assets/icons/icon.png'),
        categories: ['Utility'],
        priority: 'optional',
      },
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    // Fuses are used to enable/disable various Electron functionality
    // at package time, before code signing the application
    new FusesPlugin({
      version: FuseVersion.V1,
      [FuseV1Options.RunAsNode]: false,
      [FuseV1Options.EnableCookieEncryption]: true,
      [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
      [FuseV1Options.EnableNodeCliInspectArguments]: false,
      [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
      [FuseV1Options.OnlyLoadAppFromAsar]: true,
    }),
  ],
};
