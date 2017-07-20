import React from 'react';

export default class extends React.Component {
  render(){
    return (
    	 <h2>{this.props.params.repoName}</h2>
    ) 
  }
}
