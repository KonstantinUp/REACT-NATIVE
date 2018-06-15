import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage,Button} from 'react-native';
import Footer from '../components/Footer'



export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings!',
        header: null
    };

    constructor() {
        super()
    }



    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };


    render(){

        return(
            <View  style={styles.container}>
                <View style={{flex:1,backgroundColor:'orange',alignItems:'center',justifyContent:'center'}}>
                    <TouchableOpacity style = {styles.button} onPress = {()=> this.props.navigation.navigate('ProfileScreen')}>
                        <Text style ={styles.buttonText}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {styles.button} onPress = {this._signOutAsync}>
                        <Text style ={styles.buttonText}>logout</Text>
                    </TouchableOpacity>
                </View>
                <Footer navigation ={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button:{
        width: 300,
        backgroundColor: "#1c313a",
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 12,
    },
    buttonText:{
        textAlign:'center',
        fontSize:20
    }
});