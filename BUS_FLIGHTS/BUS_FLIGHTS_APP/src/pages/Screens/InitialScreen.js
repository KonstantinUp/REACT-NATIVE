import React from 'react';
import { StyleSheet, View,StatusBar,ActivityIndicator} from 'react-native';

export default class InitialScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
    }

    componentDidMount(){

        console.log(1111111111111111111111);
        new Promise((resolve,reject)=>{
                  setTimeout(()=>{resolve( '{"trips": [\n' +
                      '                          {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496120400,\n' +
                      '                              "dateTimeTo": 1496152800,\n' +
                      '                              "price": 350\n' +
                      '                          },\n' +
                      '                            {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496120400,\n' +
                      '                              "dateTimeTo": 1496152800,\n' +
                      '                              "price": 430\n' +
                      '                          },\n' +
                      '                             {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496120400,\n' +
                      '                              "dateTimeTo": 1496152800,\n' +
                      '                              "price": 300\n' +
                      '                          },\n' +
                      '                              {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496120400,\n' +
                      '                              "dateTimeTo": 1496152800,\n' +
                      '                              "price": 100\n' +
                      '                          },\n' +
                      '                               {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496120400,\n' +
                      '                              "dateTimeTo": 1496152800,\n' +
                      '                              "price": 500\n' +
                      '                          },\n' +
                      '                          {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496124000,\n' +
                      '                              "dateTimeTo": 1496145600,\n' +
                      '                              "price": 600\n' +
                      '                          },\n' +
                      '                          {\n' +
                      '                              "cityFrom": "Воронеж",\n' +
                      '                              "cityTo": "Москва",\n' +
                      '                              "dateTimeFrom": 1496116800,\n' +
                      '                              "dateTimeTo": 1496156400,\n' +
                      '                              "price": 700\n' +
                      '                          }\n' +
                      '                      ]\n' +
                      '                  }'
                  )},10);
        })
       .then((res)=>{

                return JSON.parse(res);
       }).then((obj)=>{

            this.props.navigation.replace('Trips',{tripsData:obj.trips});
       })
       .catch((error)=>{
           console.log('There has been a problem with your fetch operation: ' + error.message);
       });
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});