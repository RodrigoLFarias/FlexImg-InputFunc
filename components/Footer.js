import { StyleSheet, Text, View } from 'react-native';


export default function Footer(){

    return(
        <View style={styles.container} >
            <Text style={styles.texto} >Este componente é um Footer</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      width: 350,
      height: 100,
      justifyContent: 'center',
      color: 'black'
     
    },
    texto: {
        color: 'white',
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        
        
    }
})