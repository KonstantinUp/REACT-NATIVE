import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage} from 'react-native';
import Footer from '../components/Footer'
import { SearchBar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchScreen extends React.Component {
    static navigationOptions = {
        title: 'Search!',
        header: null
    };


    constructor() {
        super()
    }

    render(){

        return(
            <View  style={styles.container}>
                <View style={{flex:1,backgroundColor:'black'}}>
                    <SearchBar
                        clearIcon={{ color: 'red' }}
                        searchIcon={false}
                        // onChangeText={}
                        // onClear={}
                        placeholder='Type Here...' />
                    <Text>dfgdfgdfgdfgd</Text>
                </View>
                <Footer  navigation ={this.props.navigation}/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
});