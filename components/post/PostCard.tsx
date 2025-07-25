import { Post } from '@/types/post';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PostActions from './PostActions';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import PostImage from './PostImage';

type Props = {
  item: Post;
};

const PostCard: React.FC<Props> = ({ item }): React.ReactNode => {
  // Debug: Ver qué datos estamos recibiendo
  console.log('PostCard item:', {
    image: item.image,
    avatar: item.avatar,
    name: item.name,
  });

  return (
    <View style={styles.container}>
      <PostHeader
        avatar={item.avatar}
        name={item.name}
        location={item.location}
      />
      
      <PostImage
        source={{ uri: item.image }}
        onDoubleTap={() => {
          // Handle double tap like
        }}
      />
      
      <PostActions
        liked={item.liked}
        saved={item.saved}
        onLikePress={() => {
          // Handle like
        }}
        onCommentPress={() => {
          // Handle comment
        }}
        onSharePress={() => {
          // Handle share
        }}
        onSavePress={() => {
          // Handle save
        }}
      />
      
      <PostFooter
        likes={item.likes}
        name={item.name}
        description={item.description}
        createdAt={item.createdAt}
        comments={item.comments}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginBottom: 10,
  },
});

export default React.memo(PostCard);