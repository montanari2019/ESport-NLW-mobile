import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Testando aplicação</Text>
      <Button title='Teste'/>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
  title: string
}

function Button({ title }:ButtonProps){
  return(
    <TouchableOpacity style={styles.Button}>
      <Text>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title:{
    color: "#fff",
    fontSize: 22,
  },

  Button:{
    backgroundColor: "#6C5AEF",
    borderRadius: 20,
    width: "40%",
    justifyContent: 'center',
    alignItems:'center',
    marginTop: 10,
    height: 40,
    
  }
});
