import React from "react"
import {Text, Image, View, StyleSheet} from 'react-native';

import logo from '../../../../assets/frutas/logo.png';

type Props ={
    nome: string,
    nomeFazenda: string,
    descricao:string,
    preco:string
}

export default function Detalhe({nome, nomeFazenda, descricao, preco: Props}) {
    return<>

            <Text style= {estilos.titulocarrinho}>{nome}</Text>
        <View style=  {estilos.fazenda}>
        <Image style= {estilos.imagemFazenda} source={logo}/>
        <Text style= {estilos.nomeFazenda}>{nomeFazenda}</Text>
        </View>
        <Text style={estilos.descricao}>
            {descricao}
        </Text>
        <Text style={estilos.preco}>{preco}</Text>

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