import Image from '@/components/core/image';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ImageSource } from 'expo-image';
import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  source: ImageSource;
  onDoubleTap?: () => void;
};

const { width: screenWidth } = Dimensions.get('window');

const PostImage: React.FC<Props> = ({ source, onDoubleTap }): React.ReactNode => {
  const [showHeart, setShowHeart] = useState(false);
  const [imageError, setImageError] = useState(false);
  const lastTap = useRef<number | null>(null);

  const handleDoubleTap = useCallback(() => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    
    if (lastTap.current && now - lastTap.current < DOUBLE_PRESS_DELAY) {
      onDoubleTap?.();
      setShowHeart(true);
      setTimeout(() => setShowHeart(false), 1000);
    }
    lastTap.current = now;
  }, [onDoubleTap]);

  const handleImageError = useCallback(() => {
    console.error('Error loading image:', source);
    setImageError(true);
  }, [source]);

  return (
    <Pressable onPress={handleDoubleTap}>
      <View style={styles.container}>
        <Image 
          source={source} 
          style={styles.image}
          onError={handleImageError}
          // placeholder={require('@/assets/images/react-logo.png')}
          placeholderContentFit="cover"
          cachePolicy="disk"
        />
        
        {imageError && (
          <View style={styles.errorContainer}>
            <IconSymbol name="photo" size={50} color="#666" />
            <Text style={styles.errorText}>Image could not be loaded</Text>
          </View>
        )}
        
        {showHeart && !imageError && (
          <View style={styles.heartContainer}>
            <IconSymbol name="heart.fill" size={80} color="#fff" />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: screenWidth,
    position: 'relative',
    backgroundColor: '#000',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  heartContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  errorText: {
    color: '#666',
    marginTop: 10,
    fontSize: 14,
  },
});

export default React.memo(PostImage);