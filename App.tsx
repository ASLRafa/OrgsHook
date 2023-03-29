import React from "react";
import {SafeAreaView,StyleSheet} from 'react-native';

import Home from './src/telas/Home';

function App(){
  return <SafeAreaView style={estilo.home}>
      <Home />
      </SafeAreaView>
}

const estilo = StyleSheet.create({
  home:{
    flex:1,
  }
})

export default App;