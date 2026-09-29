import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const fonte = 'https://www.gov.br/pt-br/midias-agorabrasil/video-fundo.mp4'

export default function App() {
  const playerConfig = useVideoPlayer(fonte, (p) => {
    // p.loop = true;
    // p.play();
  })

  return (
    <View style={styles.container}>
      <VideoView 
        style={{ width: '80%', height: '300'}}
        player={playerConfig}
        contentFit='contain'
        nativeControls={false}
      />
      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          playerConfig.playing ? playerConfig.pause() : playerConfig.play()
        }}
      >
        <Text>{playerConfig.playing? "Pausar": "Tocar"}</Text>
      </TouchableOpacity>
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
