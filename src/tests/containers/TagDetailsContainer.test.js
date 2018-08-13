import React from "react";
import {shallow} from "enzyme";
import toJson from "enzyme-to-json";
import {createMockStore} from "redux-test-utils";
import {StaticRouter} from "react-router-dom";

import "../config";

import TagDetailsContainer from "../../containers/TagDetailsContainer";
import {tagsArray} from "../../store/data/tagsArray";
import {settingsObject} from "../../store/data/settingsObject";


const oneTag = tagsArray[0];

const testState = {
	tags: [oneTag],
	settings: settingsObject
};

describe("TagDetails Container", () => {

	test("renders with children", () => {
		const mockStore = createMockStore(testState);
		const mockMatch = {params: {id: oneTag.id}};
		const context = {};

		const component = shallow(
			<StaticRouter context={context}>
				<TagDetailsContainer match={mockMatch}/>
			</StaticRouter>, 
			{context: {store: mockStore}});

		expect(toJson(component)).toMatchSnapshot();
	});

	test("has correct props", () => {
		const mockStore = createMockStore(testState);
		const mockMatch = {params: {id: oneTag.id}};
		const context = {};

		const component = shallow(
			<StaticRouter context={context}>
				<TagDetailsContainer match={mockMatch}/>
			</StaticRouter>, 
			{context: {store: mockStore}});

		expect(component.find(TagDetailsContainer).dive().props().tag).toEqual({
			label: oneTag.label,
			id: oneTag.id,
			sentiment: oneTag.sentiment,
			pageType: oneTag.pageType,
			volume: oneTag.volume
		});	
		expect(component.find(TagDetailsContainer).dive().props().settings).toEqual(settingsObject);	
	});

});