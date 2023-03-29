import React, { useMemo,useReducer } from "react";
import { View,Text,Image, StyleSheet,TouchableOpacity } from "react-native";

import Estrelas from '../../../componentes/Estrelas';
    const distanciaEmMetros = (distancia) =>{
        console.log(distancia)
        return `${distancia}m`
    }

export default function Produtor({nome,imagem,distancia,estrelas}){

    //Use reduce, função dentro dele poderia estar fora com algoritmo mais complicado 
    const [selecionado, inverterSelecao] =useReducer((selecionado) => !selecionado, false)

    // só irá chamar o metodo quando a distancia variar
    const distanciaTexto = useMemo(()=> distanciaEmMetros(distancia),[distancia])


    return <TouchableOpacity style={estilos.card} onPress={inverterSelecao}>
                <Image source={imagem} accessibilityLabel={nome} style={estilos.logo}/>
                <View style={estilos.informacoes}>
                    <View>
                        <Text style={estilos.nome}>{nome}</Text>
                        <Estrelas quantidade={estrelas} editavel = {selecionado} grande={selecionado} />
                    </View>
                    <Text style={estilos.distancia}>{distanciaTexto}</Text>
                </View>
                
            </TouchableOpacity>
}

const estilos = StyleSheet.create({
    card:{
        backgroundColor:"#f6f6f6",
        marginVertical:8,
        marginHorizontal:8,
        borderRadius:6,
        flexDirection:"row",
        // Android
        elevation:2,

        // iOS
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.23,
        shadowRadius:2.62
    },
    logo:{
        width:48,
        height:48,
        borderRadius:6,
        marginVertical:16,
        marginLeft:16,
    },
    informacoes:{
        flex: 1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:8,
        marginVertical:16,
        marginRight:16,

    },
    nome:{
        fontSize:14,
        lineHeight:22,
        fontWeight:'bold',
    },
    distancia:{
        fontSize:12,
        lineHeight:19,
    }

})