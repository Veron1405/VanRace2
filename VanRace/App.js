import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import backgroundImage from './assets/background.png'; // Caminho para a imagem

export default function App() {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.backIcon}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Gasolina</Text>
        <TouchableOpacity>
          <Icon name="notifications" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 80,
    backgroundColor: '#EFEDED',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    borderBottomLeftRadius: 15, 
    borderBottomRightRadius: 15, 
  },
  backIcon: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  },
});
