import PostCard from '@/components/post/PostList';
import PostListSkeleton from '@/components/post/PostListSkeleton';
import { useHeader } from '@/hooks/useHeader';
import { Suspense } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



export default function Home() {
  const {top} = useSafeAreaInsets()
   useHeader({
    title: '',
    headerShown:false
   })
  return (
    <View style={[styles.container, {paddingTop:top}]}>
      <Suspense
        fallback={
          <PostListSkeleton count={5} />
        }
      >
        <PostCard/>
      </Suspense>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
});
