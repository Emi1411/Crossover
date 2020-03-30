import React, { Component } from 'react';
import {View,Text, ActivityIndicator,StyleSheet,Image} from 'react-native';
import {Card,Item,Button} from 'native-base';

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

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }// end if
    return(
      <View>
        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/desarmador.jpg')}/>
            <Text style={misEstilos.texto}>Desarmadores</Text>
            <Button success style={misEstilos.boton}><Text> Obtener </Text></Button>
          </Item>
          
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/tuercas.jpg')}/>
            <Text style={misEstilos.texto}>Tuercas</Text>
            <Button success style={misEstilos.boton1}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/perno.jpeg')}/>
            <Text style={misEstilos.texto}>Pernos</Text>
            <Button success style={misEstilos.boton2}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/valvula.jpg')}/>
            <Text style={misEstilos.texto}>Válvulas</Text>
            <Button success style={misEstilos.boton3}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/llave.jpg')}/>
            <Text style={misEstilos.texto}>Llaves de cruz</Text>
            <Button success style={misEstilos.boton4}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/broca.jpg')}/>
            <Text style={misEstilos.texto}>Brocas</Text>
            <Button success style={misEstilos.boton5}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/martillo.jpg')}/>
            <Text style={misEstilos.texto}>Martillos</Text>
            <Button success style={misEstilos.boton6}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/pulidora.jpg')}/>
            <Text style={misEstilos.texto}>Pulidoras</Text>
            <Button success style={misEstilos.boton7}><Text> Obtener </Text></Button>
          </Item>
        </Card>

        <Card>
          <Item>
            <Image style={misEstilos.imagen} source={require('../Image/segueta.jpg')}/>
            <Text style={misEstilos.texto}>Segueta</Text>
            <Button success style={misEstilos.boton8}><Text> Obtener </Text></Button>
          </Item>
        </Card>
      </View>
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
  }
});

export default Productos;