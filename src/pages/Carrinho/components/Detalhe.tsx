import React from "react"
import {Text, Image, View, StyleSheet} from 'react-native';

import logo from '../../../../assets/frutas/logo.png';


export default function Detalhe() {
    return<>

         <Text style= {estilos.titulocarrinho}>Carrinho de Compras</Text>
        <View style=  {estilos.fazenda}>
        <Image style= {estilos.imagemFazenda} source={logo}/>
        <Text style= {estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
        </View>
        <Text style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente 
            da fazenda direto para sua cozinha
        </Text>
        <Text>R$ 40,00</Text>

</>

}

const estilos = StyleSheet.create({
    titulocarrinho:  {
        fontSize : 26,
        lineHeight: 42,
        color: "#7D8758"
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
         color: "#59636E",
         fontStyle: "italic"
     },

     preco: {
        fontSize: 26,
        lineHeight: 42,
        color: "#70EB45",
        marginTop: 8

     }
})