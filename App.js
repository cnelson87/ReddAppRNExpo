import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';

import store from './src/store/store';

const styles = StyleSheet.create({
	body: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	section: {
		marginVertical: 20,
		paddingHorizontal: 20,
	},
	title: {
		color: '#000',
		fontSize: 24,
		fontWeight: '600',
		marginVertical: 5,
	},
	text: {
		color: '#333',
		fontSize: 18,
		fontWeight: '400',
		marginVertical: 5,
	},
	strong: {
		fontWeight: '700',
	},
});

function App() {
	return (
		<Provider store={store}>
			<SafeAreaView style={styles.body}>
				<StatusBar style="auto" />
				<View style={styles.section}>
					<Text style={styles.title}>React Native</Text>
					<Text style={styles.text}>
						Edit <Text style={styles.strong}>App.js</Text> to change this screen and then come back to see your edits.
					</Text>
				</View>
			</SafeAreaView>
		</Provider>
	);
}

export default App;
