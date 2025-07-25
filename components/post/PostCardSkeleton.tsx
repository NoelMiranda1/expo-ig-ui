import Skeleton from '@/components/ui/Skeleton';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const PostCardSkeleton: React.FC = (): React.ReactNode => {
  return (
    <View style={styles.container}>
      {/* Header skeleton */}
      <View style={styles.header}>
        <Skeleton width={32} height={32} circle />
        <View style={styles.headerText}>
          <Skeleton width={120} height={14} borderRadius={4} />
          <Skeleton width={80} height={12} borderRadius={4} style={{ marginTop: 4 }} />
        </View>
        <Skeleton width={20} height={20} borderRadius={4} />
      </View>
      
      {/* Image skeleton */}
      <Skeleton 
        width="100%" 
        height={375} 
        borderRadius={0}
        style={styles.image}
      />
      
      {/* Actions skeleton */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <Skeleton width={24} height={24} borderRadius={4} />
          <Skeleton width={24} height={24} borderRadius={4} style={{ marginLeft: 16 }} />
          <Skeleton width={24} height={24} borderRadius={4} style={{ marginLeft: 16 }} />
        </View>
        <Skeleton width={24} height={24} borderRadius={4} />
      </View>
      
      {/* Footer skeleton */}
      <View style={styles.footer}>
        <Skeleton width={100} height={16} borderRadius={4} />
        <View style={styles.description}>
          <Skeleton width="100%" height={14} borderRadius={4} />
          <Skeleton width="80%" height={14} borderRadius={4} style={{ marginTop: 4 }} />
        </View>
        <Skeleton width={60} height={12} borderRadius={4} style={{ marginTop: 8 }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    marginBottom: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  image: {
    width: '100%',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  description: {
    marginTop: 8,
  },
});

export default React.memo(PostCardSkeleton);