import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';



export default class Logo extends React.Component {

    render() {
        return (
            <View style = {styles.container}>
                <Image
                    style = {{width:50,height:70}}
                    source = {require('../images/image_1.jpg')}
                />
                <Text style ={styles.logoText}>Welcom to my app.</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logoText :{
        marginVertical:15,
        fontSize:15,
        color:'rgba(255,255,255,0.7)'
    }
});
