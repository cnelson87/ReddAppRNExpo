import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import store from './src/store/store';
import HomeScreen from './src/views/HomeScreen';
import PostDetailScreen from './src/views/PostDetailScreen';
import SubredditScreen from './src/views/SubredditScreen';
import UserScreen from './src/views/UserScreen';

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Provider store={store}>
				<StatusBar style="auto" />
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{
						headerTitle: null,
						headerBackTitleVisible: false,
						// headerTransparent: true,
						// headerStyle: {
						//
						// },
					}}
				>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="PostDetail" component={PostDetailScreen} />
					<Stack.Screen name="Subreddit" component={SubredditScreen} />
					<Stack.Screen name="User" component={UserScreen} />
				</Stack.Navigator>
			</Provider>
		</NavigationContainer>
	);
}

export default App;
