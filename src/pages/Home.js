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


const BannerWidth = 150;
const BannerHeight = 100;

const images = [
    "http://img.qdaily.com/article/banner/20170801113352Nruq7ySUiAh8e3L1.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/201707312210334UMcDGil9SnKWh1o.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1",
    "http://img.qdaily.com/article/banner/20170731145444Awq5zJK7Tok2sC3V.jpg?imageMogr2/auto-orient/thumbnail/!640x380r/gravity/Center/crop/640x380/quality/85/format/jpg/ignore-error/1"
]

const datas = [
    {
        id: 1,
        date: '12 Feb 2018',
        event: 'Pameran 1',
        place: 'Yogyakarta',
    },
    {
        id: 2,
        date: '13 Feb 2018',
        event: 'Pameran 2',
        place: 'Yogyakarta',
    },
    {
        id: 3,
        date: '14 Feb 2018',
        event: 'Pameran 3',
        place: 'Yogyakarta',
    },
    {
        id: 4,
        date: '15 Feb 2018',
        event: 'Pameran 4',
        place: 'Yogyakarta',
    },
]

export default class Home extends Component {
   
    renderPage(image, index) {
        return (
            <View key={index}>
                <Image style={{ width: BannerWidth, height: BannerHeight }} source={{ uri:image }} />
            </View>
        );
    }

    keyExtractor = () => (item) => item.id;

    renderItem = ({item}) => (
        <CardComponent
            event={item.event}
            onPress={() => this.props.navigation.navigate('profile')}
        />
    )
    render() {
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
                        data={datas}
                        keyExtractor={this.keyExtractor}
                        renderItem={this.renderItem}
                    />
                </View>
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
    list: {
        justifyContent:'center',
        flexDirection:'row',
        flexWrap: 'wrap',
    } 
})