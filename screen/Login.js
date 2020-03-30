import React,{Component} from 'react';
import {StyleSheet,Image} from 'react-native';
import { Container,Content, Card, CardItem, Text, Body,Button,Item,Input,Icon} from 'native-base';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      nomusu:'',
      pass:''
    }
  }

render(){
  const navegar=this.props.navigation;
  return (
    <Container>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Image style={misEstilos.imagen} source={require('../Image/crossover.jpg')}/>
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
            <Button primary style={misEstilos.boton} onPress={() => {navegar.navigate('Productos');}}><Text> Entrar </Text></Button>
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
  }
});

export default Login;
