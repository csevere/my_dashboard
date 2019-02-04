import React, { Component } from 'react';
//import { connect } from 'react-redux';

class DashBoardContainer extends Component {
  render() {
    return (
        
		<div className="container">

        	<div className = "profile">
				<code className="identifier"><pre>.profile</pre></code>
				<h3>profile card</h3>
			</div>

        	<div className = "book">
				<code className="identifier"><pre>.book</pre></code>
				<h3>book card</h3>
			</div>

        	<div className = "calendar">
				<code className="identifier"><pre>.calendar</pre></code>
				<h3>calendar card</h3>
			</div>

        	<div className = "message">
				<code className="identifier"><pre>.message</pre></code>
				<h3>message card</h3>
			</div>

        	<div className = "notepad">
				<code className="identifier"><pre>.notepad</pre></code>
				<h3>notepad card</h3>
			</div>

        	<div className = "pinterest">
				<code className="identifier"><pre>.pinterest</pre></code>
				<h3>pinterest card</h3>
			</div>
        
        	<div className = "twitter">
				<code className="identifier"><pre>.twitter</pre></code>
				<h3>twitter card</h3>
			</div>

        	<div className = "video">
				<code className="identifier"><pre>.video</pre></code>
				<h3>video card</h3>
			</div>

        	<div className = "weather">
				<code className="identifier"><pre>.weather</pre></code>
				<h3>weather card</h3>
			</div>

      	</div>
    );
  }
}

export default DashBoardContainer;