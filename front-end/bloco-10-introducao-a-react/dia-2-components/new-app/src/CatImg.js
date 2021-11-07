import React, { Component } from 'react';

class CatImg extends Component {
  render() {
    return (
      <>
        <img src={this.props.source} alt={this.props.alternativeText}></img>
      </>
    )
  }
}

export default CatImg;
