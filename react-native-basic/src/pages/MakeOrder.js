// import React from 'react';
// import {
//     StyleSheet,
//     Text,
//     View,
//     TextInput,
//     TouchableOpacity,
//     ScrollView,
//     Image,
//     PermissionsAndroid,
//     Platform,
//     Alert
// } from 'react-native';
// import Footer from '../components/Footer'
// import { FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import pick from '../../src/components/imagePicker'
// import WrapperImage from '../../src/components/ImageWrapper'
// import RNFetchBlob from 'react-native-fetch-blob'
//
//
//
// export default class MakeOrderScreen extends React.Component {
//     static navigationOptions = {
//         title: 'Make Order',
//     };
//     constructor(props) {
//         super(props);
//         this.state = {
//             avatarData: {},
//             datas: [],
//             name: null,
//             message: null,
//             formData: [],
//             imgs: [],
//             avatarSource:[]
//         }
//     }
//     async  componentDidMount() {
//          // await this.requestCameraPermission();
//     }
//
//
//     show (){
//        pick((source,data) => this.setState(previousState => {
//
//            var getArrAvatarData = previousState.avatarSource;
//            getArrAvatarData.push(source);
//            return {avatarData:{source:getArrAvatarData,data:data}};
//           }))
//     }
//
//     delete(i){
//             this.setState((previousState)=> {
//                 var getArrAvatarData = previousState.avatarSource;
//                 getArrAvatarData.splice(i, 1);
//                 return {avatarSources: getArrAvatarData}
//             })
//     }
//
//
//     upload(){
//         console.log(1);
//
//         let datasArr =  this.state.datas.length === 0  ? null :   this.state.datas.map ((data)=> {
//             return(
//                 {name:'avatar',filename:'avatar.png',data:data}
//             )
//         });
//
//         if(this.state.name !== null && this.state.message !== null){
//             if(this.state.datas.length !== 0){
//                 this.state.formData.push(datasArr);
//                 console.log( this.state.formData);
//             }
//             this.state.formData.push({ name : 'info', data: JSON.stringify({name : this.state.name, message : this.state.message})})
//         }
//
//
//
//         if(this.state.name !== null && this.state.message !== null){
//
//             RNFetchBlob.fetch('POST', 'http://192.168.1.19:8080/', {
//                     Authorization : "Bearer access-token",
//                     otherHeader : "foo",
//                     'Content-Type' : 'multipart/form-data'
//                 }, this.state.formData,
//
//             )
//                 .then((res) => {console.log(res);})
//                 .catch((err) => {})
//
//         } else{
//
//             Alert.alert(
//                 'FORM',
//                 'Fill in all the fields',
//                 [
//                     {text: 'OK', onPress: () => console.log('OK Pressed')},
//                 ],
//                 { cancelable: false }
//             )
//         }
//
//
//     }
//
//
//     changeOrderName(value){
//         this.setState({name:value});
//     }
//
//     changeMessage(value){
//         this.setState({message:value});
//     }
//
//
//
//     render(){
//
//         var  img =  this.state.avatarSource.length === 0  ? null :   this.state.avatarSource.map ( (source,i)=> {
//
//             return(
//                 <WrapperImage  key={i} keyNumber={i}  delete={this.delete.bind(this)} source={source} data={this.state.data} />
//             )
//         });
//
//
//         return(
//             <View  style={styles.container}>
//                 <View style={styles.form_container}>
//                     <ScrollView  contentContainerStyle={{flex:1,alignItems:'center',justifyContent:'center'}}>
//                             <FormLabel  labelStyle={styles.formLabel}> Name </FormLabel>
//                             <FormInput  underlineColorAndroid={'transparent'} maxLength = {40}  inputStyle={styles.inputBox} onChangeText = {(text)=> this.changeOrderName(text)}/>
//                             <FormLabel  labelStyle={styles.formLabel}> Your message </FormLabel>
//                             <FormInput  underlineColorAndroid={'transparent'}  maxLength = {100}  multiline = {true}  numberOfLines = {4} inputStyle={styles.inputBox} onChangeText = {(text)=> this.changeMessage(text)}/>
//                             <MaterialIcons name='add-a-photo'   color='#353a37' size={40}  style ={{marginVertical:10}} onPress={this.show.bind(this)} />
//                             <View style={{flexDirection:'row'}}>
//                                {img}
//                             </View>
//                             <TouchableOpacity style = {styles.buttonSubmit}  onPress={()=> this.upload()}>
//                                 <Text style ={styles.submitText}>Submit</Text>
//                             </TouchableOpacity>
//                     </ScrollView>
//                 </View>
//                 <Footer navigation ={this.props.navigation}/>
//             </View>
//         )
//     }
//
//
//
//
//
//
//
//
//
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     },
//     form_container:{
//         justifyContent:'center',
//         alignItems:'center',
//         flex: 1,
//     },
//     inputBox:{
//         width:300,
//         backgroundColor:'#353a37',
//         color:'white',
//         fontSize: 20,
//         borderRadius:10,
//         textAlign:'center',
//     },
//     submitText:{
//         fontSize:16,
//         fontWeight:'500',
//         color:'#ffffff',
//         textAlign:'center'
//     },
//     buttonSubmit:{
//         width:300,
//         backgroundColor:"#1c313a",
//         borderRadius:10,
//         marginVertical:10,
//         paddingVertical:12,
//     },
//     formLabel:{
//         fontWeight: '300',
//         fontSize:20,
//         marginBottom:10,
//         textAlign:'left',
//         width:300
//     }
// });
