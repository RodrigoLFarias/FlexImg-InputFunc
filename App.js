import React, { useState } from 'react'; // Importa a biblioteca React e o hook useState
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'; // Importa componentes do React Native
import Footer from './components/Footer'; // Importa o componente Footer
import ImageGrid from './components/ImageGrid'; // Importa o componente ImageGrid

export default function App() {
  // Declaração de estados usando useState
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [senha, setSenha] = useState(''); // Estado para armazenar a senha
  const [mostrarMensagem, setMostrarMensagem] = useState(false); // Estado para controlar a visibilidade da mensagem de boas-vindas

  // Função chamada ao pressionar o botão "Enviar"
  const handleEnviar = () => {
    if (email && senha) { // Verifica se os campos de email e senha estão preenchidos
      setMostrarMensagem(true); // Define mostrarMensagem como true para exibir a mensagem de boas-vindas
    } else {
      alert('Por favor, preencha ambos os campos.'); // Exibe um alerta se algum campo estiver vazio
    }
  };

  return (
    <View style={styles.container}> {/* Container principal */}
      <ImageGrid /> {/* Componente de grid de imagens */}
      
      <TextInput
        style={styles.input}
        onChangeText={(texto) => setEmail(texto)} // Atualiza o estado do email com o texto digitado
        placeholder='Digite o LOGIN' // Placeholder do campo de email
        value={email} // Valor atual do campo de email
      />

      <TextInput
        style={styles.input}
        onChangeText={(texto) => setSenha(texto)} // Atualiza o estado da senha com o texto digitado
        placeholder='Digite a senha' // Placeholder do campo de senha
        secureTextEntry={true} // Torna o campo seguro para entrada de senha
        value={senha} // Valor atual do campo de senha
      />

      <Button
        title='Enviar' // Título do botão
        onPress={handleEnviar} // Função chamada ao pressionar o botão
      />

      {mostrarMensagem && ( // Exibe a mensagem de boas-vindas se mostrarMensagem for true
        <Text style={styles.mensagem}>
          Bem-vindo(a), {email}
        </Text>
      )}

      <Footer /> {/* Componente Footer */}

    </View>
  );
}

// Estilos definidos usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar toda a tela
    backgroundColor: '#fff', // Define a cor de fundo como branca
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    gap: 20, // Espaçamento entre os itens

  },

  input: {
    width: 200, // Largura do campo de texto
    borderWidth: 2, // Largura da borda
    borderColor: 'black', // Cor da borda
    borderRadius: 50, // Bordas arredondadas
    padding: 5, // Padding interno do campo
    textAlign: 'center', // Texto centralizado dentro do campo

  },

  mensagem: {
    marginTop: 20, // Margem acima da mensagem
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Fonte em negrito

  },
  
});
