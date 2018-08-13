import React, {Component} from "react";
import PropTypes from "prop-types";

class TagCloudSettings extends Component {

	settingChangeHandler = (event, label) => {
		const {onSettingChange} = this.props;
		const value = event.target.value;

		return onSettingChange({label, value});
	}

	colorChangeHandler = (event, index) => {
		const {onColorChange} = this.props;
		const color = event.target.value;
		
		return onColorChange(color, index);
	}

	displayColors = colors => {
		const {settings, onColorRemove} = this.props;
		const {numberOfPages} = settings;

		return colors.map((color, index) => (
			<div key={color + index}>
				<input onChange={event => this.colorChangeHandler(event, index)} type="color" value={color} />
				<button className="tag-cloud_settings_remove-color-btn" disabled={colors.length <= numberOfPages} onClick={() => onColorRemove(index)}>Remove Color</button>
			</div>
		));
	}

	render() {
		const {settings, onColorAdd} = this.props;
		const {minFontSize, maxFontSize, colors} = settings;

		return(
			<div className="tag-cloud_settings">
				<h2>Tag Cloud Settings</h2>
				<div className="tag-cloud_settings_item">
					<p>Minimum font size</p>
					<input type="number" onChange={event => this.settingChangeHandler(event, "minFontSize")} value={minFontSize} min="1" max={maxFontSize}/>
				</div>
				<div className="tag-cloud_settings_item">
					<p>Maximum font size</p>
					<input type="number" onChange={event => this.settingChangeHandler(event, "maxFontSize")}  value={maxFontSize} min={minFontSize}/>
				</div>
				{this.displayColors(colors)}
				<button className="tag-cloud_settings_add-color-btn" onClick={onColorAdd}>Add Color</button>
			</div>
		);
	}
}

TagCloudSettings.propTypes = {
	settings: PropTypes.object.isRequired,
	onColorAdd: PropTypes.func.isRequired,
	onColorChange: PropTypes.func.isRequired,
	onColorRemove: PropTypes.func.isRequired,
	onSettingChange: PropTypes.func.isRequired
};

export default TagCloudSettings;