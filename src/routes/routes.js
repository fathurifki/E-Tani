import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

// import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import DetailProduct from '../pages/DetailProduct';
import Home from '../pages/Home';
import Product from '../pages/Product';
import Sell from '../pages/Sell';
import Profile from '../pages/Profile';
import profile from '../components/profile';

const appNavigator = createStackNavigator({
    // splash:{ screen: Splash, navigationOptions:{header:null}},
    login: { screen: Login, navigationOptions:{header:null}},
    register : { screen: Register, navigationOptions:{header:null}},
    cart : { screen: Cart, navigationOptions:{header:null}},
    detailproduct : { screen: DetailProduct, navigationOptions:{header:null}},
    home : { screen: Home, navigationOptions:{header:null}},
    product : { screen: Product, navigationOptions:{header:null}},
    sell : { screen: Sell, navigationOptions:{header:null}},
    profile : { screen: Profile, navigationOptions:{header:null}},
    test : { screen: profile, navigationOptions:{header:null}},
   
},{
    initialRouteName:'login'
})

export default createAppContainer(appNavigator);