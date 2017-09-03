import React from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import firebase from 'firebase';
import Router from './Router';

export default class App extends React.Component {
  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCPVFGyQ5InggXpmoopS-s1c_RC4bX9OFM",
      authDomain: "forumapp-283e9.firebaseapp.com",
      databaseURL: "https://forumapp-283e9.firebaseio.com",
      projectId: "forumapp-283e9",
      storageBucket: "forumapp-283e9.appspot.com",
      messagingSenderId: "309641255084"
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
