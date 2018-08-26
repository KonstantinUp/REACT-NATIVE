import React from 'react';
import { StyleSheet, View,StatusBar,ActivityIndicator,Text,TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from "react-native-responsive-screen";

export default class TripRow extends React.Component {

    constructor(props){
        super(props)
    }

    handleGetTripDetails =(tripNumber)=>{
        this.props.navigation.navigate('TripDetailsloading',{tripNumber:tripNumber});
    };

    render() {
        let {trip,i} = this.props;

        let hoursStart;
        let minStart;
        let secStart;
        let monthStart;
        let dayNumberStart;
        let monthNumberStart;
        let yearStart;

        let hoursEnd;
        let minEnd;
        let secEnd;
        let monthEnd;
        let dayNumberEnd;
        let monthNumbeEnd;
        let yearEnd;

        let startTime =  new Date(trip.dateTimeFrom);
        let endTime =  new Date(trip.dateTimeTo);

        hoursStart = startTime.getHours();
        minStart = startTime.getMinutes();
        secStart = startTime.getSeconds();
        dayNumberStart = startTime.getDate();
        monthStart = startTime.getMonth() + 1;
        monthNumberStart = monthStart < 9 || monthStart === 9 ? '0' + monthStart : monthStart;
        yearStart = startTime.getFullYear();

        hoursEnd = endTime.getHours();
        minEnd = endTime.getMinutes();
        secEnd = endTime.getSeconds();
        dayNumberEnd = endTime.getDate();
        monthEnd = endTime.getMonth() + 1;
        monthNumbeEnd = monthEnd < 9 || monthEnd === 9 ? '0' + monthEnd : monthEnd;
        yearEnd = endTime.getFullYear();

        return (
            <TouchableOpacity style={styles.row}  onPress={()=> this.handleGetTripDetails(i)}>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>{trip.cityFrom}</Text>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>{trip.cityTo}</Text>
                </View>
                <View style={styles.cell}>
                    <View>
                        <Text style={styles.cellText}>{`${dayNumberStart}.${monthNumberStart}.${yearStart}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.cellText}>{`${hoursStart}:${minStart}:${secStart}`}</Text>
                    </View>
                </View>
                <View style={styles.cell}>
                    <View>
                        <Text style={styles.cellText}>{`${dayNumberEnd}.${monthNumbeEnd}.${yearEnd}`}</Text>
                    </View>
                    <View>
                        <Text style={styles.cellText}>{`${hoursEnd}:${minEnd}:${secEnd}`}</Text>
                    </View>
                </View>
                <View style={styles.cell}>
                    <Text style={styles.cellText}>{trip.price}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        backgroundColor:'orange',
        marginVertical: 2,
        opacity:0.5,
        paddingVertical: 30
    },
    cell:{
        flex: 1,
        alignSelf: 'center'
    },
    cellText:{
        textAlign:'center',
        fontSize:wp('3%')
    }
});