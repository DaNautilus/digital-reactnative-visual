# introduction

This module provides basic components aligned with the dormakaba styleguide. In addition there are a few view components which includes extended animations like login, list and detail view.

<div stlye="flex: 9;">
  <img src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/login.png" data-canonical-src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/login.png" width="200" />

  <img src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/list.png" data-canonical-src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/list.png" width="200" />
</div>

# start

```bash
npm start
npm run ios
```

# create dormakaba icons

```bash
./node_modules/.bin/generate-icon ../taibika-visual/src/assets/css/doka-iconfont.css --componentName=DokaIcon --fontFamily=Doka_Iconfont --p .doka- > ./DokaIcon_new.js
```

# run on device

## ios

a) set host in /storybook/storybook.js

`const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: false, host: '169.254.243.196' });`

b) start from xcode (being on same network as device)


## android

// check device connected
adb devices

// bridge ports
adb reverse tcp:8081 tcp:8081
adb reverse tcp:7007 tcp:7007

// start
npm run android

# upgrade

rename project to `digital_rn_visual` and move react-native to dependencies in package.json.

run `react-native-git-upgrade` in console an pray.

reverse renaming and dependency move in package.json.
