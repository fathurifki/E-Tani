import {
    createAppContainer,
    createStackNavigator,
    createSwitchNavigator
} from 'react-navigation';

// import Splash from '../pages/Splash';
import Login from '../pages/Login';
import Register from '../pages/Register';

const appNavigator = createStackNavigator({
    // splash:{ screen: Splash, navigationOptions:{header:null}},
    login: { screen: Login, navigationOptions:{header:null}},
    register : { screen: Register, navigationOptions:{header:null}},
},{
    initialRouteName:'login'
})

export default createAppContainer(appNavigator);