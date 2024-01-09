module.exports = {
  testRunner: {
    $0: 'jest',
    args: {
      config: 'e2e/jest.config.js',
      _: ['e2e'],
    },
  },
  apps: {
    ios: {
      type: 'ios.app',
      binaryPath:
        './ios/build/Build/Products/Debug-iphonesimulator/DetoxRNExample.app',
      build:
        'xcodebuild -quiet -workspace ios/DetoxRNExample.xcworkspace -scheme DetoxRNExample -sdk iphonesimulator -derivedDataPath ios/build',
    },
    android: {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build:
        'yarn bundle_for_tests_android && cd android/app/src/main/res && git clean -dfx && cd ../../../.. && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 11',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_4_XL_API_30',
      },
    },
  },
  configurations: {
    'ios.debug': {
      device: 'simulator',
      app: 'ios',
      artifacts: {
        rootDir: './ios/artifacts',
      },
    },
    'android.debug': {
      device: 'emulator',
      app: 'android',
      artifacts: {
        rootDir: './android/artifacts',
      },
    },
  },
  behavior: {
    cleanup: {
      shutdownDevice: false,
    },
  },
};
