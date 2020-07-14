import React from 'react';
import { SafeAreaView, View, Text, TouchableHighlight } from 'react-native';

import axios from 'config/axios';
import styles from 'styles/styles';

class SubredditScreen extends React.Component {

	state = {
		sidebarData: null
	};

	componentDidMount() {
		// console.log('SubredditScreen:componentDidMount');
	}

	render() {
		const { navigation } = this.props;
		const { sidebarData } = this.state;

		return (
			<SafeAreaView style={styles.body}>
				<View style={styles.section}>
					<Text style={styles.title}>Subreddit Screen</Text>
					<Text style={styles.text}>
						Edit <Text style={styles.strong}>/views/SubredditScreen.js</Text> to change this screen and then come back to see your edits.
					</Text>
					<TouchableHighlight
						style={styles.button}
						underlayColor={'light-blue'}
						onPress={() => navigation.popToTop()}>
						<Text style={styles.buttonText}>Go to Home</Text>
					</TouchableHighlight>
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

export default SubredditScreen;
