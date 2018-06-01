import React from 'react';
import { StyleSheet,View,AsyncStorage,Button,ScrollView} from 'react-native';
import { Header, Text } from 'react-native-elements';
// import HeaderComponent from '../components/Header'
import Footer from '../components/Footer'
import { Avatar, Subheader, Toolbar } from 'react-native-material-ui';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
        header: null
    };

     _showMoreApp = () => {
         // this.props.navigation.navigate('Other');
     };

     _signOutAsync = async () => {
         await AsyncStorage.clear();
         this.props.navigation.navigate('Auth');
     };

    render() {
        return (

                <View style={styles.container}>

                    <View  style = {styles.body}>
                        <Button title="Show me more of the app" onPress={this._showMoreApp} />
                        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
                    </View>

                    <Footer navigation ={this.props.navigation}/>

                </View>



        );
    }


}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    body:{
        flex:1,
        backgroundColor:'skyblue',

    }
});