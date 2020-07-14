import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';

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
					<TouchableHighlight
						style={styles.button}
						underlayColor={'light-blue'}
						onPress={() => navigation.push('PostDetail')}>
						<Text style={styles.buttonText}>Go to PostDetail</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.button}
						underlayColor={'light-blue'}
						onPress={() => navigation.push('Subreddit')}>
						<Text style={styles.buttonText}>Go to Subreddit</Text>
					</TouchableHighlight>
					<TouchableHighlight
						style={styles.button}
						underlayColor={'light-blue'}
						onPress={() => navigation.push('User')}>
						<Text style={styles.buttonText}>Go to User</Text>
					</TouchableHighlight>
				</View>
			</SafeAreaView>
		);
	}
}

export default HomeScreen;
