import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";

class TagDetailsSection extends Component {

	generateItems = (labels, data, colors) => {
		const maxValue = Math.max.apply(Math, labels.map(itemLabel => data[itemLabel]));

		return labels.map((itemLabel, index) => {
			const itemValue = data[itemLabel];

			const lineWidth = Math.floor((itemValue * 100) / maxValue);

			return (
				<Fragment key={itemLabel + index}>
					<p className="tag-details_section_item_label">{itemLabel}</p>
					<div className="tag-details_section_item_graph" style={{width: `${lineWidth}%`, backgroundColor: colors[index]}}></div>
					<p className="tag-details_section_item_value">{itemValue}</p>
				</Fragment>
			);
		});
	}

	render() {
		const {title, data, colors} = this.props;

		const dataLabels = Object.keys(data);

		return (
			<Fragment>
				<h3 className="tag-details_section_title">{title}</h3>
				{this.generateItems(dataLabels, data, colors)}
			</Fragment>
		);
	}
}

TagDetailsSection.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.object.isRequired,
	colors: PropTypes.array.isRequired
};

export default TagDetailsSection;