import {combineReducers} from "redux";

import {tagsArray} from "./data/tagsArray";
import {settingsObject} from "./data/settingsObject";

import {CHANGE_SETTING, CHANGE_COLOR, ADD_COLOR, REMOVE_COLOR} from "./actions";

const tags = (state = tagsArray, action) => {
	switch (action.type) {
	default: {
		return state;
	}
	}
};

const settings = (state = settingsObject, action) => {
	switch (action.type) {
	case CHANGE_SETTING: {
		const {setting} = action;
		return Object.assign({}, state, {[setting.label]: setting.value});
	}	
	case CHANGE_COLOR: {
		const {color, index} = action;
		return Object.assign({}, state, {colors: state.colors.map((item, i) => i === index ? color : item)});
	}
	case ADD_COLOR: {
		return Object.assign({}, state, {colors: [].concat(state.colors, ["#FFFFFF"])});
	}	
	case REMOVE_COLOR: {
		const {index} = action;
		return Object.assign({}, state, {colors: state.colors.filter((item, i) => i !== index)});
	}	
	default: {
		return state;
	}
	}
};


export default combineReducers({tags, settings});