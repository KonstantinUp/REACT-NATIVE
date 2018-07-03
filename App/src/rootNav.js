import { createSwitchNavigator, createStackNavigator} from 'react-navigation';
import AuthLoadingScreen from './pages/initialLoading/AuthLoadingScreen';
import {SignIn,Login} from './pages/AuthStack/index';
import {Home} from './pages/AppStack/index'



const AppStack = createStackNavigator({Home: Home});
const AuthStack = createStackNavigator({Login:{screen:Login},Signin:{screen:SignIn}},{ headerMode:'none'});



export default RootNav = createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);


