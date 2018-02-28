import React, {Component} from 'react';

class testButton extends Component{
  constructor(props){
    super(props);

    this.state = { name: 'tobias' };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    this.setState((prevState, props) => ({
      name: prevState.name.toUpperCase()
    }))
  }
  render(){
    return(
      <div>
        <p>{this.state.name}</p>
        <button type='button'
          onClick={this.handleClick}>
          Uppercase
        </button>
      </div>
    );
  }
}

export default testButton;
