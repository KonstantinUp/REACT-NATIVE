
import { YellowBox } from 'react-native';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage} from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
import { COLOR, ThemeProvider } from './node_modules/react-native-material-ui';

import React from 'react';
import Login from './src/pages/login'
import Signin from './src/pages/Signin'
import HomeScreen from './src/pages/Home'
import SearchScreen from './src/pages/Search'
import SettingsScreen from './src/pages/Settings'
import OrdersScreen from './src/pages/ActiveOrders'
import MakeOrderScreen from './src/pages/MakeOrder'
import AuthLoadingScreen from './src/pages/AuthLoadingScreen'
import Camera from './src/pages/Camera'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

const AppStack = createStackNavigator({ Home: HomeScreen,Search:SearchScreen,Settings:SettingsScreen,Orders:OrdersScreen,MakeOrder:MakeOrderScreen,takePhoto:Camera});
const AuthStack = createStackNavigator({Login:{screen:Login},Signin:{screen:Signin} }, { headerMode: 'none' });

const RootNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);


// const uiTheme = {
//     palette: {
//         primaryColor: COLOR.green500,
//         accentColor: COLOR.pink500,
//     },
// };




export default class App extends React.Component {

    render() {
        return (
            <ThemeProvider>
                <RootNav/>
            </ThemeProvider>
        );
    }
}

