import React from "react";
import { StyleSheet, Text, View,Image} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class Footer extends React.Component{
   constructor(){
       super();
   }




    render(){

        return (
            <View style={styles.icon}>
                    <MaterialIcons name = 'home'   color='white' size={40} onPress = {()=> this.props.navigation.navigate('Home')}/>
                    <MaterialIcons name='chat-bubble-outline' color='white' size={35} style={{marginLeft:40}} onPress = {()=> this.props.navigation.navigate('Orders')} />
                    <MaterialIcons name='plus-one'   color='white' size={40} onPress = {()=> this.props.navigation.navigate('MakeOrder')}/>
                    <MaterialIcons name='search'   color='white' size={40} onPress = {()=> this.props.navigation.navigate('Search')}/>
                    <MaterialIcons name='menu' color='white' size={40} style={{marginLeft:40}} onPress = {()=> this.props.navigation.navigate('Settings')}/>
            </View>
        )
    }




};

const styles = StyleSheet.create({
    icon: {
        justifyContent:'space-around',
        height:60,
        flexDirection:'row',
        backgroundColor:'gold',
        alignItems:'center'
    },
    leftPart:{
        flexDirection:'row',
        marginLeft:30,
        alignItems:'center'
    },
    RightPart:{
        flexDirection:'row',
        marginLeft:'auto',
        marginRight:30
    }
});
