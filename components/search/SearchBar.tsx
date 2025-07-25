import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

type Props = {
  onSearch?: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
};

const SearchBar: React.FC<Props> = ({
  onSearch,
  onFocus,
  onBlur,
  placeholder = 'Search',
}): React.ReactNode => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleChangeText = (text: string) => {
    setQuery(text);
    onSearch?.(text);
  };

  const handleClear = () => {
    setQuery('');
    onSearch?.('');
  };

  return (
    <View style={styles.container}>
      <View style={[styles.searchBar, isFocused && styles.searchBarFocused]}>
        <IconSymbol name="magnifyingglass" size={16} color="#8e8e8e" />
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8e8e8e"
          value={query}
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="search"
        />
        {query.length > 0 && (
          <Pressable onPress={handleClear} style={styles.clearButton}>
            <IconSymbol name="xmark.circle.fill" size={16} color="#8e8e8e" />
          </Pressable>
        )}
      </View>
      {isFocused && (
        <Pressable onPress={handleBlur} style={styles.cancelButton}>
          <Text style={styles.cancelText}>Cancel</Text>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#000',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#262626',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 36,
  },
  searchBarFocused: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
    paddingVertical: 0,
  },
  clearButton: {
    padding: 4,
  },
  cancelButton: {
    paddingHorizontal: 4,
  },
  cancelText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default React.memo(SearchBar);