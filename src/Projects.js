import React from "react";
import ReactDOM from "react-dom";
import SBMockify from "./SBMockify";
import UnderConstruction from "./underConstruction";

class Projects extends React.Component {
    constructor(props) {
        super(props); // Must call
    }
	
	webPageHandler(webPage) {
		this.props.WebPageHandler(webPage);
	}
	
	linkHandler(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	
    render() {
		let content = 
		<div className="projects">
			<div className="browser_projects">
				<h2>Browser Related Projects</h2>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/personal-website")}><span>This Website</span></a>
				<a onClick={this.webPageHandler.bind(this, "SBMockify")}><span>Mockify</span></a>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/gift-ee")}><span>Giftee</span></a>
			</div>
			
			<div className="data_structure_projects">
				<h2>Data Structure Projects</h2>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/data_structures/tree/master/DoublyLinkedList")}><span>Doubly Linked List</span></a>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/data_structures/tree/master/BasicTree")}><span>Basic Tree</span></a>
			</div>
			
			<div className= "miscellaneous_projects">
				<h2>Miscellaneous</h2>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/connect-3")}><span>Connect-3</span></a>
			</div>
			
			<div className= "algorithm_projects">
				<h2>Algorithm Projects</h2>
			</div>
		</div>
		
		return (
		<div className="Projects">
			{content}
		</div>);
    }
}
export default Projects;