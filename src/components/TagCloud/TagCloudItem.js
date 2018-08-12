import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const TagCloudItem = ({label, id, fontSize, color}) => (
	<Link className="tag-cloud_content_item" to={`/${encodeURIComponent(id)}`}>
		<span style={{fontSize, color}}>{label}</span>
	</Link>
);

TagCloudItem.propTypes = {
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	fontSize: PropTypes.number.isRequired,
	color: PropTypes.string,
};

export default TagCloudItem;