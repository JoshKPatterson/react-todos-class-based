import React, { Component } from 'react'

class NewTodo extends Component {
  state = { term: '' };
  onSubmit = () => {
    this.props.addTodo(Math.floor(Math.random()*1000000), this.state.term)
  }
  render() {
    return (
      <div>
        New Todo
        <br />
        <input
          type='text' 
          placeholder='write todo here'
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})}>
        </input>
        <button onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default NewTodo
