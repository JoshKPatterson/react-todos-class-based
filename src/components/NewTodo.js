import React, { Component } from 'react'

class NewTodo extends Component {
  state = { term: '' };

  onSubmit = () => {
    if(this.state.term === ''){
      return
    }
    this.props.addTodo(Math.floor(Math.random()*1000000), this.state.term);
    this.setState({ term: '' })
  }

  keyPressed = e => {
    if(e.key === "Enter"){
      this.onSubmit()
    }
  }

  render() {
    return (
      <div className='newTodo'>
        New To-Do
        <br />
        <input
          type='text' 
          placeholder='Type new to-do here...'
          value={this.state.term}
          onChange={e => this.setState({term: e.target.value})}
          onKeyPress={this.keyPressed}
        >
        </input>
        <button onClick={this.onSubmit}>
          Submit
        </button>
      </div>
    )
  }
}

export default NewTodo
