const { join } = require('path');
const { config } = require('./wdio.shared.conf');

// ============
// Specs
// ============

config.port = 4722;
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        platformName: "Android",
        platformVersion: "10",
        deviceName: "emulator-5556",
        maxInstances: 1,
        //app: "C:/POC/Sample/app/Android-NativeDemoApp-0.2.1.apk",
        //  appPackage: "com.google.android.calculator",
        //  appActivity: "com.android.calculator2.Calculator",
        appPackage: "com.wdiodemoapp",
        appActivity: "com.wdiodemoapp.MainActivity",
        //browserName: 'chrome',
        automationName: "UiAutomator2",
        chromedriverExecutable: "./drivers/chromedriver.exe"
    },
];

exports.config = config;
