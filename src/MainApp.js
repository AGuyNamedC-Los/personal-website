import React from "react";
// import ReactDOM from "react-dom";
import Home from "./Home";
import Projects from "./Projects";
import SBMockify from "./SBMockify";
import UnderConstruction from "./underConstruction";

class MainApp extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = {showing: "Home"};
    }
	
	webPageHandler(webPage) { this.setState({showing: webPage}); }
	
	linkHandler(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	
    render() {
		let menu = 
			<div className="menu">
				{/* Home button */}
				<a onClick={this.webPageHandler.bind(this, "Home")}>
					<i className="fas fa-home"></i>
					<p>Home</p>
				</a>
				{/* LinkedIn button */}
				<a onClick={this.linkHandler.bind(this, "https://www.linkedin.com/in/carlos-castillo-1363a6133/")}>
					<i className="fab fa-linkedin"></i>
					<p>LinkedIn</p>
				</a>
				{/* Github button */}
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los")}>
					<i className="fab fa-github-square"></i>
					<p>GitHub</p>
				</a>
				{/* Resume */}
				<a onClick={this.linkHandler.bind(this, "https://docs.google.com/document/d/1K-3VK16w9j0yWRLB88lPVZMlzlR8DVcQ9ZDwyTef5oM/edit")}>
					<i className="fas fa-user-tie"></i>
					<p>Resume</p>
				</a>
				{/* Projects */}
				<a onClick={this.webPageHandler.bind(this, "Projects")}>
					<i className="fas fa-project-diagram"></i>
					<p>Projects</p>
				</a>
				{/* Instagram */}
				<a onClick={this.linkHandler.bind(this, "https://www.instagram.com/aguynamedc_los/")}>
					<i className="fab fa-instagram"></i>
					<p>Instagram</p>
				</a>
			</div>;

        let content = <Home />;
			
		switch(this.state.showing) {
			case "Home":
				content = <Home />;
				break;
			case "Projects":
				content = <Projects WebPageHandler={this.webPageHandler.bind(this)}/>;	{/* have to pass the function down since the projects that can be clicked on are unable to access this level of heirarchy's this.state.showing */}
				break;	
			case "SBMockify":
				content = <SBMockify />;
				break;
			case "UnderConstruction":
				content = <UnderConstruction />;
				break;
			default:
				content = <h2>Warning something went wrong!!!</h2>;
				break;
		}

		return (
			<div>
				<nav>
					{menu}
				</nav>
				{content}
			</div>);
    }
}
export default MainApp;