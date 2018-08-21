import React from 'react';
import { StyleSheet,View} from 'react-native';



export default class DetailsScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
        header: null
    };



    render() {
        return (
            <View style={styles.container}>
                <View  style = {styles.body}>
                    <View><Text>Details</Text></View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});