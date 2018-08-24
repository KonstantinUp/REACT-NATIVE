import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';

import {TripsScreen,InitialScreen,DetailsScreen} from './src/pages/index'



const AppStack = createStackNavigator({Initial:InitialScreen,Trips: TripsScreen,Details:DetailsScreen},{initialRouteName: 'Initial'});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
               <AppStack/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
