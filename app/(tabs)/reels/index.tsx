import { View, Text, StyleSheet } from 'react-native';

export default function ReelsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Reels</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
