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

a) set host in /storybook/storybook.js

`const StorybookUI = getStorybookUI({ port: 7007, onDeviceUI: false, host: '169.254.243.196' });`

b) start from xcode (being on same network as device)
