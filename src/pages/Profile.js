import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Dimensions,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity
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
  Button,
  CardItem,
  Tab,
  Tabs,
  TabHeading
} from 'native-base';
import images from '../assets/Aurora.jpg';

const {height, width} = Dimensions.get("window")

export default class Profile extends Component {
    render() {
      return (
        <Container>
            <CardItem cardBody shadow>
                <ImageBackground source={images} style={{height: height * 0.32 , width }}>
                <TouchableOpacity onPressIn={() => this.props.navigation.navigate('dashboard')}>
                <Icon type="AntDesign" name="left" style={{margin:12, color:"white"}} />
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: "flex-end",  alignItems:"center", margin: 20}}>
                <Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png'}}
                    style={{width: 120, height: 120, borderRadius: 150/2}} />
                <Text style={{margin:10, color:"white", fontSize:20}}>TEST</Text>
                </View>
                </ImageBackground>    
                <Button transparent onPress={() => this.props.navigation.navigate('ticket')}>
                    <Icon type="FontAwesome" name="ticket"/>            
                </Button> 
            </CardItem>
            <Tabs>
            <Tab heading={<TabHeading><Icon type="MaterialCommunityIcons" /><Text style={{color:'white'}}>Profil</Text></TabHeading>}>
            </Tab>
            <Tab heading={ <TabHeading><Icon type="MaterialCommunityIcons"/><Text style={{color:'white'}}>Riwayat Transaksi</Text></TabHeading>}>
            </Tab>
            </Tabs>    
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
