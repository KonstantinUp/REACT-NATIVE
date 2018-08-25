import React from 'react';
import { StyleSheet, View,StatusBar,ActivityIndicator} from 'react-native';

export default class TripDetailsloadingScreen extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
    }

    componentDidMount(){

        new Promise((resolve,reject)=>{
            setTimeout(()=>{resolve( '{"stops": "эропорт - Фабрика Рассвет,Речной вокзал-ТМК,п.Октябрьский - Заводская,п.Октябрьский-Детск.обл.больн.,Ивушка»-Мост","tripTime":"7","tripDistance":"30"}'

            )},10);
        })
            .then((res)=>{
                return JSON.parse(res);
            }).then((obj)=>{
            this.props.navigation.replace('Details',{stops:obj.stops,tripTime:obj.tripTime,tripDistance:obj.tripDistance,tripNumber:this.props.navigation.state.params.tripNumber});
        })
            .catch((error)=>{
                console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff"/>
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