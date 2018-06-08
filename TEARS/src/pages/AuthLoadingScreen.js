import React from 'react';
import { StyleSheet, Text, View,StatusBar,AsyncStorage,ActivityIndicator} from 'react-native';

const  ACCESS_TOKEN='access_token';

export default class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
         this._bootstrapAsync();
    }



    _bootstrapAsync = async () => {
        console.log(1);
        const userToken = await AsyncStorage.getItem(ACCESS_TOKEN);
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
        console.log('jklj');
    };


    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});