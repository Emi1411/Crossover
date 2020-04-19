import React,{Component} from 'react';
import {StyleSheet,Image, Alert} from 'react-native';
import api from '../data/api';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon} from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import AnimatedLoader from "react-native-animated-loader";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nomusu:'',
      pass:'',
      isReady:false,
      visible:false
    }
  }

  login = async () => {
    let validarLog = await api.validarLog(this.state.nomusu, this.state.pass);
    
    if(validarLog == 1){
        this.props.navigation.navigate('Productos');
    }else{
        Alert.alert('Clave o usuario inválidos');
    }

}

  async componentDidMount() {
    const navegar=this.props.navigation;
      this.setState({visible: true})
      setTimeout(() => {
        this.fuentes();
        this.setState({visible: false})
      },5000);
  }

  async fuentes(){
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

render(){
  const { visible } = this.state;
  const navegar=this.props.navigation;
  if (!this.state.isReady) {
    return (
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        animationStyle={misEstilos.lottie}
        speed={1}
      />
    );
  }
  return (
    <Container>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Image style={misEstilos.imagen} source={require('../assets/Imagen/crossover.jpg')}/>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' 
                  onChangeText={(nomusu) => this.setState({nomusu})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' 
                  onChangeText={(pass) => this.setState({pass})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton} onPress={() => {this.login()}}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  boton:{
    marginLeft: '70%',
  },
  imagen:{
    width: 320,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  lottie: {
    width: 100,
    height: 100
  }
});

export default Login;
