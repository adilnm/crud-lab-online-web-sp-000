import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {

  state={
    text:''
  }

  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId })
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.text}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
