import React, {Component} from "react";
import PropTypes from "prop-types";

import TagCloudItem from "./TagCloudItem";
import TagCloudSettings from "./TagCloudSettings";

class TagCloud extends Component {

	generateItems = (tags, settings) => {
		const maxScore = Math.max.apply(Math, tags.map(item => item.sentimentScore));
		const minScore = Math.min.apply(Math, tags.map(item => item.sentimentScore));
		const {colors} = settings;

		const minFontSize = parseInt(settings.minFontSize);
		const maxFontSize = parseInt(settings.maxFontSize);

		return tags.map(item => {
			const tagScore = item.sentimentScore;
			const tagFontSize = tagScore === minScore ? minFontSize : Math.floor((tagScore / maxScore) * (maxFontSize - minFontSize) + minFontSize);
			const color = colors[Math.floor(Math.random() * colors.length) - 1];

			return (<TagCloudItem label={item.label} id={item.id} key={item.id} fontSize={tagFontSize} color={color} />);
		});
	}

	render() {
		const {tags, settings, onSettingChange, onColorChange, onColorAdd, onColorRemove} = this.props;

		return (
			<div className="container tag-cloud">
				<h1 className="tag-cloud_title">
					Tag Cloud
				</h1>
				<div className="tag-cloud_content">
					{this.generateItems(tags, settings)}
				</div>
				<TagCloudSettings settings={settings} onSettingChange={onSettingChange} onColorChange={onColorChange} onColorAdd={onColorAdd} onColorRemove={onColorRemove} />
			</div>
		);
	}
}

TagCloud.propTypes = {
	tags: PropTypes.array.isRequired,
	settings: PropTypes.object.isRequired,
	onSettingChange: PropTypes.func.isRequired,
	onColorChange: PropTypes.func.isRequired,
	onColorAdd: PropTypes.func.isRequired,
	onColorRemove: PropTypes.func.isRequired,
};

export default TagCloud;