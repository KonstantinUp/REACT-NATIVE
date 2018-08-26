import React from 'react';
import { StyleSheet,View,Text,TouchableOpacity,ScrollView} from 'react-native';
import TripRow from '../../components/tripsListRow'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class TripsScreen extends React.Component {
    static navigationOptions = {
        header: null
    };
      constructor(props){
          super(props);
          this.state={
              trips:[]
          }
      }

    componentWillMount(){
        let tripsArr  = this.props.navigation.state.params.tripsData;
        let tripsArrLenght = tripsArr.length;

        for (let i = 0; i < tripsArrLenght-1; i++) {
            for (let j = 0; j < tripsArrLenght-1-i; j++) {
                if (tripsArr[j+1].price < tripsArr[j].price) {
                    let t = tripsArr[j+1]; tripsArr[j+1] = tripsArr[j]; tripsArr[j] = t;
                  }
            }
        }
         this.setState({trips:tripsArr})
    }


    handleSortByPrice = () => {
        let tripsArr  = this.state.trips;
        let tripsArrLenght = tripsArr.length;

        for (let i = 0; i < tripsArrLenght-1; i++) {
            for (let j = 0; j < tripsArrLenght-1-i; j++) {
                if (tripsArr[j+1].price < tripsArr[j].price) {
                    let t = tripsArr[j+1]; tripsArr[j+1] = tripsArr[j]; tripsArr[j] = t;
                }
            }
        }
        this.setState({trips:tripsArr})
    };

    handleSortByTime = () => {
        let tripsArr  = this.state.trips;
        let tripsArrLenght = tripsArr.length;

        for (let i = 0; i < tripsArrLenght-1; i++) {
            for (let j = 0; j < tripsArrLenght-1-i; j++) {
                if (tripsArr[j+1].dateTimeFrom < tripsArr[j].dateTimeFrom) {
                    let t = tripsArr[j+1]; tripsArr[j+1] = tripsArr[j]; tripsArr[j] = t;
                }
            }
        }
        this.setState({trips:tripsArr})
    };

    render() {
        let {navigation} = this.props;
        let tripsList = this.state.trips;

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.styleText}> Сортировать по :</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handleSortByTime}
                    >
                        <Text style={styles.styleText}> Времени </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handleSortByPrice}
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
                                return <TripRow trip={trip} key={i} i={i} navigation={navigation}/>
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
        backgroundColor:  '#1d2324'
    },
    header:{
        justifyContent:'flex-end',
        height:40,
        flexDirection:'row',
        paddingRight: 20,
        alignItems: 'center',
        paddingBottom: 20,
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