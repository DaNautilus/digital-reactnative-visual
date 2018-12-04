# introduction

This module provides basic components aligned with the dormakaba styleguide. In addition there are a few view components which includes extended animations like login, list and detail view.

<div stlye="flex: 9;">
  <img src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/login.png" data-canonical-src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/login.png" width="200" />

  <img src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/list.png" data-canonical-src="https://raw.githubusercontent.com/dormakaba-digital/digital-reactnative-visual/master/__doc__/img/list.png" width="200" />
</div>

Find detailed documentation here: [https://dormakaba-digital.gitbook.io/reactnative-visual/](https://dormakaba-digital.gitbook.io/reactnative-visual/)

# start

```bash
npm start
npm run ios
```

# create dormakaba icons

Download latest icons from https://design.dormakaba.com

Place the needed files in ./assets/css and ./assets/fonts

- dormakabaIcons.css
- dormakabaIcons.ttf

Then run:

```bash
./node_modules/.bin/generate-icon ../digital-reactnative-visual/assets/css/dormakabaIcons.css --componentName=DokaIcon --fontFamily=dormakabaIcons --p .ico- > ./DokaIcon_new.js
```

export the glyphmap to be importable by the all icons story

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
