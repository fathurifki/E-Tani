import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView
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
    Button
} from 'native-base';
import CardProduct from '../components/CardProduct';

const datas = [
    {
        id: 1,
        Description: 'PALAWIJA MANTAP',
        Price: '20000',
        Stock: '300',
    },
    {
        id: 2,
        Description: 'PALAWIJA MANTAP',
        Price: '20000',
        Stock: '300',
    },
    {
        id: 3,
        Description: 'PALAWIJA MANTAP',
        Price: '20000',
        Stock: '300',
    },
    {
        id: 4,
        Description: 'PALAWIJA MANTAP',
        Price: '20000',
        Stock: '300',
    },
]


export default class Product extends Component {

    keyExtractor = () => (item) => item.id;

    renderItem = ({item}) => (
        <CardProduct
            Description = {item.Description}
            Price = {item.Price}
            Stock = {item.Stock}
            onPress={() => this.props.navigation.navigate('profile')}
        />
    )

    render() {
      return (
        <Container>
             <Header
                 leftComponent={{ icon: 'menu', color: '#fff' }}
                 centerComponent={{ text: 'Produk Tani', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollView>
                <FlatList 
                     data={datas}
                     keyExtractor={this.keyExtractor}
                     renderItem={this.renderItem}
                />
            </ScrollView>
            <Content/>
            <Footer>
                  <FooterTab>
                      <Button vertical>
                          <Text style={{color:'white'}}>Beranda</Text>
                      </Button>
                      <Button vertical> 
                          <Text style={{color:'white'}}>Beli</Text>
                      </Button>
                      <Button vertical>
                          <Text style={{color:'white'}}>Jual</Text>
                      </Button>
                      <Button vertical>
                          <Text style={{color:'white'}}>Profile</Text>
                      </Button>
                  </FooterTab>
              </Footer>
        </Container>
      )
    };
}

const styles = StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16,  
    }
});
