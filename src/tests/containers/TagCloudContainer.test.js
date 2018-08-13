import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {createMockStore} from "redux-test-utils";
import {StaticRouter} from "react-router-dom";

import "../config";

import TagCloudContainer from "../../containers/TagCloudContainer";
import TagCloud from "../../components/TagCloud/TagCloud";
import TagCloudSettings from "../../components/TagCloud/TagCloudSettings";
import {CHANGE_SETTING, CHANGE_COLOR, ADD_COLOR, REMOVE_COLOR} from "../../store/actions";
import {tagsArray} from "../../store/data/tagsArray";
import {settingsObject} from "../../store/data/settingsObject";


const oneTag = tagsArray[0];

const testState = {
	tags: [oneTag],
	settings: settingsObject
};

describe("TagCloud Container", () => {

	test("renders with children", () => {
		const mockStore = createMockStore(testState);
		const context = {};

		const component = shallow(
			<StaticRouter context={context}>
				<TagCloudContainer />
			</StaticRouter>, 
			{context: {store: mockStore}});

		expect(toJson(component)).toMatchSnapshot();
	});

	test("has correct props", () => {
		const mockStore = createMockStore(testState);

		const component = shallow(
			<TagCloudContainer />,
			{context: {store: mockStore}});

		expect(component.props().tags).toEqual([{
			label: oneTag.label,
			id: oneTag.id,
			sentimentScore: oneTag.sentimentScore
		}]);	
	});

	test("dipatches correct actions", () => {
		const mockStore = createMockStore(testState);

		const component = shallow(
			<TagCloudContainer />,
			{context: {store: mockStore}});

		const settingsComponent = component.find(TagCloud).dive().find(TagCloudSettings).dive();	

		settingsComponent.find("[type='number']").at(0).simulate("change", {target: {value: 1}});
		settingsComponent.find("[type='color']").at(0).simulate("change", {target: {value: "#FFFFFF"}});
		settingsComponent.find(".tag-cloud_settings_add-color-btn").simulate("click");
		settingsComponent.find(".tag-cloud_settings_remove-color-btn").at(0).simulate("click");

		const actions = mockStore.getActions();
		expect(actions).toEqual([
			{type: CHANGE_SETTING, setting: {label: "minFontSize", value: 1}},
			{type: CHANGE_COLOR, color: "#FFFFFF", index: 0},
			{type: ADD_COLOR},
			{type: REMOVE_COLOR, index: 0} 
		]);
	});

});