import initialState from '../initialState';
import { TOGGLE_NSFW } from '../actions/nsfw';

function nsfwReducer(nsfwEnabled = initialState.nsfwEnabled, action) {
	switch(action.type) {
		case TOGGLE_NSFW:
			return !nsfwEnabled;
		default:
			return nsfwEnabled;
	};
}

export default nsfwReducer;
