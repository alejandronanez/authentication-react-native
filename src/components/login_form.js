
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common'; 

class LoginForm extends Component {
	state = {
		email: '',
		password: '',
		error: '',
		loading: false
	};

	onButtonPress() {
		const {
			email,
			password
		} = this.state;

		this.setState({
			error: '',
			loading: true
		});

		const { auth } = firebase;

		auth()
			.signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				auth()
					.createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginFail() {
		this.setState({
			loading: false,
			error: 'Authentication failed.'
		});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			error: '',
			loading: false
		});
	}

	renderButton() {
		const { loading } = this.state;

		if (loading) {
			return <Spinner size="small" />;
		}

		return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
	}

	render() {
		const { errorTextStyle } = styles;

		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
						secureTextEntry
					/>
				</CardSection>

				<Text style={errorTextStyle} >
					{this.state.error}
				</Text>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
