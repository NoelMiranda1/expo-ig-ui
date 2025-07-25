import { ImageSource } from 'expo-image';
import React, { PropsWithChildren, useCallback, useState } from 'react';
import {
  ImageStyle,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import Image from './image';

type Props = PropsWithChildren<{
  decoration?: boolean;
  label: string;
  variant?: number | 'xxxl' | 'xxl' | 'xl' | 'lg' | 'xxxs';
  source: ImageSource;

  /** EVENTS */
  onPress?: () => void;

  /** COMPONENTS */
  AvatarAccessory?: React.ReactNode;

  /** STYLES */
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  avatarStyle?: StyleProp<ImageStyle>;
}>;

export const AVATAR_SIZES = {
  xxxl: 48,
  xxl: 40,
  xl: 32,
  lg: 24,
  xxxs: 20,
};
const Avatar: React.FC<Props> = (props): React.ReactNode => {
  // Check if we have a valid image source
  const hasImage = props.source && (
    typeof props.source === 'string' ||
    typeof props.source === 'number' ||
    (typeof props.source === 'object' && props.source.uri)
  );
  const [hasError, setHasError] = useState(!hasImage);

  const {
    label,
    onPress,
    labelStyle,
    containerStyle,
    variant = 'xxxl',
    AvatarAccessory,
    avatarStyle,
    decoration = false,
    ...rest
  } = props;

  const onError = useCallback(() => {
    setHasError(true);
  }, []);

  const Component = onPress ? Pressable : View;

  const SIZE =
    typeof props.variant === 'number'
      ? props.variant
      : AVATAR_SIZES[props.variant as keyof typeof AVATAR_SIZES];

  return (
    <View style={containerStyle}>
      <Component
        onPress={onPress}
        style={[styles.decoration, !decoration && styles.decorationNone]}
      >
        <View
          style={[
            styles.content,
            {
              width: SIZE,
              height: SIZE,
            },
          ]}
        >
          {hasError ? (
            <Text
              style={[
                styles.title,
                {
                  fontSize: SIZE / (SIZE >= 50 ? 4 : 3),
                },
                labelStyle,
              ]}
            >
              {label}
            </Text>
          ) : (
            <Image
              {...rest}
              source={rest.source}
              onError={onError}
              style={[
                styles.avatar,
                {
                  width: SIZE,
                  height: SIZE,
                },
                avatarStyle,
              ]}
              contentFit="cover"
              cachePolicy="disk"
            />
          )}

          {AvatarAccessory}
        </View>
      </Component>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    overflow: 'hidden',
  },
  avatar: {
    borderRadius: 200,
  },
  decorationNone: { borderColor: 'transparent' },
  decoration: {
    padding: 1.5,
    borderWidth: 1.5,
    borderRadius: 200,
    borderColor: 'white',
  },
  title: {
    color: 'white',
    fontWeight: '600',
  },
  activityIndicator: {
    color: 'white',
  },
});

export default React.memo(Avatar);
