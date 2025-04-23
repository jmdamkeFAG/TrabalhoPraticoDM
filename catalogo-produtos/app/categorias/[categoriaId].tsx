import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router, useLocalSearchParams, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { data } from '../../data/index';

const nomesCategorias: Record<string, string> = Object.fromEntries(
  data.categories.map((categoria) => [categoria.id.toString(), categoria.title])
);

export default function ProdutosDaCategoria() {
  const { categoriaId } = useLocalSearchParams();
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const filtrados = data.products.filter(
      (produto) => produto.idCategory === Number(categoriaId)
    );
    setProdutos(filtrados);
  }, [categoriaId]);

  return (
    <>
      <Stack.Screen
        options={{
          title: nomesCategorias[categoriaId as string] || 'Categoria',
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={produtos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => router.push(`/produto/${item.id}`)} style={styles.cartao}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.nome}>{item.title}</Text>
                <Text style={styles.descricao}>{item.description}</Text>
                <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#146f93'
  },
  cartao: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 12
  },
  informacao: {
    flex: 1
  },
  nome: {
    fontSize: 18,
    fontWeight: '600'
  },
  descricao: {
    fontSize: 14,
    color: '#555'
  },
  preco: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF'
  }
});
