import React, { useCallback, useState } from 'react';
import { 
  FlatList, 
  StyleSheet, 
  Dimensions, 
  View, 
  ActivityIndicator,
  RefreshControl,
  Text,
} from 'react-native';
import { UnsplashPhoto } from '@/types/unsplash';
import SearchGridItem from './SearchGridItem';
import { IconSymbol } from '@/components/ui/IconSymbol';

type Props = {
  photos: UnsplashPhoto[];
  loading?: boolean;
  onRefresh?: () => void;
  onLoadMore?: () => void;
  refreshing?: boolean;
};

const { width: screenWidth } = Dimensions.get('window');
const SPACING = 2;
const COLUMNS = 3;

const SearchGrid: React.FC<Props> = ({ 
  photos, 
  loading = false,
  onRefresh,
  onLoadMore,
  refreshing = false,
}): React.ReactNode => {
  const [loadingMore, setLoadingMore] = useState(false);

  const renderItem = useCallback(({ item, index }: { item: UnsplashPhoto; index: number }) => {
    return <SearchGridItem photo={item} index={index} />;
  }, []);

  const keyExtractor = useCallback((item: UnsplashPhoto) => item.id, []);

  const handleLoadMore = useCallback(() => {
    if (!loadingMore && onLoadMore) {
      setLoadingMore(true);
      onLoadMore();
      setTimeout(() => setLoadingMore(false), 1000);
    }
  }, [loadingMore, onLoadMore]);

  const renderFooter = useCallback(() => {
    if (!loadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#fff" />
      </View>
    );
  }, [loadingMore]);

  const renderEmpty = useCallback(() => {
    if (loading) {
      return (
        <View style={styles.emptyContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.searchingText}>Searching...</Text>
        </View>
      );
    }
    return (
      <View style={styles.emptyContainer}>
        <IconSymbol name="photo.on.rectangle" size={64} color="#666" />
        <Text style={styles.emptyText}>No images found</Text>
        <Text style={styles.emptySubtext}>Try searching for something else</Text>
      </View>
    );
  }, [loading]);

  // Custom layout for Instagram-like grid
  const getItemLayout = useCallback((data: any, index: number) => {
    const itemSize = (screenWidth - SPACING * (COLUMNS - 1)) / COLUMNS;
    const rowIndex = Math.floor(index / COLUMNS);
    const columnIndex = index % COLUMNS;
    const isLargeRow = rowIndex % 3 === 2;
    
    let height = itemSize;
    if (isLargeRow && columnIndex === 2) {
      height = itemSize * 2 + SPACING;
    }
    
    return {
      length: height,
      offset: rowIndex * (itemSize + SPACING),
      index,
    };
  }, []);

  return (
    <FlatList
      data={photos}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={COLUMNS}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      columnWrapperStyle={COLUMNS > 1 ? styles.row : undefined}
      ListEmptyComponent={renderEmpty}
      ListFooterComponent={renderFooter}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#fff"
          />
        ) : undefined
      }
      removeClippedSubviews={true}
      maxToRenderPerBatch={15}
      windowSize={10}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  row: {
    justifyContent: 'flex-start',
  },
  footer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
    marginTop: 16,
  },
  emptySubtext: {
    color: '#666',
    fontSize: 14,
    marginTop: 4,
  },
  searchingText: {
    color: '#666',
    fontSize: 16,
    marginTop: 12,
  },
});

export default React.memo(SearchGrid);