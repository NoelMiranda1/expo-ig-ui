import SearchBar from '@/components/search/SearchBar';
import SearchGrid from '@/components/search/SearchGrid';
import unsplashService from '@/services/unsplash';
import { UnsplashPhoto } from '@/types/unsplash';
import { useDebounce } from '@/hooks/useDebounce';
import React, { Suspense, use, useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Create promise outside component to avoid recreation
const initialPhotosPromise = unsplashService.getRandomPhotos(30);

function SearchContent({ searchQuery }: { searchQuery: string }) {
  const initialPhotos = use(initialPhotosPromise);
  const [photos, setPhotos] = useState<UnsplashPhoto[]>(initialPhotos);
  const [refreshing, setRefreshing] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const searchPhotos = useCallback(async (query: string) => {
    if (query.trim()) {
      setIsSearching(true);
      const searchResults = await unsplashService.searchPhotos(query, 1, 30);
      setPhotos(searchResults.results);
      setCurrentPage(1);
      setIsSearching(false);
    } else {
      // If search is cleared, show random photos again
      const randomPhotos = await unsplashService.getRandomPhotos(30);
      setPhotos(randomPhotos);
      setCurrentPage(1);
    }
  }, []);

  // Use the debounce hook
  const debouncedSearch = useDebounce(searchPhotos, 500);

  useEffect(() => {
    debouncedSearch(searchQuery);
  }, [searchQuery, debouncedSearch]);

  const handleRefresh = useCallback(async () => {
    setRefreshing(true);
    if (searchQuery.trim()) {
      const searchResults = await unsplashService.searchPhotos(searchQuery, 1, 30);
      setPhotos(searchResults.results);
      setCurrentPage(1);
    } else {
      const newPhotos = await unsplashService.getRandomPhotos(30);
      setPhotos(newPhotos);
    }
    setRefreshing(false);
  }, [searchQuery]);

  const handleLoadMore = useCallback(async () => {
    if (searchQuery.trim()) {
      const nextPage = currentPage + 1;
      const searchResults = await unsplashService.searchPhotos(searchQuery, nextPage, 15);
      if (searchResults.results.length > 0) {
        setPhotos(prev => [...prev, ...searchResults.results]);
        setCurrentPage(nextPage);
      }
    } else {
      const morePhotos = await unsplashService.getRandomPhotos(15);
      setPhotos(prev => [...prev, ...morePhotos]);
    }
  }, [searchQuery, currentPage]);

  return (
    <SearchGrid
      photos={photos}
      onRefresh={handleRefresh}
      onLoadMore={handleLoadMore}
      refreshing={refreshing}
      loading={isSearching}
    />
  );
}

export default function SearchScreen() {
  const { top } = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    // Here you could implement actual search functionality
  }, []);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <SearchBar onSearch={handleSearch} />
      <Suspense
        fallback={
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
          </View>
        }
      >
        <SearchContent searchQuery={searchQuery} />
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
