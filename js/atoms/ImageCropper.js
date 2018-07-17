import React, { cloneElement } from 'react';

import ImagePicker from 'react-native-image-crop-picker';
import { Alert, View } from 'react-native';

export default function ImageCropper({
  width = 400,
  height = 400,
  onChange = () => {},
  children,
  style,
  disabled,
}) {
  const handlePress = () => {
    if (disabled) return;
    Alert.alert(
      'Take or pick an picture:',
      'Do you want to take a new picture using your camera?',
      [
        { text: 'Pick Image', onPress: () => openPicker() },
        { text: 'Take photo', onPress: () => openCamera() },
      ]
    );
  };

  const openPicker = () => {
    ImagePicker.openPicker({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      onChange(image);
    });
  };

  const openCamera = () => {
    ImagePicker.openCamera({
      width,
      height,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      onChange(image);
    });
  };

  return <View style={style}>{cloneElement(children, { onPress: handlePress })}</View>;
}
