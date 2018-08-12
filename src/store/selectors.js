import { createSelector } from "reselect";

const getAllTags = state => state.tags;
const getTagById = (state, props) => state.tags.filter(item => item.id === decodeURIComponent(props.id))[0];

export const getTagsCloudData = createSelector(
	[getAllTags],
	tags => tags.map(item => {
		const {label, id, sentimentScore} = item;
		return {label, id, sentimentScore};
	})
);

export const getTagDetailsData = createSelector(
	[getTagById],
	tag => {
		const {label, id, volume, sentiment, pageType} = tag;
		return {label, id, volume, sentiment, pageType};
	} 
);