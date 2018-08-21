import React from 'react';
import { StyleSheet,View,Text} from 'react-native';



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

        return (
            <View style={styles.container}>
                <View  style = {styles.body}>


                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});