import React, { Component } from 'react';
import TodosList from './TodosList';
import NewTodo from './NewTodo';
import Header from './Header';

export class App extends Component {
  state = {
    list: [
      {
        key: 312,
        name: 'Finish React Course'
      },
      {
        key: 313,
        name: 'Get Remote Job'
      },
      {
        key: 412,
        name: 'Leave Country'
      }
    ]
  };

  addTodo = (key, name) => {
    // console.log(this.state.list, prop)
    this.setState({
      list: [...this.state.list, {key: key, name: name}]
    })
  }

  deleteTodo = (key) => {
    this.setState({
      list: this.state.list.filter(item => item.key !== key)
    })
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <TodosList todos={this.state.list} deleteTodo = {this.deleteTodo}/>
        <NewTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
