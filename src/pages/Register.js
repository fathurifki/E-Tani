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
            <View style={{backgroundColor:'red'}}>
              <View style={{alignItems:'center'}}>
                  <Text>LOGO</Text>
              </View>
            </View>
            <View>
            <View style={{alignItems:'center', backgroundColor:'green'}}>
                <Text>E-TANI</Text>
                <View style={{backgroundColor:'grey', margin: 10}}>
                  <Text>(Isilah Data Dengan Benar)</Text>
                </View>
            </View>
            <View>
                <TextInput 
                  placeholder={'Username'}
                />
            </View>
            <View>
                <TextInput 
                  placeholder={'Email'}
                />
            </View>
            <View>
                <TextInput 
                  placeholder={'Password'}
                />
            </View>
            </View>
            <View style={{width:"90%", alignSelf:'center'}}>
            <Button
              title="Sign Up"
            />
            </View>
        </View>
      )
    };
}