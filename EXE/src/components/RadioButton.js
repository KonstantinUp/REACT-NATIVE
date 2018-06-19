import React, { Component } from 'react';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
import {Text,View} from 'react-native';

export default class RadioButtonElement extends React.Component {

    render() {
        return (
            <RadioButton  value={`${this.props.value}`}>
                <Text style={{zIndex:10000}}>Blue Dot</Text>
            </RadioButton>
        )

    }
}




