import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage} from 'react-native';

import Footer from '../components/Footer'


export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        title: 'Settings!',
        header: null
    };

    constructor() {
        super()
    }

    render(){

        return(
            <View  style={styles.container}>
                <View style={{flex:1,backgroundColor:'orange'}}>
                    <Text>dfgdfgdfgdfgd</Text>
                </View>
                <Footer navigation ={this.props.navigation}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});