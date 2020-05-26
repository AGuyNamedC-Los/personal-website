import React from "react";
import ReactDOM from "react-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';


class SBMockify extends React.Component {
    constructor(props) {
        super(props); // Must call
        this.state = {text: "", copied: false};
    }
	
	userInput(event) {
		this.setState({text: event.target.value});
	}
	
	linkHandler(url) {
		var win = window.open(url, '_blank');
		win.focus();
	}
	
	mockify() {
		let mockifyString = "";
		let tempText = this.state.text;
		
		for(let i = 0; i < tempText.length; i++) {
			if(Math.floor((Math.random() * 10) + 1) % 3 == 0) {
				mockifyString += tempText[i].toUpperCase();
			} else {
				mockifyString += tempText[i].toLowerCase();
				console.log(tempText[i].toUpperCase());
			}
		}
		
		this.setState({text: mockifyString, copied: false});
	}
	
    render() {
		let content = 
		<div>
			<h1>SB Mockify</h1>
			<div className="sbmockify_gui">
				<textarea spellCheck="false" value={this.state.text} onChange={this.userInput.bind(this)}></textarea>
				<div className="sb_btns">
					<CopyToClipboard text={this.state.text}
						onCopy={() => this.setState({copied: true})}>
						{this.state.copied ? <a className="copybtn"><p>Copied</p></a> : <a className="copybtn"><p>Copy</p></a>}
					</CopyToClipboard>
					<a onClick={this.mockify.bind(this)}><p>Mockify</p></a>
				</div>
			</div>
			
			<div className="sbm_description">
				<h2>What is this?</h2>
				<p className="description">Inspired by the Spongebob Meme that mimicks what a person types by retyping what that person says in an obnoxious 
				upper and lower case format. SB Mockify allows you to easily type in what you want to be SB Mockified and copied to your clipboard without
				the need to tediously alternate between upper and lower case letters as you type.</p>
				<img src="https://i.imgflip.com/3lhvk1.jpg" title="made at imgflip.com"/>
			</div>
			
			<div className="sbm_code">
				<h2>Want to see how this was made? Click the Link Below!</h2>
				<a onClick={this.linkHandler.bind(this, "https://github.com/AGuyNamedC-Los/personal_website/blob/master/SBMockify.js")}><p>SB Mockify code</p></a>
			</div>
		</div>;

		return (
			<div className="sbmockify">
				{content}
			</div>);
    }
}
export default SBMockify;

/* <a href="https://imgflip.com/i/3lhvk1"><img src="https://i.imgflip.com/3lhvk1.jpg" title="made at imgflip.com"/></a> */