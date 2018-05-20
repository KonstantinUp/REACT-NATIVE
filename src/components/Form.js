import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';


export default class Form extends React.Component {
      constructor(props){
           super(props)
      }


    render() {
        return (
            <View style ={styles.container} >
              <TextInput style ={styles.inputBox}
                         placeholder = "Email"
                         placeholderTextColor ="#ffffff"
                         underlineColorAndroid='rgba(0,0,0,0)'
                         selectionColor="#ffffff"
                         keyBoardType="email-address"
                         onSubmitEditing={()=> this.password.focus()}
              />
                <TextInput style ={styles.inputBox}
                           placeholder = "Password"
                           secureTextEntry = {true}
                           placeholderTextColor ="#ffffff"
                           underlineColorAndroid='rgba(0,0,0,0)'
                           ref = {(input)=> this.password = input}
                />
                <TouchableOpacity style = {styles.button}>
                    <Text style ={styles.buttonText}>{this.props.type}</Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
    },
    inputBox :{
        width:300,
        backgroundColor:'rgba(255,255,255,0.3)',
        borderRadius:25,
        paddingHorizontal:16,
        marginVertical:10,
        fontSize:16,
        color:'#ffffff',
        height:40,
    },
    buttonText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    button:{
        width:300,
        backgroundColor:"#1c313a",
        borderRadius:25,
        marginVertical:10,
        paddingVertical:12
    }

});