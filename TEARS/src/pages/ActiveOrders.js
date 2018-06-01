import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage} from 'react-native';
import Footer from '../components/Footer'
import { Avatar } from 'react-native-material-ui';


export default class OrdersScreen extends React.Component {
    static navigationOptions = {
        title: 'Active orders!',
        header: null
    };

    constructor() {
        super()
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>
                        dfgdf
                    </Text>
                    <Avatar/>
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