import React from 'react';
import SingInForm from '../../components/SignInFormComponent'
import {View,ScrollView,StyleSheet,Text,TouchableOpacity,AsyncStorage} from 'react-native';



const  ACCESS_TOKEN='access_token';

export class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.onRegisterPressed = this.onRegisterPressed.bind(this);
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

     async onRegisterPressed(values){
         console.log(values);
         // debugger;
        try{
            let response = await fetch ('http://afternoon-beyond-22141.herokuapp.com/api/users',{
                method:'POST',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({
                    user:{
                        name:values.Name,
                        email:values.Login,
                        password:values.Password,
                    }
                })
            });

            let res = await response.text();

            debugger;

            if(response.status >=200 && response.status < 300){
                       debugger;
                let accessToken = res;
                await this.storeToken(accessToken);

                this.props.navigation.navigate('App');

                console.log("res success is:" + res)

            } else{
                let errors = res;
                throw errors;
            }
        } catch (error){

            console.log("catch error:");
            // let formErrors = JSON.parse(error);
            // let errorsArray = [];
            // for(let key  in formErrors){
            //     if(formErrors[key].length > 1){
            //         formErrors[key].map(error => errorsArray.push(`${key} ${error}`))
            //     } else{
            //         errorsArray.push(`${key} ${formErrors[key]}`)
            //     }
            // }
            // this.setState({errors:errorsArray})
        }
    }

    render(){
        const { navigate } = this.props.navigation;
        return(
            <View  style={styles.container}>
                <ScrollView>
                    <SingInForm onSubmit ={this.onRegisterPressed} />
                </ScrollView>
                <View style ={ styles.signupTextCont}>
                    <Text style ={styles.signupText}>Уже есть аккаунт?</Text>
                    <TouchableOpacity  onPress = {()=> navigate('Login')}>
                        <Text style ={styles.signupButton}>Войти</Text>
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