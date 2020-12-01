import React, { Component } from 'react';
import TodosList from './TodosList';
import NewTodo from './NewTodo';
import Header from './Header';

const localState = JSON.parse(localStorage.getItem('tasks')) || [];

export class App extends Component {
  state = { list: localState };


  addTodo = (key, name) => {
    this.setState({
      list: [...this.state.list, {key: key, name: name}]
    }, () => localStorage.setItem('tasks', JSON.stringify(this.state.list)) )
  }

  deleteTodo = (key) => {
    this.setState({
      list: this.state.list.filter(item => item.key !== key)
    }, () => localStorage.setItem('tasks', JSON.stringify(this.state.list))
    )
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
