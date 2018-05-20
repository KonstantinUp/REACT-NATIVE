import React from 'react';
import { StyleSheet, Text, View,StatusBar,Navigator,TouchableOpacity } from 'react-native';


import Logo from '../components/Logo'
import Form from '../components/Form'

import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {

    render() {
        return (
            <View style = {styles.container}>
                <Logo/>
                <Form type = 'Login'/>
                <View style ={ styles.signupTextCont}>
                    <Text style ={styles.signupText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={() => Actions.Signup()}>
                        <Text style ={styles.signupButton}   >Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'

    },
    signupTextCont:{
        flexGrow:1,
        justifyContent:'center',
        alignItems:'flex-end',
        paddingVertical:10,
        flexDirection:'row'
    },
    signupText:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
    },
    signupButton:{
        color:'#ffffff',
        fontSize:16,
        fontWeight:'500'
    }
});
