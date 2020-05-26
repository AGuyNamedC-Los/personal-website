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
		<div>
			<div className="browser_projects">
				<h2>Browser Related Projects</h2>
				<ul className="browser_projects_menu">
					<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/personal_website")}><p>This Website</p></a></li>
					<li><a onClick={this.webPageHandler.bind(this, "SBMockify")}><p>Mockify</p></a></li>
					<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/gift-ee")}><p>Giftee</p></a></li>
				</ul>
			</div>
			
			<div className="data_structure_projects">
				<h2>Data Structure Projects</h2>
				<ul className="data_structure_menu">
					<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/data_structures/tree/master/DoublyLinkedList")}><p>Doubly Linked List</p></a></li>
					<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/data_structures/tree/master/BasicTree")}><p>Basic Tree</p></a></li>
				</ul>
			</div>
			
			<div className= "miscellaneous_projects">
				<h2>Miscellaneous</h2>
				<ul className="miscellaneous_menu">
					<li><a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/connect-3")}><p>Connect-3</p></a></li>
				</ul>
			</div>
			
			<div className= "algorithm_projects">
				<h2>Algorithm Projects</h2>
				<ul className="algorithm_menu">
				</ul>
			</div>
		</div>
		
		return (
		<div className="Projects">
			{content}
		</div>);
    }
}
export default Projects;