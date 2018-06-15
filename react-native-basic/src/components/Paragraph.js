import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Button} from 'react-native-elements'
import ModalExample from './Modal'

export default class Paragraph extends React.Component {

    constructor(props) {
        super(props);
        this.windowModal = this.windowModal.bind(this);
    }

    windowModal(){
        this.refs.addModal.showModal();
    }

    render() {

        console.log(1);
        return (
            <View>
                <Text style={{color: 'black'}}> {this.props.label} </Text>
                <View style={{flexDirection: 'row', marginVertical: 15, alignItems: 'center'}}>
                        <Text style={{marginRight: 'auto'}}>{this.props.name}</Text>
                    <TouchableOpacity onPress={()=> this.windowModal()}>
                        <Text style ={styles.button}>изменить</Text>
                    </TouchableOpacity>
                </View>
                <ModalExample ref={'addModal'}   parent={this} label = {this.props.label} name={this.props.name}>

                </ModalExample>
            </View>


        )
    }

}




const styles = StyleSheet.create({
    button:{
        color:'blue',
        fontSize:16,
        fontWeight:'500'
    }


});
