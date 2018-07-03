import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,AsyncStorage} from 'react-native';




export  class Home extends React.Component {

    static navigationOptions = {
        title: 'Welcome to the app!',
        header: null
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };


    render() {
        return (
            <View style={styles.container}>
                <View  style = {styles.body}>
                    <View><Text> My order number 1 </Text></View>
                    <View><Text> My order number 2 </Text></View>
                    <View><Text> My order number 3 </Text></View>
                    <TouchableOpacity style = {styles.button} onPress = {this._signOutAsync}>
                        <Text style ={styles.buttonText}>logout</Text>
                    </TouchableOpacity>
                </View>
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