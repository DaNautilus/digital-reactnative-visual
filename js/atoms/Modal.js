import React from 'react';
import { Modal as RModal, View } from 'react-native';

const modalBackgroundStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  flex: 1,
  justifyContent: 'center',
  padding: 20,
};

export function Modal({ open, children, ...props }) {
  return (
    <RModal
      animationType="none"
      transparent
      visible={open}
      onRequestClose={() => {
        /* alert("Modal has been closed. By android back") */
      }}
      {...props}
    >
      <View style={modalBackgroundStyle}>{children}</View>
    </RModal>
  );
}
