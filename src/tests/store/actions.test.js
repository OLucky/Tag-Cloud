import {addColor, ADD_COLOR, changeSetting, CHANGE_SETTING, changeColor, CHANGE_COLOR, removeColor, REMOVE_COLOR} from  "../../store/actions";

describe("Actions", () => {
	test("creates CHANGE_SETTING action", () => {
		const setting = {label: "minFontSize", value: "16"};
		expect(changeSetting(setting)).toEqual({type: CHANGE_SETTING, setting});
	});

	test("creates ADD_COLOR action", () => {
		expect(addColor()).toEqual({type: ADD_COLOR});
	});

	test("creates CHANGE_COLOR action", () => {
		const color = "#FFFFFF";
		const index = 0;
		expect(changeColor(color, index)).toEqual({type: CHANGE_COLOR, color, index});
	});

	test("creates REMOVE_COLOR action", () => {
		const index = 0;
		expect(removeColor(index)).toEqual({type: REMOVE_COLOR, index});
	});
	
});

