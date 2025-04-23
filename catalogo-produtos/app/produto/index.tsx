import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { data } from '../../data';

export default function Produtos() {
  const router = useRouter();

  const abrirProduto = (id: number) => {
    router.push(`/produto/${id}`);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Produtos',
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={data.products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirProduto(item.id)} style={styles.cartao}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.containerInformacao}>
                <Text style={styles.titulos}>{item.title}</Text>
                <Text style={styles.descricoes}>{item.description}</Text>
                <Text style={styles.precos}>R${item.price.toFixed(2)}</Text>
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
    backgroundColor: '#f0f0f0',
  },
  cartao: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  containerInformacao: {
    flex: 1,
  },
  titulos: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  descricoes: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  precos: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007BFF',
  },
});
