import React, { Component } from 'react';
import {View,Text, ActivityIndicator,StyleSheet,Image,ScrollView, Alert} from 'react-native';
import {Card,Item,Button} from 'native-base';
import api from '../data/api';

class Productos extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor

  componentDidMount() {
      setTimeout(() => {
        this.setState({isLoading: false})
      },3000);
  }

  obtener(id,estado,name){
    //Alert.alert("el id es: "+id+"Estado "+estado+"Name: "+name);
    let beginData = api.beginData(id,estado,name);
    //api.beginData(id,estado,name);
    
    if(beginData == 1){
      Alert.alert('Espera mientras se obtiene el producto');
    }else{
        Alert.alert('Error al obtener el producto');
    }

}

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }// end if
    return(
      <ScrollView style={misEstilos.scrollView}>
        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/desarmador.jpg')}/>
            <Text style={misEstilos.texto}>Desarmadores</Text>
            <Button success style={misEstilos.boton} onPress={() => {this.obtener(1,true,"Desarmadores")}}><Text> Obtener </Text></Button>
          </Item>
          
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/tuercas.jpg')}/>
            <Text style={misEstilos.texto}>Tuercas</Text>
            <Button success style={misEstilos.boton1} onPress={() => {this.obtener(2,true,"Tuercas")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/perno.jpeg')}/>
            <Text style={misEstilos.texto}>Pernos</Text>
            <Button success style={misEstilos.boton2} onPress={() => {this.obtener(3,true,"Pernos")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/valvula.jpg')}/>
            <Text style={misEstilos.texto}>Válvulas</Text>
            <Button success style={misEstilos.boton3} onPress={() => {this.obtener(4,true,"Valvulas")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/llave.jpg')}/>
            <Text style={misEstilos.texto}>Llaves de cruz</Text>
            <Button success style={misEstilos.boton4} onPress={() => {this.obtener(5,true,"LlavesCruz")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/broca.jpg')}/>
            <Text style={misEstilos.texto}>Brocas</Text>
            <Button success style={misEstilos.boton5} onPress={() => {this.obtener(6,true,"Brocas")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/martillo.jpg')}/>
            <Text style={misEstilos.texto}>Martillos</Text>
            <Button success style={misEstilos.boton6} onPress={() => {this.obtener(7,true,"Martillos")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/pulidora.jpg')}/>
            <Text style={misEstilos.texto}>Pulidoras</Text>
            <Button success style={misEstilos.boton7} onPress={() => {this.obtener(8,true,"Pulidoras")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../assets/Imagen/segueta.jpg')}/>
            <Text style={misEstilos.texto}>Segueta</Text>
            <Button success style={misEstilos.boton8} onPress={() => {this.obtener(9,true,"Segueta")}}><Text> Obtener </Text></Button>
          </Item>
        </Card>
        </ScrollView>
    );
  }//end render
}//end class

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  boton:{
    marginLeft: '20%',
    marginRight: '15%'
  },
  boton1:{
    marginLeft: '31%',
    marginRight: '15%'
  },
  boton2:{
    marginLeft: '32%',
    marginRight: '15%'
  },
  boton3:{
    marginLeft: '30%',
    marginRight: '15%'
  },
  boton4:{
    marginLeft: '20%',
    marginRight: '15%'
  },
  boton5:{
    marginLeft: '32%',
    marginRight: '15%'
  },
  boton6:{
    marginLeft: '29%',
    marginRight: '15%'
  },
  boton7:{
    marginLeft: '28%',
    marginRight: '15%'
  },
  boton8:{
    marginLeft: '30%',
    marginRight: '15%'
  },
  imagen:{
    width: 65,
    height: 65
  },
  texto:{
    marginLeft: '20%',
    alignItems:'center'
  },
  marginHorizontal: 20
});

export default Productos;