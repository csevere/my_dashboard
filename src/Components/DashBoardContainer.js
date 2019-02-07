import React, { Component } from 'react';
//import { connect } from 'react-redux';

class DashBoardContainer extends Component {
  render() {
    return (
        
		<div className="container">

        	<div className = "profile">
				<h3>profile card</h3>
			</div>

        	<div className = "book">
				<h3>book card</h3>
			</div>

        	<div className = "calendar">
				<h3>calendar card</h3>
			</div>

        	<div className = "message">
				<h3>message card</h3>
			</div>

        	<div className = "notepad">
				<h3>notepad card</h3>
			</div>

        	<div className = "pinterest">
				<h3>pinterest card</h3>
			</div>
        
        	<div className = "twitter">
				<h3>twitter card</h3>
			</div>

        	<div className = "video">
				<h3>video card</h3>
			</div>

        	<div className = "weather">
				<h3>weather card</h3>
			</div>

      	</div>
    );
  }
}

export default DashBoardContainer;