import React from 'react';
import {Text,View,Image, StyleSheet} from 'react-native'

import { carregaTopo } from '../../../servicos/carregaDados';
// Imagens
import logo from '../../../assets/logo.png';



class Topo extends React.Component{
    state = {
        topo:{
            apresentacao:'',
            legenda:'',
        }
    }


    atualizaTopo(){
        const retorno = carregaTopo();
        this.setState({topo: retorno})
    }

    componentDidMount(){
        this.atualizaTopo()
    }

    render(){
        return <View style= {estilos.topo}>
            <Image style={estilos.logo} source={logo} />
            <Text style={estilos.apresentacao}>{this.state.topo.apresentacao}</Text>
            <Text style={estilos.info}>{this.state.topo.legenda}</Text>
        </View>
    }
    
}

const estilos = StyleSheet.create({

    topo:{
        backgroundColor:'#f6f6f6',
        padding:16,
    },
    logo:{
        width:70,
        height:28,
    },
    apresentacao:{
        marginTop:24,
        fontSize:36,
        lineHeight:48,
        fontWeight:"bold",
        color:"#464646"
    },
    info:{
        fontSize:16,
        lineHeight:26,
        color:"#a3a3a3"
    }

})

export default Topo;