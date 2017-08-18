
import React, {Component} from 'react';
import {Nav, NavItem} from 'react-bootstrap';

class HomeSection extends Component {
	handleSelect(selectedKey) {
		alert('selected ' + selectedKey);
	}
	
    render() {
        return (
        	<div>
	            <Nav bsStyle="pills" activeKey={1} onSelect={this.handleSelect}>
			    <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
			  </Nav>
		  </div>

        );
    }
}

export default HomeSection

