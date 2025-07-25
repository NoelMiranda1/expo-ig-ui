import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

type Props = {
  liked: boolean;
  saved: boolean;
  onLikePress?: () => void;
  onCommentPress?: () => void;
  onSharePress?: () => void;
  onSavePress?: () => void;
};

const PostActions: React.FC<Props> = ({
  liked,
  saved,
  onLikePress,
  onCommentPress,
  onSharePress,
  onSavePress,
}): React.ReactNode => {
  return (
    <View style={styles.container}>
      <View style={styles.leftActions}>
        <Pressable onPress={onLikePress} style={styles.actionButton}>
          <IconSymbol
            name={liked ? 'heart.fill' : 'heart'}
            size={25}
            color={liked ? '#ff3040' : '#fff'}
          />
        </Pressable>
        
        <Pressable onPress={onCommentPress} style={styles.actionButton}>
          <IconSymbol name="bubble.left" size={25} color="#fff" />
        </Pressable>
        
        <Pressable onPress={onSharePress} style={styles.actionButton}>
          <IconSymbol name="paperplane" size={25} color="#fff" />
        </Pressable>
      </View>
      
      <Pressable onPress={onSavePress} style={styles.actionButton}>
        <IconSymbol
          name={saved ? 'bookmark.fill' : 'bookmark'}
          size={25}
          color="#fff"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginRight: 16,
  },
});

export default React.memo(PostActions);