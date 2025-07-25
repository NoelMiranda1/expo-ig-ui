import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import PostCardSkeleton from './PostCardSkeleton';

type Props = {
  count?: number;
};

const PostListSkeleton: React.FC<Props> = ({ count = 3 }): React.ReactNode => {
  const skeletonData = Array.from({ length: count }, (_, index) => ({ id: index.toString() }));

  return (
    <FlatList
      data={skeletonData}
      renderItem={() => <PostCardSkeleton />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
  },
});

export default React.memo(PostListSkeleton);