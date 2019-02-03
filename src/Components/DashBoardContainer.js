import React, { Component } from 'react';
//import { connect } from 'react-redux';

class DashBoardContainer extends Component {
  render() {
    return (
        
		<div className="container">

        	<div className = "profile">
				<code className="identifier"><pre>.profile</pre></code>
				<h2>profile card</h2>
			</div>

        	<div className = "book">
				<code className="identifier"><pre>.</pre></code>
				<h2>book card</h2>
			</div>

        	<div className = "calendar">
				<code className="identifier"><pre>.calendar</pre></code>
				<h2>calendar card</h2>
			</div>

        	<div className = "message">
				<code className="identifier"><pre>.message</pre></code>
				<h2>message card</h2>
			</div>

        	<div className = "notepad">
				<code className="identifier"><pre>.notepad</pre></code>
				<h2>notepad card</h2>
			</div>

        	<div className = "pinterest">
				<code className="identifier"><pre>.pinterest</pre></code>
				<h2>pinterest card</h2>
			</div>
        
        	<div className = "twitter">
				<code className="identifier"><pre>.twitter</pre></code>
				<h2>twitter card</h2>
			</div>

        	<div className = "video">
				<code className="identifier"><pre>.video</pre></code>
				<h2>video card</h2>
			</div>

        	<div className = "weather">
				<code className="identifier"><pre>.weather</pre></code>
				<h2>weather card</h2>
			</div>

      	</div>
    );
  }
}

export default DashBoardContainer;