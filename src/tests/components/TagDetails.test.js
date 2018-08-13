import React from "react";
import {render} from "enzyme";
import toJson from "enzyme-to-json";

import "../config";

import TagDetails from "../../components/TagDetails/TagDetails";

import {tagsArray} from "../../store/data/tagsArray";
import {settingsObject} from "../../store/data/settingsObject";

const oneTag = tagsArray[0];

describe("TagDetails component", () => {

	test("renders correctly with children", () => {
		const mockData = {
			label: oneTag.label,
			id: oneTag.id,
			sentiment: oneTag.sentiment,
			pageType: oneTag.pageType,
			volume: oneTag.volume
		};

		const mockHistory = {
			goBack: jest.fn()
		};

		const component = render(<TagDetails tag={mockData} settings={settingsObject} history={mockHistory}/>);

		expect(toJson(component)).toMatchSnapshot();
	});

});