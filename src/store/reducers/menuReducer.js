import initialState from '../initialState';
import { TOGGLE_MENU } from '../actions/menu';

function menuReducer(menuOpen = initialState.menuOpen, action) {
	switch(action.type) {
		case TOGGLE_MENU:
			return !menuOpen;
		default:
			return menuOpen;
	};
}

export default menuReducer;
