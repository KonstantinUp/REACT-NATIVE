import React from "react";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, StatusBar, ActivityIndicator,Image} from 'react-native';

export default class WrapperImage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            requestStatus: false
        }
    }


    _bootstrapAsync(data) {
        // return RNFetchBlob.fetch('POST', 'http://www.example.com/upload-form', {
        //     Authorization: "Bearer access-token",
        //     otherHeader: "foo",
        //     'Content-Type': 'multipart/form-data',
        // }, [{name: 'avatar-foo', filename: 'avatar-foo.png', type: 'image/foo', data: data}])

        return new Promise((resolve,reject)=>{ setTimeout(()=>resolve('/folder'),8000)});
    };

    componentDidMount() {
        this._bootstrapAsync(this.props.data).then((res) => this.setState(() => {
            console.log(res);  return {requestStatus: res}
        })).catch((res) => console.log('error'));
    }


    render() {


        if (this.state.requestStatus) {
            // console.log(100);
            return (
                <View style={{position: 'relative', height: 50, width: 50, marginHorizontal: 5}}>
                    <MaterialIcons name='plus-one' style={{position: 'absolute', right: 0, top: 0, zIndex: 20}}
                                   color='white' size={40} onPress={() => {
                        this.props.delete(this.props.keyNumber)
                    }}/>
                    <Image style={{height: 50, width: 50, marginHorizontal: 5}} source={this.props.source}/>
                </View>
            )
        } else {
            // console.log(1);
            return (
                <View>
                    <ActivityIndicator/>
                    <StatusBar barStyle="default"/>
                </View>
            );
        }

    }
}