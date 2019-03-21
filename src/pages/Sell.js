import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  Picker
} from 'react-native';
import {
  Header,
  Card,
  Icon,
  ListItem,
  Text,
} from 'react-native-elements';
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Item,
  Button
} from 'native-base';
import PickerProduct from '../components/picker';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Product extends Component {
    render() {
      return (
        <Container>
             <Header
                 leftComponent={{ icon: 'menu', color: '#fff' }}
                 centerComponent={{ text: 'Jual', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollView>
            <Text>Tambah Produk</Text>
            <View>
              <Card>
                <Text>Gambar</Text>
                <Text>Nama Penjual</Text>
                <TextInput underlineColorAndroid='rgb(255,0,0)' autoCorrect={false}  /> 
                <Text>Nama Produk</Text>
                <TextInput underlineColorAndroid='rgb(255,0,0)' autoCorrect={false}  /> 
                <Text>Kategori</Text>
                <PickerProduct/>
              </Card>
            </View>
            <View>
              <Card>
                <View style={{flexDirection:'row', marginBottom: 5}}>
                <Text>Harga </Text>
                   <TextInput style = {{ width: DEVICE_WIDTH * 0.7 }}
                   underlineColorAndroid='rgb(255,0,0)' /> 
                </View>
                <View>
                <Text>Stock</Text>
                   <TextInput underlineColorAndroid='rgb(255,0,0)' autoCorrect={false}  /> 
                </View>
                <View>
                <Text>Berat</Text>
                   <TextInput underlineColorAndroid='rgb(255,0,0)' autoCorrect={false}  /> 
                </View>
                <View>
                <Text>Deskripsi</Text>                
                </View>
              </Card>
            </View>
            </ScrollView>
        </Container>
      )
    };
}

/**
 *  _id: new mongoose.Types.ObjectId(),
    seller: req.user.user_id,
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
    category: req.body.category,
    weight: req.body.weight,
    description: req.body.description,
    productImage: req.file.path
 */