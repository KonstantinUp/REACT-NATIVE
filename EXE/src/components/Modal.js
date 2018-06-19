import React, {Component} from 'react';
import {Text, TouchableHighlight, View,Dimensions,TextInput,Platform,Alert,FlatList,StyleSheet,TouchableOpacity} from 'react-native';

import Modal from 'react-native-modal'
import Button from 'react-native-button'
import Footer from "./Footer";
import RadioForm,{RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import RadioGroup from 'react-native-radio-buttons-group';

let screen = Dimensions.get('window');
export default class ModalExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            modalVisible: false,
            newValue:null,
            code:null,
            isDisabled: true,
            password:null,
            newPassword:null,
            newPasswordRepeat:null,
            flatListData:[{value:1,label:'Astana'},{value:2,label:'Almaty'},{value:3,label:'Atyrau'},{value:4,label:'Shymkent2'},{value:5,label:'Shymkent3'},{value:6,label:'Shymkent4'},{value:7,label:'Shymkent'}],
            selectCity:null

        }
    }


     showModal(){
         this.setState((prev)=>{   console.log(prev);  return ({modalVisible:!prev.modalVisible})})
      };


    changeValue(value){
         this.setState({newValue:value})
    }
    newCode(value){
        this.setState({code:value})
    }

     async getCode(){
         // try {
         //     let response = await fetch ('########',{
         //         method:'POST',
         //         headers:{
         //             'Accept':'application/json',
         //             'Content-Type':'application/json',
         //         },
         //         body:JSON.stringify({
         //             session:{
         //                 email:this.state.newValue,
         //             }
         //         })
         //     });
         //
         //     let res = await response.text();
         //     if(response.status >=200 && response.status < 300){
         //
         //         Alert.alert(
         //             'Alert Title',
         //             'Success change number',
         //             [
         //                 {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
         //                 {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
         //                 {text: 'OK', onPress: () => console.log('OK Pressed')},
         //             ],
         //             { cancelable: false }
         //         )
         //
         //
         //     } else{
         //         let error = res;
         //         throw error;
         //     }
         // } catch (error) {
         //
         //
         //
         // }
          new Promise((resolve,reject)=>{ setTimeout(()=>resolve('/folder'),3000)}).then((res)=>{

              Alert.alert(
                          'Status',
                          'Сode is sented you ',
                          [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => { this.setState({isDisabled:false})}},
                          ],
                          { cancelable: false }
                      )



          });

    }

    dataChange(){

        console.log(1);

        new Promise((resolve,reject)=>{ setTimeout(()=>resolve('/folder'),3000)}).then((res)=>{

            Alert.alert(
                'Status',
                ` ${this.props.label} is changed`,
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => { this.setState({modalVisible:false}) }},
                ],
                { cancelable: false }
            )


        });

    }

    telephoneChange(){
        console.log(32);
        new Promise((resolve,reject)=>{ setTimeout(()=>resolve('/folder'),3000)}).then((res)=>{
            Alert.alert(
                'Status',
                ` ${this.props.label} is changed`,
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => { this.setState({modalVisible:false}) }},
                ],
                { cancelable: false }
            )
        });
    }

     inputNewPassword(passwordCharacters){
        this.setState({newPassword:passwordCharacters})
    }
    inputNewPasswordRepeat(passwordCharacters){
        this.setState({newPasswordRepeat:passwordCharacters})
    }

    inputPassword(passwordCharacters){
        this.setState({password:passwordCharacters})
    }

    // renderItem = ({ item }) => {
    //     return (
    //         <View style = {{flex: 1, flexDirection: 'row'}}>
    //                 <Text>
    //                     {item.menu_desc}
    //                 </Text>
    //                 <Text>
    //                     {item.city}
    //                 </Text>
    //         </View>
    //     )
    // };

    onPress(data){
        console.log(data);
        this.setState({
            selectCity :data
        })
    }



    render() {

        let selectedButton = this.state.selectCity!== null ? this.state.selectCity.find(e => e.selected == true): "";

        selectedButton = selectedButton ? selectedButton.value : this.state.flatListData[0].value;

       // let radioButtonsArr =  this.state.flatListData.map((item,index)=>{
       //             return(<RadioButtonElement value={item.city}  key={item.key}  />)
       //  });

        // let flatListData = [{value:111,label:'Astana'},{value:222,label:'Almaty'},{value:333,label:'Atyrau'},{value:4,label:'Shymkent'},{value:5,label:'Shymkent'},{value:6,label:'Shymkent'},{value:7,label:'Shymkent'}];
      console.log(this.state);
        return (
                <Modal
                    isVisible={this.state.modalVisible}
                    ref={"myModal"}
                    onBackdropPress={() => this.setState({ modalVisible: false })}
                    style={{
                        justifyContent:'center',
                        borderRadius: Platform.OS === 'ios'  ? 30 : 0,
                        shadowRadius:10,
                    }}
                    // onModalHide={() => {
                    //     alert('Modal has been closed.');
                    // }}
                >
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'}}>



                        {this.props.label !== 'City' ? <View style={{
                            shadowRadius:10,
                            backgroundColor:'orange',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: 300,
                            height: 300}}>
                            <Text style={{color:'black',textAlign:'center',fontSize:18,fontWeight:'500'}}> Change field {this.props.label}</Text>
                            <View>
                                {this.props.label === 'Number' ? <Text> Еnter the new phone number, press get code, within 30 seconds message will come </Text> : <Text style={{display:'none'}}> </Text>}
                            </View>
                            {this.props.label !== 'Password' ? <TextInput
                                underlineColorAndroid='rgba(0,0,0,0)'
                                style={{
                                    height:40,
                                    borderBottomColor:'gray',
                                    marginLeft:30,
                                    marginRight:30,
                                    marginTop:20,
                                    marginBottom:10,
                                    borderBottomWidth:1,
                                    textAlign:'center'
                                }}
                                placeholder="Enter new value"
                                value={this.state.newValue !== null ? this.state.newValue : this.props.name}
                                onChangeText = {(text)=> this.changeValue(text)}
                            />: <TextInput
                                underlineColorAndroid='rgba(0,0,0,0)'
                                style={{
                                    height:40,
                                    borderBottomColor:'gray',
                                    marginLeft:30,
                                    marginRight:30,
                                    marginTop:10,
                                    marginBottom:10,
                                    borderBottomWidth:1,
                                    textAlign:'center'
                                }}
                                placeholder="Enter your password"
                                value={ this.state.password}
                                onChangeText = {(text)=> this.inputPassword(text)}
                            /> }
                            {this.props.label === 'Password'?
                                <TextInput
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    style={{
                                        height:40,
                                        borderBottomColor:'gray',
                                        marginLeft:30,
                                        marginRight:30,
                                        marginTop:10,
                                        marginBottom:10,
                                        borderBottomWidth:1,
                                        textAlign:'center'
                                    }}
                                    placeholder="Enter new password"
                                    secureTextEntry={true}
                                    value={this.state.newPassword}
                                    onChangeText = {(text)=> this.inputNewPassword(text)}
                                />: <Text style={{display:'none'}}> </Text>}
                            {this.props.label === 'Password'?
                                <TextInput
                                    underlineColorAndroid='rgba(0,0,0,0)'
                                    style={{
                                        height:40,
                                        borderBottomColor:'gray',
                                        marginLeft:30,
                                        marginRight:30,
                                        marginTop:10,
                                        marginBottom:10,
                                        borderBottomWidth:1,
                                        textAlign:'center'
                                    }}
                                    placeholder="Repeat new password"
                                    secureTextEntry={true}
                                    value={this.state.newPasswordRepeat}
                                    onChangeText = {(text)=> this.inputNewPasswordRepeat(text)}
                                />: <Text style={{display:'none'}}> </Text>}
                             <Button
                                 style={{fontSize:18,color:'white'}}
                                 containerStyle = {{
                                     marginHorizontal:70,
                                     height:40,
                                     backgroundColor:'black',
                                     justifyContent:'center',
                                     borderRadius:25,
                                 }}
                                 onPress={this.props.label === 'Number' ? this.getCode.bind(this):this.dataChange.bind(this)}
                             >
                                 {this.props.label !== 'Number'? 'change': 'Get code'}
                             </Button>
                            {this.props.label === 'Number'? <TextInput
                                underlineColorAndroid='rgba(0,0,0,0)'
                                style={{
                                    height:40,
                                    borderBottomColor:'gray',
                                    marginLeft:30,
                                    marginRight:30,
                                    marginTop:20,
                                    marginBottom:10,
                                    borderBottomWidth:1,
                                    textAlign:'center'
                                }}
                                placeholder="Enter got code"
                                value={this.state.code}
                                onChangeText = {(text)=> this.newCode(text)}
                            /> : <Text style={{display:'none'}}> </Text>}
                            {this.props.label === 'Number'? <Button
                                style={{fontSize:18,color:'white'}}
                                containerStyle = {{
                                    marginHorizontal:70,
                                    height:40,
                                    backgroundColor:'black',
                                    justifyContent:'center',
                                    borderRadius:25,
                                }}
                                styleDisabled={{ color: 'black' }}
                                disabledContainerStyle={{ backgroundColor: 'pink' }}
                                disabled={this.state.isDisabled}
                                onPress={this.telephoneChange.bind(this)}
                            >
                                {'change'.toUpperCase()}
                            </Button>: <Text style={{display:'none'}}> </Text>}
                        </View>  :

                                <View style = { styles.modalView }>
                                    <RadioGroup radioButtons={this.state.flatListData}  onPress={this.onPress.bind(this)} />
                                    <Text style={{ fontSize: 18, marginBottom: 50 }}>
                                        Value = {selectedButton}
                                    </Text>
                                    <Button
                                        style={{fontSize:18,color:'white'}}
                                        containerStyle = {{
                                            marginHorizontal:70,
                                            height:40,
                                            backgroundColor:'black',
                                            justifyContent:'center',
                                            borderRadius:25,
                                        }}
                                        onPress={() => this.setState({ modalVisible: false })}
                                    > change</Button>
                                </View>

                            }

                    </View>




                </Modal>
        );
    }
}



const styles = StyleSheet.create({
    modalView: {
        flex:1,
        borderRadius: 10,
        borderWidth: 1,

        backgroundColor:'orange',

    },


});