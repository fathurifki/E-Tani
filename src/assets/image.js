import React, { Component } from 'react';
import {
    Image,
    Dimensions,
    StyleSheet
} from 'react-native';

const ImagesLogo = () => (
    <Image source = {require('./logotani.png')}
    style = {{ flexShrink:1,  width: 200 , height: 200 }}
    resizeMode="contain"
    />
)

export default ImagesLogo;