/**
 * E-tani 2019
 * Copyright Reserved
 * Any Commit Should be tell to author 
 */


import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import {
    Header,
    Card,
    Icon,
    ListItem,
    Button,
    Text,
} from 'react-native-elements';
import {
    Container,
    Content,
    Footer,
    FooterTab
} from 'native-base';
import Banner,  {
    IndicaterAlign,
    IndicaterType
} from 'react-native-whc-banner';


export default class Home extends Component {
    render() {
      return (
        <Container>
            <Header
                 leftComponent={{ icon: 'menu', color: '#fff' }}
                 centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                 rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View>
                <View>
                    <Card>
                    <Text>Jumlah Belanja : </Text>
                    </Card>
                </View>
                <View>
                </View>
                <View>
                    <Card>
                    <Text> List Hasil Tani </Text>
                    </Card>
                </View>
            </View>
            <Content/>
            <Footer>
                  <FooterTab>
                      <Button >
                          <Text>Beranda</Text>
                      </Button>
                      <Button>
                          <Text>Beli</Text>
                      </Button>
                      <Button>
                          <Text>Jual</Text>
                      </Button>
                      <Button>
                          <Text>Profile</Text>
                      </Button>
                  </FooterTab>
              </Footer>
        </Container>
      )
    };
}

const styles = StyleSheet.create({
     
})