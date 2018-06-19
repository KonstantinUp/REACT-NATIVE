import React from 'react';
import { StyleSheet, Text, View,StatusBar,Navigator,TouchableOpacity,AsyncStorage} from 'react-native';


import Logo from '../components/Logo'
import Form from '../components/Form'

// import { Actions } from 'react-native-router-flux';

const  ACCESS_TOKEN='access_token';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state ={
          email:"",
          password:"",
          error:"",
          isLoading: true
        }
    }

    componentDidMount() {
        // AsyncStorage.getItem('ACCESS_TOKEN').then((token) => {
        //     console.log(token);
        //     this.setState({
        //         isLoading: token == null
        //     });
        // }).done();
    }

    async getToken(){
        try{
            let token = await AsyncStorage.getItem(ACCESS_TOKEN);
            console.log("token is " + token)
        }catch (error){
            console.log("something went wrong _1")
        }
    }

    async storeToken (accessToken){
         try{
             console.log(1);
              await AsyncStorage.setItem(ACCESS_TOKEN,accessToken);
              await this.getToken();
         }catch (error){
                 console.log("something went wrong _2")
         }
    }

    async removeToken (){
        try{
            console.log(1);
            await AsyncStorage.removeItem(ACCESS_TOKEN);
            this.getToken();
        }catch (error){
            console.log("something went wrong_3")
        }
    }

    changePassword (value){
     this.setState({password:value});

        console.log(this.state)
    }
    changeEmail (value){
        this.setState({email:value});
        console.log(this.state)
    }

    status(){
         console.log(this.state.isLoading);
        console.log(this.getToken())
    }


    async onPressed (){
        try {
             let response = await fetch ('http://afternoon-beyond-22141.herokuapp.com/api/login',{
                                         method:'POST',
                                         headers:{
                                             'Accept':'application/json',
                                             'Content-Type':'application/json',
                                         },
                                         body:JSON.stringify({
                                             session:{
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
                 console.log("resss token" +     accessToken);

                 this.props.navigation.navigate('App');

            } else{
                  let error = res;
                  throw error;
            }
        } catch (error) {
                this.removeToken();

                 this.setState({error:error});
                 console.log("error" + error)
        }
    }


    render() {
        if (this.state.isLoading) {
            const { navigate } = this.props.navigation;
            return (
                <View style = {styles.container}>
                    <Logo/>
                    <Form type = 'Login' onPressed ={this.onPressed.bind(this)} changePassword={this.changePassword.bind(this)} changeEmail ={this.changeEmail.bind(this)}  />
                    <Text style={styles.error}>
                        {this.state.error}
                    </Text>
                    <View style ={ styles.signupTextCont}>
                        <Text style ={styles.signupText}>Don't have an account yet?</Text>
                        <TouchableOpacity  onPress = {()=> navigate('Signin')}>
                            <Text style ={styles.signupButton}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        } else {
            return (
                <View style = {styles.container}><Text>{this.status()}</Text></View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#ffb86b",
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
