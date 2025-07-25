import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerShown: false,
        tabBarBackground: () => <View style={{ backgroundColor: 'black', flex: 1 }} />,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="search/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="create/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reels/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="play.square" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.circle" color={color} />,
        }}
      />
    </Tabs>
  );
}
