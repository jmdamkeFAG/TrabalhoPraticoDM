import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { data } from '../../data';

export default function Categorias() {
  const router = useRouter();

  const abrirCategoria = (id: number) => {
    router.push(`/categorias/${id}`);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Categorias',
        }}
      />
      <View style={styles.container}>
        <FlatList
          data={data.categories}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => abrirCategoria(item.id)} style={styles.cartao}>
              <Image source={{ uri: item.cover }} style={styles.image} />
              <Text style={styles.nome}>{item.title}</Text>
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
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff'
  },
  cartao: {
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 140,
    height: 140,
    marginRight: 12,
    borderRadius: 8
  },
  nome: {
    fontSize: 18,
    fontWeight: '500'
  }
});