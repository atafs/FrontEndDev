
import React, {Component} from 'react';

require('../../scss/home-sections.scss');

class HomeSection extends Component {
	handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	}
	
    render() {
        return (
        	<section>
				<div name="home-section" className="home-section">
					<div name="navigation">
		        		<div name="menu">
				        	<div name="logo" className="navigation">
					            <strong>LOGO </strong>	    
						  	</div>
						  	<div name="left-menu" className="navigation">
					            <a className="navigation1">ABOUT </a>
					            <a className="navigation1">COMUNNITY </a>
					            <a className="navigation1">LOCATION </a>
					            <a className="navigation1">OUR MENU </a>
					            <a className="navigation1">RECIPES </a>
						  	</div>
						  	<div name="right-menu" className="navigation">
					            <a className="navigation2">CONTACT </a>
					            <a className="navigation2">LOGIN </a>
						  	</div>
					  	</div>
				  		<div name="left-subsection"></div>
				  		<div name="request-btn"></div>
					</div>
					<div className="stamp"></div>
					<div name="text" className="text big-pic">
						<div className="text1">THE BEST FOODIE</div>
						<div className="text1">EXPERIENCE</div>
						<p className="text2">NOW IN LONDON</p>
					</div>
					<div name="bg-pic"></div>
				</div>
			 </section>
        );
    }
}

export default HomeSection

