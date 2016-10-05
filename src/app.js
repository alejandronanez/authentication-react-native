
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/login_form';

class App extends Component {
	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyASF3S7nrVTCnxU3PabadiAUwyfNFKZXB0',
			authDomain: 'authentication-5e38a.firebaseapp.com',
			databaseURL: 'https://authentication-5e38a.firebaseio.com',
			storageBucket: 'authentication-5e38a.appspot.com',
			messagingSenderId: '400871418004'
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication!" />
				<LoginForm />
			</View>
		);
	}
}

export default App;
