import Avatar from '@/components/core/avatar';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons';

type Props = {
  avatar: string;
  username: string;
  name: string;
  bio: string;
  link?: string;
  isVerified?: boolean;
  hasStory?: boolean;
  postsCount: number;
  followersCount: number;
  followingCount: number;
};

const ProfileHeader: React.FC<Props> = ({
  avatar,
  username,
  name,
  bio,
  link,
  isVerified = false,
  hasStory = false,
  postsCount,
  followersCount,
  followingCount,
}): React.ReactNode => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <View style={styles.container}>
      {/* Username and action buttons */}
      <View style={styles.topBar}>
        <View style={styles.usernameContainer}>
          <MaterialIcons name="lock" size={16} color="#fff" style={styles.lockIcon} />
          <Text style={styles.username}>{username}</Text>
          <MaterialIcons name="keyboard-arrow-down" size={16} color="#fff" style={styles.chevron} />
        </View>
        <View style={styles.actions}>
          <Pressable style={styles.actionButton}>
            <MaterialCommunityIcons name="at" size={24} color="#fff" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>9+</Text>
            </View>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Feather name="plus-square" size={24} color="#fff" />
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Ionicons name="menu" size={24} color="#fff" />
          </Pressable>
        </View>
      </View>

      {/* Profile info section */}
      <View style={styles.profileInfo}>
        {/* Avatar and stats */}
        <View style={styles.avatarStatsRow}>
          <View style={styles.avatarContainer}>
            <Avatar
              source={{ uri: avatar }}
              label={name.charAt(0)}
              variant={86}
              decoration={hasStory}
            />
            <Pressable style={styles.addStoryButton}>
              <Ionicons name="add-circle" size={24} color="#0095f6" />
            </Pressable>
          </View>
          
          <View style={styles.statsContainer}>
            <Pressable style={styles.statItem}>
              <Text style={styles.statNumber}>{formatNumber(postsCount)}</Text>
              <Text style={styles.statLabel}>publicaciones</Text>
            </Pressable>
            <Pressable style={styles.statItem}>
              <Text style={styles.statNumber}>{formatNumber(followersCount)}</Text>
              <Text style={styles.statLabel}>seguidores</Text>
            </Pressable>
            <Pressable style={styles.statItem}>
              <Text style={styles.statNumber}>{formatNumber(followingCount)}</Text>
              <Text style={styles.statLabel}>seguidos</Text>
            </Pressable>
          </View>
        </View>

        {/* Name and bio */}
        <View style={styles.bioSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>{bio}</Text>
          {link && (
            <View style={styles.linkContainer}>
              <Ionicons name="musical-note" size={14} color="#0095f6" />
              <Text style={styles.link}>{link}</Text>
            </View>
          )}
        </View>

        {/* Action buttons */}
        <View style={styles.buttons}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Editar</Text>
          </Pressable>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Compartir perfil</Text>
          </Pressable>
          <Pressable style={styles.secondaryButton}>
            <Ionicons name="person-add-outline" size={16} color="#fff" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  usernameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lockIcon: {
    marginRight: 4,
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  chevron: {
    marginLeft: 4,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  actionButton: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#ff3040',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '700',
  },
  profileInfo: {
    paddingHorizontal: 16,
  },
  avatarStatsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 28,
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#000',
    borderRadius: 12,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    color: '#fff',
    fontSize: 14,
  },
  bioSection: {
    marginBottom: 12,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  bio: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 18,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  link: {
    color: '#0095f6',
    fontSize: 14,
    marginLeft: 4,
  },
  buttons: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 12,
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileHeader;