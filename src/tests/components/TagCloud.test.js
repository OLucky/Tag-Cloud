import React from "react";
import {render, shallow} from "enzyme";
import toJson from "enzyme-to-json";
import { StaticRouter } from "react-router";

import "../config";

import TagCloud from "../../components/TagCloud/TagCloud";
import TagCloudSettings from "../../components/TagCloud/TagCloudSettings";

import {tagsArray} from "../../store/data/tagsArray";
import {settingsObject} from "../../store/data/settingsObject";

const oneTag = tagsArray[0];

const mockData = [{
	label: oneTag.label,
	id: oneTag.id,
	sentimentScore: oneTag.sentimentScore
}];

global.Math.random = () => 0.5;
const context = {};

describe("TagCloud component", () => {

	test("renders correctly with children", () => {
		const onSettingChange = jest.fn();
		const onColorChange = jest.fn();
		const onColorAdd = jest.fn();
		const onColorRemove = jest.fn();

		const component = render(
			<StaticRouter context={context}>
				<TagCloud tags={mockData} settings={settingsObject} 
					onSettingChange={onSettingChange} onColorChange={onColorChange} onColorAdd={onColorAdd} onColorRemove={onColorRemove}/>
			</StaticRouter>);

		expect(toJson(component)).toMatchSnapshot();
	});

	describe("TestCloudSettings component", () => {

		test("calls setting actions", () => {
			const onSettingChange = jest.fn();
			const onColorChange = jest.fn();
			const onColorAdd = jest.fn();
			const onColorRemove = jest.fn();

			const component = shallow(<TagCloudSettings settings={settingsObject}
				onSettingChange={onSettingChange} onColorChange={onColorChange} onColorAdd={onColorAdd} onColorRemove={onColorRemove}/>);

			component.find("[type='number']").at(0).simulate("change", {target: {value: 1}});
			expect(onSettingChange.mock.calls.length).toBe(1);	
			expect(onSettingChange.mock.calls[0]).toEqual([{label: "minFontSize", value: 1}]);
		});

		test("calls color actions", () => {
			const onSettingChange = jest.fn();
			const onColorChange = jest.fn();
			const onColorAdd = jest.fn();
			const onColorRemove = jest.fn();

			const component = shallow(<TagCloudSettings settings={settingsObject}
				onSettingChange={onSettingChange} onColorChange={onColorChange} onColorAdd={onColorAdd} onColorRemove={onColorRemove}/>);

			component.find("[type='color']").at(0).simulate("change", {target: {value: "#FFFFFF"}});
			expect(onColorChange.mock.calls.length).toBe(1);	
			expect(onColorChange.mock.calls[0]).toEqual(["#FFFFFF", 0]);	

			component.find(".tag-cloud_settings_add-color-btn").simulate("click");
			expect(onColorAdd.mock.calls.length).toBe(1);

			component.find(".tag-cloud_settings_remove-color-btn").at(0).simulate("click");
			expect(onColorRemove.mock.calls.length).toBe(1);
			expect(onColorRemove.mock.calls[0]).toEqual([0]);	
		});
	});

});
