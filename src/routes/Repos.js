import React from 'react';
import NavLink from '../components/NavLink.js'

export default class extends React.Component {
  render(){
    return (
    	<div>
        <h2>Repos</h2>
        {/* add some links */}
	     <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
       {this.props.children}
      </div>
    ) 
  }
}
