import React from 'react';
import RootNav from './src/rootNav';
import {Provider} from "react-redux";
import store from "./src/boot/store"

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <RootNav/>
        </Provider>
    );
  }
}
