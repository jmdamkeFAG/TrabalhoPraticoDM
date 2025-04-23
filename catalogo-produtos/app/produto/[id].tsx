import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { data } from '../../data/index';

export default function DetalhesProduto() {
  const { id } = useLocalSearchParams();
  const produtoId = Number(id);
  const produto = data.products.find((p) => p.id === produtoId);

  if (!produto) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.naoEncontrado}>Produto não existe.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: produto.title,
        }}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.cartao}>
          <Image source={{ uri: produto.image }} style={styles.imagem} />
          <Text style={styles.nome}>{produto.title}</Text>
          <Text style={styles.descricao}>{produto.description}</Text>
          <Text style={styles.preco}>R$ {produto.price.toFixed(2)}</Text>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.botaoTexto}>Comprar agora</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e82ad',
    padding: 20,
  },
  cartao: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
  },
  preco: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#e19d32',
    marginBottom: 20,
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  naoEncontrado: {
    fontSize: 18,
    color: 'gray',
  },
  botao: {
    backgroundColor: '#28A745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  }
});
