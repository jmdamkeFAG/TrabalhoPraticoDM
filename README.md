# TtrabalhoPraticoDM
 Trabalho pratico da materia de Desenvolvimento Mobile.

 Alunos: Jean Matheus e Lucas Matheus

 utilizado nesse projeto:
 
 React Native
 Expo
 Expo Router
 StyleSheet
 E componentes como UseState e UseEffect

 Objetivo foi desenvolver um aplicativo de produtos com categorias e destaques.

Telas:
Tela inicial de boas vindas
Tela de destaques
Tela de Categorias
Tela de Produtos
Tela de produtos por categoria
Tela de detalhes do produto
Tela de informacoes sobre os desenvolvedores

 Os dados (Produtos e categorias) estao armazenados no arquivo index.ts (Pasta /data), onde foi feita a modificacao que consiste em adicionar um atributo aos produtos e categorias = destaque (booleano)

 Na tela de destaques (two.tsx) Os produtos e categorias sao filtrados para exibir somente aqueles
 que possuem o destaque == true.

 Dessa forma nao e necessario alterar nada na tela. apenas definir no proprio produto ou categoria, 
 se esta em destaque ou nao.

 Nas demais telas, os dados do arquivo index.ts sao manipulados de forma dinamica, com filtro por categoria (se for o caso) e exibicao das imagens. Nao é necessaria nenhuma alteracao no codigo para adicionar ou remover produtos ou categorias.



