import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams, Stack } from 'expo-router';
import Logo from '../assets/images/NexoProdutosLogo.png';

export default function HomeScreen() {
  const router = useRouter();

  const irParaCategorias = () => {
    router.push('/categorias');
  };

  const irParaSobre = () => {
    router.push('/sobre');
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'NexoProdutos',
        }}
      />
      {<View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo ao NexoProdutos!</Text>

        <Image
          source={Logo}
          style={styles.image}
        />

        <Text style={styles.subtitlo}>
          Explore nossas categorias e descubra diversos produtos.
        </Text>

        <View style={styles.headerBotao}>
          <TouchableOpacity style={styles.botao} onPress={irParaCategorias}>
            <Text style={styles.botaoTexto}>Ver Categorias</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.headerBotao}>
          <TouchableOpacity style={styles.botao} onPress={irParaSobre}>
            <Text style={styles.botaoTexto}>Sobre os Desenvolvedores</Text>
          </TouchableOpacity>
        </View>
      </View>}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#146f93',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 60,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: "#fff"
  },
  image: {
    width: 300,
    height: 150,
    marginBottom: 30,
  },
  subtitlo: {
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
    marginBottom: 30,
  },
  headerBotao: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    marginBottom: 20,
    backgroundColor: '#146f93',
  },
  botao: {
    backgroundColor: '#007bff',
    paddingHorizontal: 50,
    paddingVertical: 4,
    borderRadius: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
