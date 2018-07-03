import React from 'react';
import LoginForm from '../../components/LoginFormcomponent'
import {View, ScrollView, StyleSheet, Text, TouchableOpacity, AsyncStorage} from 'react-native';

const  ACCESS_TOKEN='access_token';

export class Login extends React.Component{
    // static navigationOptions = {
    //     header: null
    // };


    constructor(props) {
        super(props);
        this.onLoginPressed = this.onLoginPressed.bind(this);
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

    async onLoginPressed (values){
        try {
            let response = await fetch ('http://afternoon-beyond-22141.herokuapp.com/api/login',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    session:{
                        email:values.Login,
                        password:values.Password,
                    }

                })
            });

            let res = await response.text();

            if(response.status >=200 && response.status < 300){

                let accessToken = res;
                await this.storeToken(accessToken);
                console.log("resss token" +     accessToken);
                debugger;
                this.props.navigation.navigate('App');

            } else{
                let error = res;
                throw error;
            }
        } catch (error) {

            console.log("error" + error);
        }
    }


    render(){
        const { navigate } = this.props.navigation;
        return(
            <View  style={styles.container}>
                <ScrollView>
                    <LoginForm onSubmit ={this.onLoginPressed} />
                </ScrollView>
                <View style ={ styles.signupTextCont}>
                    <Text style ={styles.signupText}>Нет аккаунта?</Text>
                    <TouchableOpacity  onPress = {()=> navigate('Signin')}>
                        <Text style ={styles.signupButton}>Зарегестрироваться</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#ff5b6a"
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


