import React from 'react';
import { Pressable, StyleSheet, Dimensions, View } from 'react-native';
import Image from '@/components/core/image';
import { UnsplashPhoto } from '@/types/unsplash';
import { IconSymbol } from '@/components/ui/IconSymbol';

type Props = {
  photo: UnsplashPhoto;
  index: number;
  onPress?: (photo: UnsplashPhoto) => void;
};

const { width: screenWidth } = Dimensions.get('window');
const SPACING = 2;
const COLUMNS = 3;

const SearchGridItem: React.FC<Props> = ({ photo, index, onPress }): React.ReactNode => {
  // For simplicity, let's just create a regular grid first
  const itemWidth = (screenWidth - SPACING * (COLUMNS - 1)) / COLUMNS;
  const itemHeight = itemWidth;
  
  // Every 10th image is larger (2x2)
  const isLarge = index % 10 === 4;
  
  if (isLarge) {
    // This will be handled differently in a real implementation
    // For now, just show regular size
  }

  const isVideo = Math.random() > 0.8; // Randomly show video icon

  return (
    <Pressable
      onPress={() => onPress?.(photo)}
      style={[
        styles.container,
        {
          width: itemWidth - SPACING,
          height: itemHeight,
          marginLeft: SPACING / 2,
          marginRight: SPACING / 2,
          marginBottom: SPACING,
        },
      ]}
    >
      <Image
        source={{ uri: photo.urls.small }}
        style={styles.image}
        contentFit="cover"
        cachePolicy="disk"
      />
      
      {isVideo && (
        <View style={styles.videoIndicator}>
          <IconSymbol name="play.fill" size={16} color="#fff" />
        </View>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1a1a1a',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  videoIndicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default React.memo(SearchGridItem);