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


// Redux Things
import { connect } from 'react-redux';
import {
  categoryProduct,
  fetchProduct,
  requestProduct,
  responseProduct
} from '../redux/actions/product';

const mapState = state => ({
   data : state.productreducer
})

const mapDispatch = dispatch => ({
   request: (category) => dispatch(requestProduct(category))
})

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

class Product extends Component {

    componentDidMount(){
        const{request, navigation} = this.props
        request(navigation.state.params.category)
      }
    
    keyExtractor = () => (item) => item.category;

    renderItem = ({item}) => (
        <CardProduct
            description = {item.name}
            price = {item.price}
            stock = {item.stock}
            category = {item.category}
            onPress={() => this.props.navigation.navigate({routeName : 'detailproduct', params: { category: item.Category }})}
        />
    )

    render() {
        const {data} = this.props
        console.log("TESTING", data);
      return (
        <Container>
             <Header
                 leftComponent={{ icon: 'menu', color: '#fff' }}
                 centerComponent={{ text: 'Produk Tani', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollView>
                <View>
                <FlatList 
                     data={data.item}
                     keyExtractor={this.keyExtractor}
                     renderItem={(item) => this.renderItem(item)}
                />
                </View>
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

export default connect (mapState, mapDispatch)(Product)