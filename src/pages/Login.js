import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Register extends Component {
    render() {
      return (
        <View>
            <View style={{backgroundColor:'green', padding: 20}}>
                <View style={{alignSelf:'center', flexDirection:'column'}}>
                <Text>LOGO</Text>
                </View>
            </View>
            <View>
            <View style={ {alignItems:'center', backgroundColor:'red', padding: 20}}>
                <Text>E-TANI</Text>
                <Text>Berbelanja Hasil Tani menjadi Mudah</Text>
            </View>
            <View style={{backgroundColor:'orange'}}> 
                <TextInput 
                  placeholder={'Email'}
                />
            </View>
            <View style={{backgroundColor:'magenta'}}>
                <TextInput 
                  placeholder={'Password'}
                />
            </View>
            </View>
            <View>
            <Text style={{fontSize: 15, alignSelf:'center', margin: 20, color:"black"}}> Not Register Yet ?<Text style={{color: 'red', fontSize:15, fontWeight:"bold"}} onPress={() => this.props.navigation.navigate('register')}> Sign Up </Text><Text style={{fontSize: 15}}>here</Text></Text>       
            </View>
            <View style={{width:"90%", alignSelf:'center'}}>
            <Button
              title="Login"
            />
            </View>
        </View>
      )
    };
}