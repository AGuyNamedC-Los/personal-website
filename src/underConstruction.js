import React from "react";
import ReactDOM from "react-dom";

class underConstruction extends React.Component {
    constructor(props) {
        super(props); // Must call
    }
	
    render() {
		let content = 
		<div>
			<h1>PAGE UNDER CONSTRUCTION</h1>
		</div>;
		
		return (
		<div className="under_const">
			{content}
		</div>);
    }
}
export default underConstruction;