import postService from '@/services/post';
import { Post } from '@/types/post';
import React, { use, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OptimizedFlatList from '../optimized-flatlist';
import PostCard from './PostCard';

const postsPromise = postService.getAllPosts();
const PostList = () => {
  const posts = use(postsPromise);

  const separator = useCallback(() => <View style={[{ height: 10 }]} />, []);

  const keyExtractor = useCallback((item: Post) => String(item.id), []);

  return (
    <OptimizedFlatList
      data={posts}
      renderItem={({item}) => <PostCard item={item} />}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={separator}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View>
          <Text>No posts found</Text>
        </View>
      }
    />
  );
};

export default PostList;

const styles = StyleSheet.create({});
