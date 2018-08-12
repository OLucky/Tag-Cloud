import {getTagsCloudData, getTagDetailsData} from "../../store/selectors";
import {tagsArray} from "../../store/data/tagsArray";

const oneTag = tagsArray[0];
const mockState = {tags: [oneTag]};

describe("Selectors", () => {

	test("getTagsCloudData returns needed data", () => {
		expect(getTagsCloudData(mockState)).toEqual([{
			label: oneTag.label,
			id: oneTag.id,
			sentimentScore: oneTag.sentimentScore
		}]);
	});

	test("getTagDetailsData returns needed data", () => {
		expect(getTagDetailsData(mockState, {id: oneTag.id})).toEqual({
			label: oneTag.label,
			id: oneTag.id,
			sentiment: oneTag.sentiment,
			pageType: oneTag.pageType,
			volume: oneTag.volume
		});
	});
	
});