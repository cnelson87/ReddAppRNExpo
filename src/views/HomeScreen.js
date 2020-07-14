import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

import axios from 'config/axios';
import styles from 'styles/styles';

class HomeScreen extends React.Component {

	componentDidMount() {
		// console.log('HomeScreen:componentDidMount');
	}

	render() {
		const { navigation } = this.props;

		return (
			<SafeAreaView style={styles.body}>
				<View style={styles.section}>
					<Text style={styles.title}>Home Screen</Text>
					<Text style={styles.text}>
						Edit <Text style={styles.strong}>/views/HomeScreen.js</Text> to change this screen and then come back to see your edits.
					</Text>
					<Button
						title="Go to PostDetail"
						onPress={() => navigation.push('PostDetail')}
					/>
					<Button
						title="Go to Subreddit"
						onPress={() => navigation.push('Subreddit')}
					/>
					<Button
						title="Go to User"
						onPress={() => navigation.push('User')}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;
