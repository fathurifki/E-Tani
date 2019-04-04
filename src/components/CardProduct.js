import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import {
    Card,
    ListItem,
    Button,
    Icon,
    Image
} from 'react-native-elements';

export default class CardComponent extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
      return (
        <TouchableOpacity onPress={this.props.onPress}>
           <Card >
               <View style={{flexDirection:'row'}}>    
               <Image 
               source={require('../assets/Pic1.jpeg')}
               style={{width: 100, height: 100, margin: 5}}
               >
               </Image>
               <View>
                    <Text style={{fontWeight:'bold',marginLeft: 5}}>{this.props.description}</Text>
               <View style={{flexDirection:'row', margin: 5,}}>
                    <Text style={{color:'red', fontStyle:'italic', fontWeight: 'bold'}}>Rp </Text><Text style={{color:'red', fontStyle:'italic', fontWeight: 'bold'}}>{this.props.price}</Text>
               </View>
               <View style={{flexDirection:'row', marginLeft: 5,}}>
                    <Text style={{color:'red'}}>Stock : </Text><Text style={{color:'red', fontStyle:'italic' , fontWeight: 'bold',}}>{this.props.stock}</Text>
               </View>
               <View style={{flexDirection:'row', marginLeft: 5,}}>
                    <Text style={{color:'red'}}>Category : </Text><Text style={{color:'red', fontStyle:'italic' , fontWeight: 'bold',}}>{this.props.category}</Text>
               </View>
               </View>
               </View>
           </Card>
        </TouchableOpacity>
      )
    };
}
