// Importação de módulos necessários do React Native
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// Componente funcional que representa o grid de imagens
export default function ImageGrid() {
  return (
    <View style={styles.container}>

      {/* Contêiner para a imagem superior */}
      <View style={styles.topImageContainer}>
        <Image
          style={styles.topImage}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
      </View>

      {/* Contêiner para as imagens inferiores */}
      <View style={styles.bottomImagesContainer}>
        <Image
          style={styles.bottomImage}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
        <Image
          style={styles.bottomImage}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
        <Image
          style={styles.bottomImage}
          source={{ uri: "https://th.bing.com/th/id/OIP.uDMCW_1IznXiFGscE2Cy7gHaEK?rs=1&pid=ImgDetMain" }}
        />
      </View>
      
    </View>

  );
}

// Estilos utilizados pelos componentes acima
const styles = StyleSheet.create({
  // Estilo para o contêiner principal que engloba todas as imagens
  container: {
    alignItems: 'center', // Centraliza todos os elementos filhos horizontalmente
  },
  // Estilo para o contêiner da imagem superior
  topImageContainer: {
    marginBottom: 70, // Define a margem inferior para separar a imagem superior das imagens inferiores. Aumente esse valor para mover a imagem mais para cima
  },

  // Estilo para a imagem superior
  topImage: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem

  },

  // Estilo para o contêiner das imagens inferiores
  bottomImagesContainer: {
    flexDirection: 'row', // Define o layout em linha (horizontal) para as imagens inferiores
    justifyContent: 'space-evenly', // Distribui as imagens com espaçamento uniforme entre elas
    width: '100%', // Faz o contêiner ocupar toda a largura disponível
    paddingHorizontal: 30, // Adiciona espaçamento nas laterais do contêiner para não encostar nas bordas
    gap: 20, // Adiciona espaçamento uniforme entre as imagens

  },

  // Estilo para cada uma das imagens inferiores
  bottomImage: {
    width: 100, // Largura da imagem
    height: 100, // Altura da imagem

  },
});
