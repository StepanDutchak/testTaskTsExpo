import React, { useCallback, useRef } from "react";
import {
  Pressable,
  Animated,
  ActivityIndicator,
  LayoutChangeEvent,
} from "react-native";
import styles from "./styles";

export type AnimatedPressProp = {
  disabled?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
  onLayout?: (l: LayoutChangeEvent) => void;
  style?: object;
  containerStyle?: object;
  isLoading?: boolean;
};

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

const AnimatedPress = ({
  children,
  style,
  containerStyle,
  disabled,
  isLoading,
  onLayout,
  onPress,
}: AnimatedPressProp) => {
  const animScale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: DEFAULT_SCALE,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  const pressOut = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: 1,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={containerStyle}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}
    >
      <Animated.View
        onLayout={onLayout}
        style={[
          style,
          isLoading && styles.loadingProcess,
          { transform: [{ scale: animScale }] },
        ]}
      >
        {isLoading ? <ActivityIndicator /> : children}
      </Animated.View>
    </Pressable>
  );
};

export default React.memo(AnimatedPress);
