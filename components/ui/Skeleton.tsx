import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';

type Props = PropsWithChildren<{
  /** Width of the skeleton */
  width?: number | string;
  /** Height of the skeleton */
  height?: number | string;
  /** Border radius */
  borderRadius?: number;
  /** Whether the skeleton should be circular */
  circle?: boolean;
  /** STYLES */
  style?: StyleProp<ViewStyle>;
}>;

const Skeleton: React.FC<Props> = ({
  width,
  height,
  borderRadius = 8,
  circle = false,
  style,
}): React.ReactNode => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [animatedValue]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.3, 0.7],
  });

  const circleStyle = circle && height && typeof height === 'number' 
    ? { borderRadius: height / 2 } 
    : {};

  return (
    <Animated.View
      style={[
        {
          backgroundColor: '#2a2a2a',
          borderRadius: circle ? undefined : borderRadius,
          width,
          height,
          opacity,
        },
        circleStyle,
        style,
      ]}
    />
  );
};

export default Skeleton;
