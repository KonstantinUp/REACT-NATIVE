import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage,Image} from 'react-native';
import Footer from '../components/Footer'
import { Avatar } from 'react-native-material-ui';
// import RNFetchBlob from "react-native-fetch-blob";

// import "../../UserAgent"
// import io from "socket.io-client/socket.io"

export default class OrdersScreen extends React.Component {
    static navigationOptions = {
        title: 'Active orders!',
        header: null
    };

    constructor() {
        super();
        this.setState = {
            ordersDatas:null
        };
        // this.socket=io('http://192.168.1.19:8080/',{jsonp:false})


    }

    componentWillMount(){
        // RNFetchBlob.fetch('POST', 'http://192.168.1.19:8080/',
        // ).then((res)=>{ console.log(res); this.setState()})

    }




    render(){
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <Text>
                        Lorem Ipsum - это текст-"рыба", часто используемыйб, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset .
                    </Text>
                    <View>
                        <Image>

                        </Image>
                    </View>
                </View>
                <Footer navigation ={this.props.navigation}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:200
    }
});