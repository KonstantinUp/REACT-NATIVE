import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {reduxForm,Field,reset} from "redux-form"
import RadioForm from 'react-native-simple-radio-button';
import { CheckBox,FormLabel, FormInput, } from 'react-native-elements'

const validate = value=>{
    const errors={};
    if(!value.Login){
        errors.Login = "please fill the name";
    }
    if(!value.Password){
        errors.Password = "please fill the password";
    }
    if(!value.Name){
        errors.Name = "please fill the name";
    }
    if(!value.age){
        errors.age = "please fill the age";
    }

    return errors;
};

const login = ({label,meta:{error,touched},input:{onChange,value}})=>{
    return(
        <View style={{marginBottom:10}}>
            <View style={{ justifyContent: 'space-between', flexDirection:'row'}}>
                <FormLabel labelStyle={styles.formLabel}>{label}</FormLabel>
                <FormInput inputStyle={styles.inputBox} onChangeText={onChange} value={value} underlineColorAndroid='rgba(0,0,0,0)'  onSubmitEditing ={()=>this.passwordInput.focus()}/>
            </View>
            <View style={{height:20}}>
                {touched && (error && (<Text style={{color:'red',textAlign:'center'}}>{error}</Text>))}
            </View>
        </View>
    )
};

const password = ({label,meta:{error,touched},input:{onChange,value}})=>{
    return(
        <View style={{marginBottom:10}}>
            <View style={{ justifyContent: 'space-between', flexDirection:'row'}}>
                <FormLabel labelStyle={styles.formLabel}>{label}</FormLabel>
                <FormInput inputStyle={styles.inputBox} onChangeText={onChange} value={value} underlineColorAndroid='rgba(0,0,0,0)'  secureTextEntry = {true}   ref={(input)=>this.passwordInput = input}/>
            </View>
            <View style={{height:20}}>
                {touched && (error && (<Text style={{color:'red',textAlign:'center'}}>{error}</Text>))}
            </View>
        </View>
    )
};


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            man:false,
            woman:true
        }
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <View style={styles.form_container}>
                <View style={{width:300,marginTop:80}}>
                    <Field
                        name="Login"
                        component={login}
                        label="Логин:"
                    />
                    <Field
                        name="Password"
                        component={password}
                        label="Пароль:"
                    />
                </View>
                <TouchableOpacity style = {styles.buttonSubmit}  onPress={handleSubmit}>
                    <View>
                        <Text style ={styles.submitText}>Отправить</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

}

const afterSubmit = (result, dispatch) =>{
    dispatch(reset('LoginForm'));
};



const LoginForm = reduxForm({
    form:'LoginForm',
    onSubmitSuccess: afterSubmit,
    validate
})(Form);


export default LoginForm;


const styles = StyleSheet.create({
        form_row:{
            flexDirection:'row',
            width:300,
            justifyContent: 'space-between'
        },
        form_container: {
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,

        },
        inputBox: {
            width: 150,
            backgroundColor: '#1a3a2d',
            color: 'white',
            borderRadius: 10,
            minHeight:25,
            height:35,
            margin:0
        },
        checkbox:{
            backgroundColor:'#ff5b6a',
            padding:0,
            borderColor:'#ff5b6a',
            width:90,
            marginRight:30
        },
        submitText: {
            fontSize: 16,
            fontWeight: '500',
            color: 'black',
            textAlign: 'center'
        },
        buttonSubmit: {
            width: 300,
            backgroundColor: "#1c313a",
            borderRadius: 10,
            marginVertical: 10,
            paddingVertical: 12,
        },
        formLabel: {
            fontWeight: '300',
            fontSize: 20,
            marginRight:0,
            marginTop:0,
            marginLeft:0,
            color:'black'
        },
        row_input:{
            flexDirection:'row',
            marginBottom:10,
            justifyContent: 'space-between'
        }
    }
);