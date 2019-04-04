/**
 * E-tani 2019
 * Copyright Reserved
 * Any Commit Should be tell to author 
 */

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
    Item,
    Button
} from 'native-base';
import Carousel from 'react-native-banner-carousel';
import CardComponent from '../components/Card';


// Redux Things
import { connect } from 'react-redux';
import {
    getDataHome,
    requestHome,
    responseHome,
    detailProduct
} from '../redux/actions/home';

const mapState = state => ({
    data:state.homereducer
})


const mapDispatch = dispatch => ({
    request: () => dispatch(requestHome()),
})

const BannerWidth = 150;
const BannerHeight = 100;

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
]

class Home extends Component {
   
    componentDidMount(){
        const{request} = this.props
        request()
    }


    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri:image }} />
            </View>
        );
    }

    keyExtractor = () => (item) => item.category.toString();

    renderItem = ({item}) => (
        <CardComponent
            image={item.productImage}
            name={item.name}
            category={item.category}
            onPress={() => this.props.navigation.navigate({routeName:'product', params : { category: item.category}})}
        />
    )
    render() {
        const {data} = this.props
        return (
        <Container>
            <Header
                 leftComponent={{ icon: 'menu', color: '#fff' }}
                 centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <ScrollView>
            <View>
                <View>
                    <Card>
                    <Text>Jumlah Belanja : </Text>
                        <View style={{flexDirection:'row'}}>
                            <Text>Rp. </Text>
                            <Text>100000</Text>
                        </View>
                    </Card>
                </View>
                <View style={{ margin: 20, backgroundColor: 'black', flexDirection:'row', justifyContent: 'center',}}>
                    <Carousel
                        autoplay
                        autoplayTimeout={5000}
                        loop
                        index={0}
                        pageSize={BannerWidth}
                    >
                         {images.map((image, index) => this.renderPage(image, index))}
                    </Carousel>
                </View>
                <View>
                    <FlatList
                        horizontal
                        style={{ height: Dimensions.get('window').width * 1 }}
                        data={data.item}
                        keyExtractor={this.keyExtractor}
                        renderItem={(item) => this.renderItem(item)}
                    />
                </View>
            </View>
            </ScrollView>  
            <Content/>
            <Footer>
                  <FooterTab>
                      <Button vertical onPress={() => this.props.navigation.navigate('home')} >
                          <Text style={{color:'white'}}>Beranda</Text>
                      </Button>
                      <Button vertical onPress={() => this.props.navigation.navigate('cart')}> 
                          <Text style={{color:'white'}}>Keranjang</Text>
                      </Button>
                      <Button vertical onPress={() => this.props.navigation.navigate('sell')}>
                          <Text style={{color:'white'}}>Jual</Text>
                      </Button>
                      <Button vertical onPress={() => this.props.navigation.navigate('profile')}>
                          <Text style={{color:'white'}}>Profile</Text>
                      </Button>
                  </FooterTab>
              </Footer>
        </Container>
      )
    };
}

const styles = StyleSheet.create({
    list: {
        justifyContent:'center',
        flexDirection:'row',
        flexWrap: 'wrap',
    } 
})

export default connect (mapState, mapDispatch)(Home)