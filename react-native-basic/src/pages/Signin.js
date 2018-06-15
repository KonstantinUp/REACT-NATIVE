import React from 'react';
import {StyleSheet, Text, View, StatusBar, Navigator, TouchableOpacity, AsyncStorage} from 'react-native';


import Logo from '../components/Logo'
import Form from '../components/Form'
// import {Actions} from "react-native-router-flux";
const  ACCESS_TOKEN='access_token';

export default class Signin extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            name:"",
            email:"",
            password:"",
            errors:""
        }
    }

    async storeToken (accessToken){
        try{
            await AsyncStorage.setItem(ACCESS_TOKEN,accessToken);
            this.getToken();
        }catch (error){
            console.log("something went wrong")
        }
    }
    async getToken(){
        try{
            let token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is " + token)
        }catch (error){
            console.log("something went wrong")
        }
    }
    async removeToken (){
        try{
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            this.getToken();
        }catch (error){
            console.log("something went wrong")
        }
    }
    changeName (value){
        this.setState({name:value});
        console.log(this.state)
    }

    changePassword (value){
        this.setState({password:value});

        console.log(this.state)
    }
    changeEmail (value){
        this.setState({email:value});
        console.log(this.state)
    }

    displayErrors(){
         if(this.state.errors.length !== 0){
             return  this.state.errors.map((error,i)=> <Text key={i} style={styles.error}>{error}</Text>)
         }
    }

    async onRegisterPressed(){
              try{
                  let response = await fetch ('http://afternoon-beyond-22141.herokuapp.com/api/users',{
                      method:'POST',
                      headers:{
                          'Accept':'application/json',
                          'Content-Type':'application/json',
                      },
                      body:JSON.stringify({
                          user:{
                              name:this.state.name,
                              email:this.state.email,
                              password:this.state.password,
                          }
                      })
                  });

               let res = await response.text();

                  if(response.status >=200 && response.status < 300){
                      this.setState({error:""});

                      let accessToken = res;
                      await this.storeToken(accessToken);

                      this.props.navigation.navigate('App');

                      console.log("res success is:" + res)

                  } else{
                      let errors = res;
                      throw errors;
                  }


              } catch (error){

                       console.log("catch error:" + error);
                  let formErrors = JSON.parse(error);
                  let errorsArray = [];
                  for(let key  in formErrors){
                       if(formErrors[key].length > 1){
                           formErrors[key].map(error => errorsArray.push(`${key} ${error}`))
                       } else{
                           errorsArray.push(`${key} ${formErrors[key]}`)
                      }
                  }
                  this.setState({errors:errorsArray})
              }
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container}>
                <Logo/>
                <Form type = 'Signup' onPressed = {this.onRegisterPressed.bind(this)}  changeName = {this.changeName.bind(this)}  changePassword={this.changePassword.bind(this)} changeEmail ={this.changeEmail.bind(this)} />
                {this.displayErrors()}
                <View style ={ styles.signupTextCont}>

                    <Text style ={styles.signupText}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> navigate('Login')}>
                        <Text style ={styles.signupButton}>Sign in</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )
    }
}

// const Errors = (props) =>{
//     return (
//         <View>
//             { props.errors.length === 0 ? "" :props.errors.map((error,i)=> <Text key = {i} style={style.error}>{error}</Text>)}
//         </View>
//     )
//
// };

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffb86b"
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
    },
    error:{
        color:"red",

    }
});
