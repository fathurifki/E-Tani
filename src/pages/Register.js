import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
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
import { connect } from 'react-redux';
import {
  fillAdmission,
  requestRegister,
} from '../redux/actions/register';

const mapState = state => ({
    data: state.registerreducer
})

const mapDispatch = dispatch => ({
    setData: (field, values) => dispatch(fillAdmission(field, values)),
    request: () => dispatch(requestRegister())
})


class Register extends Component {

    render() {
      const {request, setData} = this.props
      console.log("==TEST==", request, setData);
      return (
        <View >
            <View>
                <View style={{alignSelf:'center'}}>
                <ImagesLogo/>
                </View>
            </View>
            <View>
            <View style={{ alignItems:'center', backgroundColor:'green', padding:5 }}>
                <Text style={{ fontSize: 20,color:'white', fontWeight:'bold'}}>E-TANI</Text>
                <View style={{backgroundColor:'grey', margin: 10}}>
                  <Text style={{ fontWeight:'bold', color:'white' }}>(Isilah Data Dengan Benar)</Text>
                </View>
            </View>
            <Form>  
            <View style={styles.input}>
                <Item floatingLabel>
                  <Label>Nama Lengkap</Label>
                  <Input />
                </Item>
              <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={text => setData('email', text)}/>
                </Item>
            <Item floatingLabel>
                  <Label>Password</Label>
                  <Input secureTextEntry={true} onChangeText={text => setData('password', text)}/>
                </Item>
            </View>
            </Form>
            </View>
            <View style={{width:"90%", alignSelf:'center', padding: 10,}}>
            <Button
              title="Sign Up"
              onPress={() => request()}
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
      padding: 10,
      width: DEVICE_WIDTH - 10,
      justifyContent: 'center',
  },
})

export default connect (mapState, mapDispatch)(Register)