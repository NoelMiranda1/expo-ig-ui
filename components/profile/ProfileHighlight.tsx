import Image from '@/components/core/image';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export type Highlight = {
  id: string;
  title: string;
  coverImage?: string;
  emoji?: string;
};

type Props = {
  highlight: Highlight;
  onPress?: () => void;
};

const ProfileHighlight: React.FC<Props> = ({ highlight, onPress }): React.ReactNode => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.circle}>
        {highlight.coverImage ? (
          <Image
            source={{ uri: highlight.coverImage }}
            style={styles.image}
            contentFit="cover"
          />
        ) : (
          <Text style={styles.emoji}>{highlight.emoji || '🎵'}</Text>
        )}
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {highlight.title}
      </Text>
    </Pressable>
  );
};

type NewHighlightProps = {
  onPress?: () => void;
};

export const NewHighlight: React.FC<NewHighlightProps> = ({ onPress }): React.ReactNode => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.circle, styles.newCircle]}>
        <Ionicons name="add" size={28} color="#fff" />
      </View>
      <Text style={styles.title}>Nueva</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
    width: 64,
  },
  circle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#333',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  newCircle: {
    borderStyle: 'dashed',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emoji: {
    fontSize: 28,
  },
  title: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ProfileHighlight;