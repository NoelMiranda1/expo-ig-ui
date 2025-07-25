import Image from '@/components/core/image';
import React from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const imageSize = (width - 2) / 3;

export type GridPost = {
  id: string;
  imageUrl: string;
  isMultiple?: boolean;
  isVideo?: boolean;
};

type Props = {
  posts: GridPost[];
  onPostPress?: (post: GridPost) => void;
};

const ProfileGrid: React.FC<Props> = ({ posts, onPostPress }): React.ReactNode => {
  const renderPost = ({ item }: { item: GridPost }) => (
    <Pressable
      style={styles.postContainer}
      onPress={() => onPostPress?.(item)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={styles.postImage}
        contentFit="cover"
      />
      {item.isMultiple && (
        <View style={styles.multipleIcon}>
          <Ionicons name="copy-outline" size={16} color="#fff" />
        </View>
      )}
      {item.isVideo && (
        <View style={styles.videoIcon}>
          <Ionicons name="play" size={16} color="#fff" />
        </View>
      )}
    </Pressable>
  );

  return (
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      numColumns={3}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  row: {
    gap: 1,
  },
  postContainer: {
    position: 'relative',
    width: imageSize,
    height: imageSize,
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  multipleIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  videoIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default ProfileGrid;