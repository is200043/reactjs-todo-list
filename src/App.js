import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [{title: 'Task 1', isCompleted: true},
      {title: 'Task 2', isCompleted: false},
      {title: 'Task 3', isCompleted: false},
      {title: 'Task 4', isCompleted: true}],
    showCompleted: false};
  }

  onToggleListItem = () => {
  }

  onToggleCompletedList = () => {
    // showCompleted
  }

  onCreateNewItem = () => {
    console.log('Create');
  }

  onEditTask = () => {
  }

  onDeleteTask = () => {
  }

  render() {
    return (
      <div className="App">
        <Header title="To Do List" onCreateNewItem={this.onCreateNewItem} />
        {/* <header className="App-header">
          New List <button onClick={this.onCreateNewItem} value="+" />
        </header>
        <body className="App-body">
          
        </body> */}
      </div>
    );
  }
}

export default App;
