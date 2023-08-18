import React from 'react';
import{ StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import topo from '../../../assets/topo.png';
import logo from '../../../assets/frutas/logo.png';

const width = Dimensions.get('screen').width;

export default function Carrinho (){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style= {estilos.titulo}>Detalhe do Carrinho</Text>
    <View style= {estilos.carrinho}>
        <Text style= {estilos.titulocarrinho}>Carrinho de Compras</Text>
        <View style=  {estilos.fazenda}>
        <Image style= {estilos.imagemFazenda} source={logo}/>
        <Text style= {estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente 
            da fazenda direto para sua cozinha
        </Text>
        <Text>R$ 40,00</Text>
       </View>
       </>
}


const estilos = StyleSheet.create({
      topo: {
          width: "100%",
          height: 578 / 768 * width
      },
      titulo: {
          fontSize: 24,
          fontWeight: "bold",
          lineHeight: 26,
          width: "100%",
          textAlign: "center",
          color: "white",
          position: "absolute",
          padding: 16

      },
         titulocarrinho:  {
             fontSize : 26,
             lineHeight: 42,
             color: "#464646"
             fontFamily: "MontserratBold"
         },

         carrinho: {
             paddingVertical: 8,
             paddingHorizontal: 16
         },

         nomeFazenda: {
           fontSize: 16,
           lineHeight: 26,
           marginLeft: 12,
           fontWeight: "bold"
          },

          imagemFazenda: {
              width: 32,
              height: 32
          },

          fazenda:{
              flexDirection: "row",
              paddingVertical: 12
          },
          descricao:{
              color: "A3A3A3",
              fontStyle: "italic"
          },

          preco: {
             fontSize: 26,
             lineHeight: 42,
             color: "#2A9F85",
             marginTop: 8

          }
    })