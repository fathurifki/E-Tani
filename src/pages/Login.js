import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
  Item,
  Form,
  Input,
  Label
} from 'native-base';
import { Button } from 'react-native-elements';
import  ImagesLogo from '../assets/image';

// Redux Things
import {connect} from 'react-redux';
import { request } from '../redux/actions/login';

const mapState = state => ({
  data: state.loginreducer
})

const mapDispatch = dispatch => ({
  request: () => dispatch(request())
})


class Login extends Component {
    render() {
      const { request } = this.props
      console.log("==SUCCESS==", request);
      return (
        <View style={{flex: 1}}>
            <View >
                <View style={{alignSelf:'center'}}>
                <ImagesLogo/>
                </View>
            </View>
            <View>
            <View style={ {alignItems:'center', backgroundColor:'red', padding: 20}}>
                <Text style={{ fontSize: 20,color:'white' , fontWeight:'bold'}}>E-TANI</Text>
                <Text style={{ fontWeight:'bold', color:'white'}}>Berbelanja Hasil Tani menjadi Mudah</Text>
            </View>
            <Form>  
            <View style={styles.input}>
              <Item floatingLabel>
                  <Label>Email</Label>
                  <Input />
                </Item>
            <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true}/>
                </Item>
            </View>
            </Form>
            </View>
            <View>
            <Text style={{fontSize: 15, alignSelf:'center', padding:10 , color:"black"}}> Not Register Yet ?<Text style={{color: 'red', fontSize:15, fontWeight:"bold"}} onPress={() => this.props.navigation.navigate('register')}> Sign Up </Text><Text style={{fontSize: 15}}>here</Text></Text>       
            </View>
            <View style={{flex:1 , width:"90%", alignSelf:'center'}}>
            <Button
              onPress={() => this.props.navigation.navigate('home')}
              title="Login"
            />
            </View>
        </View>
      )
    };
}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;


const styles = StyleSheet.create({
    input: {
      width: DEVICE_WIDTH - 15,
      padding: 5,
      alignSelf:'center'
  },
})

export default connect (mapDispatch, mapState)(Login)