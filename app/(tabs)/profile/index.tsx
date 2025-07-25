import ProfileGrid, { GridPost } from '@/components/profile/ProfileGrid';
import ProfileHeader from '@/components/profile/ProfileHeader';
import { Highlight } from '@/components/profile/ProfileHighlight';
import ProfileHighlights from '@/components/profile/ProfileHighlights';
import ProfileTabs, { TabType } from '@/components/profile/ProfileTabs';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Datos de ejemplo basados en la captura
const profileData = {
  username: 'noel.miranda10',
  name: 'Noel Miranda',
  bio: 'Solamente sé feliz 🗣️',
  link: 'IA · Clarent, Mora',
  avatar: 'https://scontent-bog2-1.cdninstagram.com/v/t51.2885-19/467809921_473780598521904_762013482758777565_n.jpg?efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDY2LmMyIn0&_nc_ht=scontent-bog2-1.cdninstagram.com&_nc_cat=100&_nc_oc=Q6cZ2QEuRRlhYC8o36tc3E5YYt7JqqLWOElvBpYbvL9eO2G47-BvDdaXJpkyH2_T12Mr4DY&_nc_ohc=GZACVhthtEEQ7kNvwEdGZr_&_nc_gid=MjZgcgM6iPyQChjwQw-uFg&edm=ALGbJPMBAAAA&ccb=7-5&oh=00_AfTLslb8CGi9ltONfsk0gHuzqrgiAIacoal-Qn1JYit8WA&oe=6889D92A&_nc_sid=7d3ac5',
  postsCount: 2,
  followersCount: 274,
  followingCount: 325,
  hasStory: true,
};

const highlights: Highlight[] = [
  {
    id: '1',
    title: '😊',
    emoji: '😊',
  },
  {
    id: '2',
    title: '🎾',
    emoji: '🎾',
  },
  {
    id: '3',
    title: 'Coding📱',
    coverImage: 'https://picsum.photos/200/200?random=3',
  },
];

const posts: GridPost[] = Array.from({ length: 6 }, (_, i) => ({
  id: `post-${i}`,
  imageUrl: `https://picsum.photos/400/400?random=${i + 10}`,
  isMultiple: i === 1,
  isVideo: i === 3,
}));

export default function ProfileScreen() {
  const { top } = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<TabType>('grid');

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[2]}
      >
        <ProfileHeader
          {...profileData}
          isVerified={false}
        />
        
        <ProfileHighlights
          highlights={highlights}
          onNewPress={() => console.log('Nueva historia destacada')}
          onHighlightPress={(highlight) => console.log('Ver destacada:', highlight.title)}
        />
        
        <View style={styles.stickyHeader}>
          <ProfileTabs
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>
        
        <ProfileGrid
          posts={posts}
          onPostPress={(post) => console.log('Ver post:', post.id)}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  stickyHeader: {
    backgroundColor: '#000',
  },
});