import React, {Component, Fragment} from "react";
import {Helmet} from "react-helmet";
import PropTypes from "prop-types";

import TagDetailsSection from "./TagDetailsSection";

class TagDetails extends Component {
	render(){
		const {tag, history, settings} = this.props;

		return(
			<Fragment>
				<Helmet>
					<title>Tag Cloud - {tag.label}</title>
				</Helmet>
				
				<div className="container tag-details">
					<button onClick={history.goBack}>Go Back</button>
					<h1>{tag.label}</h1>
					<h2>Total Mentions - {tag.volume}</h2>
					<div className="tag-details_subwrap">
						<TagDetailsSection title="Mentions per type" data={tag.sentiment} colors={settings.colors} />
						<TagDetailsSection title="Mentions per page" data={tag.pageType} colors={settings.colors} />
					</div>
				</div>
			</Fragment>
		);
	}
}

TagDetails.propTypes = {
	tag: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired,
	settings: PropTypes.object.isRequired
};

export default TagDetails;