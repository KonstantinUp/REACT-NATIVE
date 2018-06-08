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
import { change } from 'redux-form';
import { connect } from 'react-redux'
import {reset} from 'redux-form';
import store from "./store"
import {Provider} from "react-redux";
import Footer from '../../../src/components/Footer'
import OurForm from "./ourForm"
import pick from "../../components/imagePicker";
import WrapperImage from '../../../src/components/ImageWrapper'
import RNFetchBlob from "react-native-fetch-blob";
 class Appp extends React.Component{

    static navigationOptions = {
        title: 'Make Order',
    };

    constructor(props) {
        super(props);
        this.state = {
            avatarData: {},
            datas: [],
            name: null,
            message: null,
            formData: [],
            imgs: [],
            avatarSource:[]
        }
    }

    show (){
        pick((source,data) => this.setState(previousState => {

            var getArrAvatarData = previousState.avatarSource;
            getArrAvatarData.push(source);
            return {avatarData:{source:getArrAvatarData,data:data}};
        }))
    }

    delete(i){
        this.setState((previousState)=> {
            var getArrAvatarData = previousState.avatarSource;
            getArrAvatarData.splice(i, 1);
            return {avatarSources: getArrAvatarData}
        })
    }

    upload(values){

        console.log(values);

        // const { dispatch } = this.props;

            RNFetchBlob.fetch('POST', 'http://192.168.1.19:8080/', {
                    Authorization : "Bearer access-token",
                    otherHeader : "foo",
                    'Content-Type' : 'multipart/form-data'
                }, [{name:'info',data:JSON.stringify(values)}],

            )
                .then((res) => {console.log(res);
                    // dispatch(reset('form'));

                    // dispatch(change('formInitial', 'Name', ''));
                    //                     // dispatch(change('formInitial', 'message', ''));

                    // Alert.alert(
                    //     'Message',
                    //     'data have pasxfgvdfdfgdfsed successful',
                    //     [
                    //         {text: 'OK', onPress: () => console.log('OK Pressed')},
                    //     ],
                    //     { cancelable: false }
                    // );
                    // reset();

                    this.props.navigation.navigate('Home');
                })
                .catch((err) => {})


    }


    render(){
        var  img =  this.state.avatarSource.length === 0  ? null :   this.state.avatarSource.map ( (source,i)=> {
            return(
                <WrapperImage  key={i} keyNumber={i}  delete={this.delete.bind(this)} source={source} data={this.state.data} />
            )
        });

         return(
                 <View  style={styles.container}>
                     <ScrollView>
                         <OurForm show ={this.show.bind(this)}  img={img} onSubmit ={this.upload.bind(this)}/>
                     </ScrollView>
                         <Footer navigation ={this.props.navigation}/>

                 </View>
         )
}}

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




function mapStateToProps (state) {
    return {
        user: state
    }
}

export default connect(mapStateToProps)(Appp);
