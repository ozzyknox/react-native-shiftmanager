import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: 'AIzaSyBpGA92jsaNUMTdKlOoWjW4Zrvvv3lA-SU',
            authDomain: 'rn-manager-cf871.firebaseapp.com',
            databaseURL: 'https://rn-manager-cf871.firebaseio.com',
            storageBucket: 'rn-manager-cf871.appspot.com',
            messagingSenderId: '14584744390'
        };
        firebase.initializeApp(config);        
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;
