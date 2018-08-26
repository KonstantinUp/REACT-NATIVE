import React from 'react';
import { StyleSheet,View,Text} from 'react-native';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Дополнительная информация о рейсе",
        headerTitleStyle : {fontSize:wp('4%'),color:'white',marginHorizontal:0},
        headerStyle:{
            backgroundColor:  '#1d2324',
        },
        headerBackTitleStyle: {
            color: 'white',
        },
        headerTintColor: 'white'
    });

    render() {
        let {navigation} = this.props;
        let stops = navigation.state.params.stops;
        let tripTime = navigation.state.params.tripTime;
        let tripDistance = navigation.state.params.tripDistance;
        let tripNumber = navigation.state.params.tripNumber;

        return (
            <View style={styles.container}>
                <View  style = {styles.body}>
                    <View style={styles.row}>
                        <Text style={styles.rowText} >{`Номер рейса : ${tripNumber}`}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>{`Общее время в пути : ${tripTime} ч`}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>{`Расстояние : ${tripDistance} км`}</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.rowText}>{`Остановки : ${stops}`}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    body:{
        flex: 1,
        backgroundColor: 'lightgray',
        paddingLeft: 15,
        paddingTop: 10
    },
    row:{
        paddingVertical: 5,
    },
    rowText:{
      fontSize:wp('3%')
    }
});