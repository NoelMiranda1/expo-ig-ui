import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

export type TabType = 'grid' | 'reels' | 'tagged';

type Props = {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
};

const ProfileTabs: React.FC<Props> = ({ activeTab, onTabChange }): React.ReactNode => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.tab, activeTab === 'grid' && styles.activeTab]}
        onPress={() => onTabChange('grid')}
      >
        <MaterialIcons
          name="grid-on"
          size={24}
          color={activeTab === 'grid' ? '#fff' : '#8e8e8e'}
        />
      </Pressable>
      
      <Pressable
        style={[styles.tab, activeTab === 'reels' && styles.activeTab]}
        onPress={() => onTabChange('reels')}
      >
        <MaterialCommunityIcons
          name="play-box-outline"
          size={24}
          color={activeTab === 'reels' ? '#fff' : '#8e8e8e'}
        />
      </Pressable>
      
      <Pressable
        style={[styles.tab, activeTab === 'tagged' && styles.activeTab]}
        onPress={() => onTabChange('tagged')}
      >
        <MaterialCommunityIcons
          name="account-box-outline"
          size={24}
          color={activeTab === 'tagged' ? '#fff' : '#8e8e8e'}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderTopWidth: 0.5,
    borderTopColor: '#262626',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  activeTab: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
  },
});

export default ProfileTabs;