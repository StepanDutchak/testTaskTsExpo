import React, { useRef } from "react";
import { View, Animated, Modal as RNModal, PanResponder } from "react-native";
import { styles } from "./styles";

interface InfoModalType {
  visible: boolean;
  onClose: (state: boolean) => void;
}

const InfoModal = ({ visible, onClose }: InfoModalType) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: (_, gestureState) =>
        Math.abs(gestureState.dy) > 2,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          translateY.setValue(gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          onClose(false);
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  return (
    <RNModal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => onClose(false)}
    >
      <Animated.View
        style={[styles.modalContent, { transform: [{ translateY }] }]}
        {...panResponder.panHandlers}
      >
        <View style={styles.header}>
          <View style={styles.handle} />
        </View>
      </Animated.View>
    </RNModal>
  );
};

export default InfoModal;
