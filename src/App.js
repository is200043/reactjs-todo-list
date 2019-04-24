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

  onToggleListItem = (title, isCompleted, event) => {
    new Promise((resolve, reject) => {
      try {
        let list = this.state.list;
        for (let i = 0; i < list.length; i++) {
          if(list[i].title === title){
            console.log(' 5555 ' + title);
            list[i].isCompleted = !isCompleted;
          }
        }
        this.setState({"list": list});
        resolve('success');
      } catch (error) {
        reject(error);
      }
    }).then((text) => {
      console.log(text);
      this.forceUpdate();
    }).catch((error) => {
      console.log(error.message);
    });
  }

  onToggleCompletedList = (event) => {
    this.setState({'showCompleted': this.state.showCompleted ? false : true});  
    event.preventDefault();
  }

  onCreateNewItem = () => {
    let list = this.state.list;
    let obj = {};
    obj['title'] = 'new Task';
    obj['isCompleted'] = false;
    list.push(obj);
    this.setState({"list": list});
    this.forceUpdate();
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
          <CompletedSection onToggleCompletedList={this.onToggleCompletedList} state={this.state} onToggleListItem={this.onToggleListItem}/>
        </div>
      </div>
    );
  }
}

export default App;
