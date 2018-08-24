import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,ScrollView} from 'react-native';
import TripListRow from '../../components/tripsListRow'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TripsScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome to the app!',
        header: null
    };
      constructor(props){
          super(props)
      }

    render() {
        let {navigation} = this.props;
        let tripsList = navigation.state.params.tripsData;
        console.log(tripsList);
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.styleText}> Сортировать по :</Text>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={this.onPress}
                    >
                        <Text style={styles.styleText}> Времени </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        // onPress={this.onPress}
                    >
                        <Text style={styles.styleText}> Цене </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.body}>
                    <Text style={styles.tableDescriptionStyle}>Шапка списка рейсов слева на право : {"\n"}
                        город отбытия/город прибытия/дата и время отбытия/дата и время прибытия/цена билета</Text>
                    <ScrollView>
                        {
                            tripsList.map((trip,i) => {
                                return <TripListRow trip={trip} key={i} i={i}/>
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor:  '#1d2324',
    },
    header:{
        justifyContent:'flex-end',
        height:40,
        flexDirection:'row',
        marginRight: 20,
        alignItems: 'center',
        paddingBottom: 20
    },
    body:{
        flex: 1,
        backgroundColor: 'lightgray'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#7fdd8a',
        padding: 10,
        width:wp('25%'),
        marginRight: 5,
        marginLeft: 5,
        borderRadius:5
    },
    styleText:{
     fontSize:wp('4%'),
     color:'white'
    },
    tableDescriptionStyle:{
        paddingLeft: 8,
        backgroundColor:  '#1d2324',
        marginVertical: 5,
        paddingVertical: 10,
        color:'white',
        fontSize:wp('3%'),
    }
});