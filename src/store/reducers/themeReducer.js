import initialState from '../initialState';
import { TOGGLE_THEME } from '../actions/theme';

function themeReducer(isDarkTheme = initialState.isDarkTheme, action) {
	switch(action.type) {
		case TOGGLE_THEME:
			return !isDarkTheme;
		default:
			return isDarkTheme;
	};
}

export default themeReducer;
