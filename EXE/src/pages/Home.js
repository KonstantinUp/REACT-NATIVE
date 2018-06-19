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



    render() {
        return (
                <View style={styles.container}>
                    <View  style = {styles.body}>
                        <View><Text> My order number 1 </Text></View>
                        <View><Text> My order number 2 </Text></View>
                        <View><Text> My order number 3 </Text></View>
                    </View>
                    <Footer navigation ={this.props.navigation}/>
                </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        flex:1,
        backgroundColor:'skyblue',
    }
});