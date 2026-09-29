import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';
import TelaContador from './src/pages/TelaContador';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaContador></TelaContador>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: "#dadada",
    padding: 12,
    borderRadius: 8,
    marginTop: 26
  },
});
