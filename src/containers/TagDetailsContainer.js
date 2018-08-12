import {connect} from "react-redux";

import TagDetails from "../components/TagDetails/TagDetails";

import {getTagDetailsData} from "../store/selectors";

const mapStateToProps = (state, props) => {
	return({
		tag: getTagDetailsData(state, {id: props.match.params.id}),
		settings: state.settings
	});
};

export default connect(mapStateToProps)(TagDetails);