import React, { Component } from 'react';
import Header from './components/Header';
import CompletedSection from './components/CompletedSection';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {list: [{id: 1, title: 'Task 1', isCompleted: true},
      {id: 2, title: 'Task 2', isCompleted: false},
      {id: 3, title: 'Task 3', isCompleted: false},
      {id: 4, title: 'Task 4', isCompleted: true}],
    showCompleted: false};
  }

  onToggleListItem = (event) => {
    let list = this.state.list;
    let data = list.find((item) => item.id === parseInt(event.target.value));
    data.isCompleted = !data.isCompleted;
    this.setState({"list": list});
  }

  onToggleCompletedList = (event) => {
    this.setState({'showCompleted': this.state.showCompleted ? false : true});  
    event.preventDefault();
  }

  onCreateNewItem = () => {
    let list = this.state.list;
    let maxId = 1;
    list.map((item) => {
      if (item.id > maxId) {
        return maxId = item.id;
      }
    });
    let obj = {};
    obj['id'] = maxId + 1;
    obj['title'] = 'new Task';
    obj['isCompleted'] = false;
    list.push(obj);
    this.setState({"list": list});
  }

  onEditTask = (event, id) => {
    let list = this.state.list;
    let data = list.find((item) => item.id === id);
    data.title = event.target.value;
    this.setState({"list": list});
  }

  onDeleteTask = (event, id) => {
    let list = this.state.list;
    let newList = list.filter((item) => item.id !== id);
    this.setState({"list": newList});
  }

  render() {
    return (
      <div className="App" style={{display: 'flex', height: '100%'}}>
        <div className="App-sidebar" style={{width: '20%', height: '100%', display: 'inline-block', backgroundColor: '#e2dfdb'}}>
         
        </div>
        <div className="App-content" style={{width: '80%', paddingLeft: '30px', paddingRight: '30px'}}>
          <Header title="To Do List" onCreateNewItem={this.onCreateNewItem} />
          <CompletedSection onToggleCompletedList={this.onToggleCompletedList} state={this.state} 
            onToggleListItem={this.onToggleListItem} 
            onEditTask={this.onEditTask}
            onDeleteTask={this.onDeleteTask} />
        </div>
      </div>
    );
  }
}

export default App;
