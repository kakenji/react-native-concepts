import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome5, Feather } from '@expo/vector-icons'

const ITEMS_MENU = [
  { icon: 'user', text: 'Meu Perfil' },
  { icon: 'settings', text: 'Configurações' },
  { icon: 'bell', text: 'Notificações' },
  { icon: 'log-out', text: 'Sair' },
];

export default function App() {
  return (
    <View style={styles.container}>
      {
        ITEMS_MENU.map((item) => (<ItemMenu 
          icon={item.icon} 
          text={item.text}
          key={item.text}
          />
        ))
      }
      <StatusBar style="auto" />
      <Image source={{uri:"https://s2-ge.glbimg.com/ttR-u9V2i9cEZDgHztncL6-BnnY=/0x0:3000x2000/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2026/j/z/hHk2dmQlO1DASLajnHkQ/agif26081616181960.jpg"}}
        style={styles.image}/>
      
      <Image 
        source={require('.src/assets/img1')}>
          style={styles.image}
      </Image>
    </View>
  );
}


function ItemMenu({ icon, text }){
  return(
    <TouchableOpacity style={styles.linha}>
      <View style={styles.circularIcon}>
        <Feather name={icon} size={20} color='#999' />
      </View>
      <Text style={styles.textoLinha}>{text}</Text>
      <Feather name="chevron-right" size={20} color="#999" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 60,
    paddingHorizontal: 16
  },
  linha: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#111'
  },
  circularIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#118AB2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textoLinha: {
    fontSize: 16,
    flex: 1
  },
  image: {
    height: 300,
    width: 300
  }
});
