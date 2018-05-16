import React, { Component } from "react";
import Badge from 'react-bootstrap/lib/Badge';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';

class Display extends Component {
	state = {
      key: 1
    };

	handleSelect = async(key) => {
		this.setState({ key });
	}
	render(){
		return(
		<div>
			{this.props.error && <p>{this.props.error}</p>}
			{this.props.aqius && this.props.aqicn && <Tabs className = "Nav-tabs" activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
				<Tab className = "Nav-tabs" eventKey={1} title="AQI USA">
					{this.props.city && this.props.state && this.props.country && <p className = "Nav-content">Location: {this.props.city}, {this.props.state}, {this.props.country}</p>}
					{this.props.aqius && this.props.bgColorUS && <p>Air Quality Index: <Badge style = {{backgroundColor:this.props.bgColorUS}}> {this.props.aqius}</Badge></p>}
					{<p>Air Pollution level: <Badge style = {{backgroundColor:this.props.bgColorUS}}>{this.props.levelUS}</Badge></p>}
					{this.props.mainus && <p>Main pollutant: {this.props.mainus}</p>}
				</Tab>
				<Tab eventKey={2} title="AQI China">
					{this.props.city && this.props.state && this.props.country && <p className = "Nav-content">Location: {this.props.city}, {this.props.state}, {this.props.country}</p>}
					{this.props.aqicn && this.props.bgColorCN && <p>Air Quality Index: <Badge style = {{backgroundColor:this.props.bgColorCN}}> {this.props.aqicn}</Badge></p>}
					{<p>Air Pollution level: <Badge style = {{backgroundColor:this.props.bgColorCN}}>{this.props.levelCN}</Badge></p>}
					{this.props.maincn && <p>Main pollutant: {this.props.maincn}</p>}
				</Tab>
			</Tabs>}			
		</div>
	)
	};
};

export default Display;