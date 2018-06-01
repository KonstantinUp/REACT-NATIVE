import React from 'react';
import {StyleSheet, Text, View, TextInput,TouchableOpacity,ScrollView} from 'react-native';
import Footer from '../components/Footer'
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class MakeOrderScreen extends React.Component {
    static navigationOptions = {
        title: 'Make Order',

    };
    constructor() {
        super()
    }



    render(){
        return(
            <View  style={styles.container}>
                <View style={styles.form_container}>
                    <ScrollView contentContainerStyle={{ alignItems:'center'}}>
                            <FormLabel  labelStyle={styles.formLabel}> Name </FormLabel>
                            <FormInput  underlineColorAndroid={'transparent'} maxLength = {40}  inputStyle={styles.inputBox}/>
                            <FormLabel  labelStyle={styles.formLabel}> Your message </FormLabel>
                            <FormInput  underlineColorAndroid={'transparent'}  maxLength = {100}  multiline = {true}  numberOfLines = {4} inputStyle={styles.inputBox}/>
                            <MaterialIcons name='add-a-photo'   color='#353a37' size={40}  style ={{marginVertical:10}} onPress={()=>this.props.navigation.navigate('takePhoto')} />
                            <TouchableOpacity style = {styles.buttonSubmit} >
                                <Text style ={styles.submitText}>Submit</Text>
                            </TouchableOpacity>
                    </ScrollView>
                </View>
                <Footer navigation ={this.props.navigation}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form_container:{
        justifyContent:'center',
        alignItems:'center',
        flex: 1,
    },
    inputBox:{
        width:300,
        backgroundColor:'#353a37',
        color:'white',
        fontSize: 20,
        borderRadius:10,
        textAlign:'center',
    },
    submitText:{
        fontSize:16,
        fontWeight:'500',
        color:'#ffffff',
        textAlign:'center'
    },
    buttonSubmit:{
        width:300,
        backgroundColor:"#1c313a",
        borderRadius:10,
        marginVertical:10,
        paddingVertical:12,
    },
    formLabel:{
        fontWeight: '300',
        fontSize:20,
        marginBottom:10,
        textAlign:'left',
        width:300
    }
});
