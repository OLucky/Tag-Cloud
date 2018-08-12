import TagCloud from "../components/TagCloud/TagCloud";
import {connect} from "react-redux";

import {getTagsCloudData} from "../store/selectors";
import {changeSetting, changeColor, addColor, removeColor} from "../store/actions";

const mapStateToProps = state => {
	return {
		tags: getTagsCloudData(state),
		settings: state.settings
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onSettingChange: setting => dispatch(changeSetting(setting)),
		onColorChange: (color, index) => dispatch(changeColor(color, index)),
		onColorAdd: () => dispatch(addColor()),
		onColorRemove: index => dispatch(removeColor(index)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TagCloud);