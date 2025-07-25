import Avatar from '@/components/core/avatar';
import { IconSymbol } from '@/components/ui/IconSymbol';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  avatar: string;
  name: string;
  location?: string;
  onMorePress?: () => void;
};

const PostHeader: React.FC<Props> = ({
  avatar,
  name,
  location,
  onMorePress,
}): React.ReactNode => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContent}>
        <Avatar
          source={{uri:avatar}}
          label={name[0].toUpperCase()}
          variant="xl"
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          {location && <Text style={styles.location}>{location}</Text>}
        </View>
      </View>
      
      <Pressable onPress={onMorePress} style={styles.moreButton}>
        <IconSymbol name="ellipsis" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  location: {
    color: '#fff',
    fontSize: 12,
    marginTop: 2,
  },
  moreButton: {
    padding: 4,
  },
});

export default React.memo(PostHeader);