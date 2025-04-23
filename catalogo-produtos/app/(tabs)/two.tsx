import { StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams, Stack, Link } from 'expo-router';
import { Text, View } from '@/components/Themed';
import { FlatList, Image, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import { data } from '@/data';

//Filtrando itens que possuem o atributo destaque == true
export default function TabTwoScreen() {
  const [destaquesProdutos, setProdutos] = useState([]);
  const [destaquesCategorias, setCategorias] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const filtradosProdutos = data.products.filter((produto) => produto.destaque);
    setProdutos(filtradosProdutos);

    const filtradosCategorias = data.categories.filter((categoria) => categoria.destaque);
    setCategorias(filtradosCategorias);
  }, []);

  const irParaCategorias = () => {
    router.push('/categorias');
  };

  const irParaProdutos = () => {
    router.push('/produto');
  };

  const irParaHome = () => {
    router.push('/');
  };


  return (
    <>
      <Stack.Screen
        options={{
          title: 'Destaques',
          headerRight: () => (
            <Link href="/categorias" asChild>
              <TouchableOpacity style={{ marginRight: 15 }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Voltar</Text>
              </TouchableOpacity>
            </Link>
          ),
        }}
      />

      <View style={styles.container}>
        <View style={styles.HeaderTitulos}>
          <Text style={styles.subtitulo}>Produtos em destaque:</Text>
          <TouchableOpacity style={styles.verTodasBotao} onPress={irParaProdutos}>
            <Text style={styles.verTodasTexto}>Ver todos</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={destaquesProdutos}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartao}>
              <Image source={{ uri: item.image }} style={styles.imagem} />
              <Text style={styles.nome}>{item.title}</Text>
              <Text style={styles.preco}>R$ {item.price.toFixed(2)}</Text>
              <Link href={`/produto/${item.id}`} asChild>
                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.textoBotao}>Ver Produto</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        />

        <View style={styles.HeaderTitulos}>
          <Text style={styles.subtitulo}>Categorias em destaque:</Text>
          <TouchableOpacity style={styles.verTodasBotao} onPress={irParaCategorias}>
            <Text style={styles.verTodasTexto}>Ver todas</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={destaquesCategorias}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.cartao}>
              <Image source={{ uri: item.cover }} style={styles.imagem} />
              <Text style={styles.nome}>{item.title}</Text>
              <Link href={`/categorias/${item.id}`} asChild>
                <TouchableOpacity style={styles.botao}>
                  <Text style={styles.textoBotao}>Ver produtos</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        />
      </View>
      <View style={styles.HeaderBotaoHome}>
        <TouchableOpacity style={styles.voltarHomeBotao} onPress={irParaHome}>
          <Text style={styles.verTodasTexto}>Voltar para Home</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#196f93',
    flex: 1,
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ffffff'
  },
  cartao: {
    width: 150,
    height: 250,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    padding: 10,
    alignItems: 'center',
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#E09928',
  },
  preco: {
    fontSize: 14,
    color: '#007bff',
    marginVertical: 6,
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  HeaderTitulos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#146f93',
  },
  verTodasBotao: {
    backgroundColor: '#007bff',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  verTodasTexto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  HeaderBotaoHome: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
    alignItems: 'baseline',
    marginBottom: 20,
    backgroundColor: '#146f93',
  },
  voltarHomeBotao: {
    backgroundColor: '#007bff',
    paddingHorizontal: 50,
    paddingVertical: 4,
    borderRadius: 8,
  },
});
