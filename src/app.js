
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/login_form';

class App extends Component {

	state = {
		loggedIn: null
	};

	componentWillMount() {
		const config = {
			apiKey: 'AIzaSyASF3S7nrVTCnxU3PabadiAUwyfNFKZXB0',
			authDomain: 'authentication-5e38a.firebaseapp.com',
			databaseURL: 'https://authentication-5e38a.firebaseio.com',
			storageBucket: 'authentication-5e38a.appspot.com',
			messagingSenderId: '400871418004'
		};

		firebase.initializeApp(config);

		firebase.auth().onAuthStateChanged((user) => {
			// Listen for auth updates -> login/logout
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
					<Button onPress={() => firebase.auth().signOut()}>
						Log Out
					</Button>
				);
			case false:
				return <LoginForm />;
			default:
				return <Spinner size="large" />;
		}
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication!" />
				{this.renderContent()}
			</View>
		);
	}
}

export default App;
