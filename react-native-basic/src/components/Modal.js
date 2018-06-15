import React, {Component} from 'react';
import { Text, TouchableHighlight, View,Dimensions,TextInput,Platform} from 'react-native';

import Modal from 'react-native-modal'
import Button from 'react-native-button'



var screen = Dimensions.get('window');
export default class ModalExample extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            modalVisible: false,
            newValue:null

        }
    }


     showModal(){
         this.setState((prev)=>{   console.log(prev);  return ({modalVisible:!prev.modalVisible})})
      };


     changeValue(value){
         this.setState({newValue:value})
     }


    render() {

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
                    onModalHide={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',

                        alignItems: 'center'}}>
                        <View style={{
                            shadowRadius:10,
                            backgroundColor:'orange',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: 300,
                            height: 300}}>
                            <Text style={{color:'black',textAlign:'center',fontSize:18,fontWeight:'500'}}> Change field {this.props.label}</Text>
                            <TextInput
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
                            />
                        </View>
                    </View>




                </Modal>
        );
    }
}

