import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ProfileHighlight, { Highlight, NewHighlight } from './ProfileHighlight';

type Props = {
  highlights: Highlight[];
  onNewPress?: () => void;
  onHighlightPress?: (highlight: Highlight) => void;
};

const ProfileHighlights: React.FC<Props> = ({
  highlights,
  onNewPress,
  onHighlightPress,
}): React.ReactNode => {
  const renderItem = ({ item }: { item: Highlight | 'new' }) => {
    if (item === 'new') {
      return <NewHighlight onPress={onNewPress} />;
    }
    return (
      <ProfileHighlight
        highlight={item}
        onPress={() => onHighlightPress?.(item)}
      />
    );
  };

  const data: (Highlight | 'new')[] = ['new', ...highlights];

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => (item === 'new' ? 'new' : item.id)}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});

export default ProfileHighlights;