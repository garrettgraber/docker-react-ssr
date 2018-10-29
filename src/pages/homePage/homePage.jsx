import React from 'react';
import { connect } from 'react-redux';


console.log("Home Page is running");


const  bannerColorLists = ['red', 'lime', 'teal', '#E9CCB1'];


class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			bannerColorNumber: 1
		};
	}

	bannerNumberCycler(e) {
		console.log("Change color");
		let currentColorNumber = this.state.bannerColorNumber;
		const newColorNumber = (currentColorNumber === bannerColorLists.length - 1)? 0 : currentColorNumber + 1;
		this.setState({bannerColorNumber: newColorNumber});
	}

	render() {

		const ChangeBannerButtonStyle = {
			color: '#ff0022',
			backgroundColor: '#fdfffc',
			padding: 10,
			height: 60,
			width: 200,
			border: '3px solid #ff0022',
			borderRadius: 5,
			fontWeight: 'bold',
			fontSize: 16
		};
		const { bannerColorNumber } = this.state;
		const bannerColor = bannerColorLists[bannerColorNumber];

	    return (
		    <div>
		    	<h1 style={{backgroundColor: bannerColor, padding: 20, borderRadius: 5}}>Hello world, The Night of The Shadow!</h1>
		    	<button style={ChangeBannerButtonStyle} onClick={(e) => this.bannerNumberCycler(e)} >CHANGE COLORS</button>
		    </div>
	  	);
	};
};


const mapStateToProps = (state = {}) => {
  return Object.assign({}, state);
};

export default connect(mapStateToProps)(HomePage);
