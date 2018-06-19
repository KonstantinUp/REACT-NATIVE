import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    PermissionsAndroid,
    Platform,
    Alert
} from 'react-native';
import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {change, reset} from 'redux-form';
import {reduxForm,Field} from "redux-form"

const validate = value=>{
    const errors={};
   if(!value.Name){
       errors.Name = "please fill the name"
   }
    if(!value.message){
        errors.message = "please fill the message"
    } else if(value.message.length<50){
        errors.message = "we need minimum 50 charset "
    }
    return errors;
};


const nameFields = ({label,meta:{error,touched},input:{onChange,value}})=>{
    return(
        <View >
            <FormLabel  labelStyle={styles.formLabel}> {label} </FormLabel>
            <FormInput   underlineColorAndroid={'transparent'} maxLength = {40}  inputStyle={styles.inputBox} onChangeText={onChange} value={value}/>
            {touched && (error && (<Text style={{color:'red',textAlign:'center'}}>{error}</Text>))}
        </View>
    )
};
const messageFields = ({label,meta:{error,touched},input:{onChange,value}})=>{
    return(
        <View>
            <FormLabel  labelStyle={styles.formLabel}> {label} </FormLabel>
            <FormInput  underlineColorAndroid={'transparent'}  maxLength = {100}  multiline = {true}  numberOfLines = {4} value={value}  inputStyle={styles.inputBox} onChangeText={onChange}/>
            {touched && (error && (<Text style={{color:'red',textAlign:'center'}}>{error}</Text>))}
        </View>

    )
};


const myFormCom = props =>{





    const {handleSubmit,dispatch} = props;




      return(
              <View style={styles.form_container}>
                       <Field
                        name="Name"
                        component={nameFields}
                        label="Name"
                       />
                      <Field
                          name="message"
                          component={messageFields}
                          label="Your message"
                      />
                      <MaterialIcons name='add-a-photo'   color='#353a37' size={40}  style ={{marginVertical:10}} onPress={()=>props.show()} />
                      <View style={{flexDirection:'row'}}>
                        {props.img === null ? null : props.img}
                      </View>
                      <TouchableOpacity style = {styles.buttonSubmit}  onPress={handleSubmit}>
                          <View>
                              <Text style ={styles.submitText}>Submit</Text>
                          </View>
                      </TouchableOpacity>
              </View>
      );
};

const afterSubmit = (result, dispatch) =>{
    dispatch(reset('formInitial'));
};



const OurForm = reduxForm({
    form:'formInitial',
    onSubmitSuccess: afterSubmit,
    validate
})(myFormCom);


export default OurForm;


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    form_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    inputBox: {
        width: 300,
        backgroundColor: '#353a37',
        color: 'white',
        fontSize: 20,
        borderRadius: 10,
        textAlign: 'center',
    },
    submitText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
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
        marginBottom: 10,
        textAlign: 'left',
        width: 300
    }
}
);