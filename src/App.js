import React, { Component } from 'react';
import Header from './components/Header';
import CompletedSection from './components/CompletedSection';
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

  onToggleCompletedList = (e) => {
    this.setState({'showCompleted': this.state.showCompleted ? false : true});  
    e.preventDefault();
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
      <div className="App" style={{display: 'flex', height: '100%'}}>
        <div className="App-sidebar" style={{width: '20%', height: '100%', display: 'inline-block', backgroundColor: '#e2dfdb'}}>
         
        </div>
        <div className="App-content" style={{width: '80%', paddingLeft: '30px', paddingRight: '30px'}}>
          <Header title="To Do List" onCreateNewItem={this.onCreateNewItem} />
          <CompletedSection onToggleCompletedList={this.onToggleCompletedList} state={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
