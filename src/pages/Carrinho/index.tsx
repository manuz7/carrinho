import React from 'react';
import{ StyleSheet, View } from 'react-native';
import Detalhe from './components/Detalhe';

import Topo from './components/Topo';


export default function Carrinho (){
    return <>
  
  <Topo/>
    <View style= {estilos.carrinho}>
       <Detalhe/>
       nome={carrinho.detalhes.nome}
       nomeFazenda={carrinho.detalhes.nomeFazenda}
       descricao={Carrinho.detalhes.descricao}
       preco={carrinho.detalhes.preco}
       </View>
       </>
}


const estilos = StyleSheet.create({
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }

})