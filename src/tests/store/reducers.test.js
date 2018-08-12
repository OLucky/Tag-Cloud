import {tags, settings} from "../../store/reducers";
import {CHANGE_SETTING, CHANGE_COLOR, ADD_COLOR, REMOVE_COLOR} from "../../store/actions";

describe("Reducers", () => {

	describe("Tags Reducer", () => {
		const mockState = [{label:"Test", id:"Hi"}];

		test("should return state", () => {
			expect(tags(mockState, {})).toEqual(mockState);
		});
		
	});

	describe("Settings Reducer", () => {
		const mockState = {mockSetting:"Test", colors: ["#FFFFFF"]};

		test("should return state", () => {
			expect(settings(mockState, {})).toEqual(mockState);
		});

		test("should change a setting", () => {
			const setting = {label: "mockSetting", value: "newTest"};
			expect(settings(mockState, {type: CHANGE_SETTING, setting}))
				.toEqual(Object.assign({}, mockState, {[setting.label]: setting.value}));
		});

		test("should change a color", () => {
			const color = "#111222";
			const index = 0;
			expect(settings(mockState, {type: CHANGE_COLOR, color, index}))
				.toEqual(Object.assign({}, mockState, {colors: [color]}));
		});

		test("should add a color", () => {
			expect(settings(mockState, {type: ADD_COLOR}))
				.toEqual(Object.assign({}, mockState, {colors: [].concat(mockState.colors, ["#FFFFFF"])}));
		});

		test("should remove a color", () => {
			const index = 0;
			expect(settings(mockState, {type: REMOVE_COLOR, index}))
				.toEqual(Object.assign({}, mockState, {colors: []}));
		});

	});
});