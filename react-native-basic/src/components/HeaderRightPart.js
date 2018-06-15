import React from "react";
import { StyleSheet, Text, View,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class HeaderRightPart extends React.Component{

    render(){

        return (
            <View style={styles.icon}>
                <Icon name = 'home'   color='white' size={30}/>
                <Icon name='home' color='white' size={30} style={{marginLeft:30}} />
            </View>
        )
    }




};

const styles = StyleSheet.create({
    icon: {
        flex: 1,
        flexDirection:'row',
    },
});
