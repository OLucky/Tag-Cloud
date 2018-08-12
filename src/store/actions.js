export const CHANGE_SETTING = "CHANGE_SETTING";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const ADD_COLOR = "ADD_COLOR";
export const REMOVE_COLOR = "REMOVE_COLOR";

export const changeSetting = setting => ({type:CHANGE_SETTING, setting});
export const changeColor = (color, index) => ({type:CHANGE_COLOR, color, index});
export const addColor = () => ({type:ADD_COLOR});
export const removeColor = index => ({type:REMOVE_COLOR, index});