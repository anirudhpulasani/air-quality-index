import React, { Component } from 'react';
import axios from "axios";
import Form from "./components/Form";
import Display from "./components/Display";
import './App.css';

class App extends Component {
	state = {
		city:undefined,
		state:undefined,
		country:undefined,
		aqius:undefined,
		aqicn:undefined,
		mainus:undefined,
		levelUS:undefined,
		levelCN:undefined,
		bgColorUS:undefined,
		bgColorCN:undefined,
		error:undefined
	};

	getPollution = (e) =>{
		e.preventDefault();
		const city = e.target.elements.city.value;
		const state = e.target.elements.state.value;
		const country = e.target.elements.country.value;		
		
		if(city && state && country){
			axios.get('http://api.airvisual.com/v2/city?city='+city+'&state='+state+'&country='+country+'&key=6gQxrTm6TJLaS6DFs')
			.then((res) => {
				console.log(res);
				const aqius = res.data.data.current.pollution.aqius;
				const aqicn = res.data.data.current.pollution.aqicn;
				const mainus = res.data.data.current.pollution.mainus;
				const maincn = res.data.data.current.pollution.maincn;
				
				if(0<= aqius && aqius <=50)
					this.setState({bgColorUS:"green",levelUS:"Good"});
				else if(51<= aqius && aqius <=100)
					this.setState({bgColorUS:"yellowgreen",levelUS:"Moderate"});
				else if(101<= aqius && aqius <=150)
					this.setState({bgColorUS:"orange",levelUS:"Unhealthy(for sensitive groups)"});
				else if(151<= aqius && aqius <=200)
					this.setState({bgColorUS:"red",levelUS:"Unhealthy"});
				else if(201<= aqius && aqius <=250)
					this.setState({bgColorUS:"purple",levelUS:"Very unhealthy"});
				else if(251<= aqius && aqius <=300)
					this.setState({bgColorUS:"brown",levelUS:"Hazardous"});
				
				if(0<= aqicn && aqicn <=50)
					this.setState({bgColorCN:"green",levelCN:"Good"});
				else if(51<= aqicn && aqicn <=100)
					this.setState({bgColorCN:"yellowgreen",levelCN:"Moderate"});
				else if(101<= aqicn && aqicn <=150)
					this.setState({bgColorCN:"orange",levelCN:"Unhealthy(for sensitive groups)"});
				else if(151<= aqicn && aqicn <=200)
					this.setState({bgColorCN:"red",levelCN:"Unhealthy"});
				else if(201<= aqicn && aqicn <=250)
					this.setState({bgColorCN:"purple",levelCN:"Very unhealthy"});
				else if(251<= aqicn && aqicn <=300)
					this.setState({bgColorCN:"brown",levelCN:"Hazardous"});
				
				if(mainus === 'p1')
					this.setState({mainus:"Particulate Matter (pm10)"});
				else if(mainus === 'p2')
					this.setState({mainus:"Particulate Matter (pm2.5)"});
				else if(mainus === 'o3')
					this.setState({mainus:"Ozone (O3)"});
				else if(mainus === 'n2')
					this.setState({mainus:"Nitrogen dioxide (NO2)"});
				else if(mainus === 's2')
					this.setState({mainus:"Sulfur dioxide (SO2)"});
				else if(mainus === 'co')
					this.setState({mainus:"Carbon monoxide (CO)"});
				
				if(maincn === 'p1')
					this.setState({maincn:"Particulate Matter (pm10)"});
				else if(maincn === 'p2')
					this.setState({maincn:"Particulate Matter (pm2.5)"});
				else if(maincn === 'o3')
					this.setState({maincn:"Ozone (O3)"});
				else if(maincn === 'n2')
					this.setState({maincn:"Nitrogen dioxide (NO2)"});
				else if(maincn === 's2')
					this.setState({maincn:"Sulfur dioxide (SO2)"});
				else if(maincn === 'co')
					this.setState({maincn:"Carbon monoxide (CO)"});
				
				this.setState ({
					city:res.data.data.city,
					state:res.data.data.state,
					country:res.data.data.country,
					aqius:res.data.data.current.pollution.aqius,
					aqicn:res.data.data.current.pollution.aqicn
 				});
			});
		}else{
			this.setState({
				error:"Please enter valid details"
			});
		}
	};
	
  render() {
    return (
	<div className="App-main">
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Air Quality Index</h1>
        </header>
        <div className="App-intro">
			<Form getPollution = {this.getPollution} />
			<Display city ={this.state.city}
			state = {this.state.state}
			country = {this.state.country}
			aqius = {this.state.aqius}
			aqicn = {this.state.aqicn}
			mainus = {this.state.mainus}
			maincn = {this.state.maincn}
			bgColorUS = {this.state.bgColorUS}
			bgColorCN = {this.state.bgColorCN}
			levelUS = {this.state.levelUS}
			levelCN = {this.state.levelCN}
			error = {this.state.error} />
        </div>
      </div>
	</div>
    );
  }
}

export default App;
