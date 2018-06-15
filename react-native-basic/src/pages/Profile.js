import React, { Component } from 'react';
import {
    AppRegistry,
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,

} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {Button} from 'react-native-elements'
import Paragraph from "../../src/components/Paragraph"




export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
    };

    constructor() {
        super();

        this.state = {
            paragraphsList: [{name: 'Konstantin', label: 'Name'}, {name: '+7 915 123 27 28', label: 'Number'}, {name: 'Karagandy', label: 'City'}, {name: '*********', label: 'Password'}]

        };
    }




        render() {

              var paragraphsArr = this.state.paragraphsList.map(function (item, i) {
                  return (<Paragraph key={i}  label={item.label}  name={item.name}/>)
               });

              console.log(paragraphsArr);
            return (
                <View style={{flex: 1, marginLeft: 20, marginTop: 20}}>
                        {paragraphsArr}
                </View>
            )
        }



}


