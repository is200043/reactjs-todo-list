import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    createList = (isCompleted) => {
        console.log(isCompleted);
        let dom = [];
        let list = this.props.state.list;
        for (let i = 0; i < list.length; i++) {
            if(list[i].isCompleted === isCompleted){
                dom.push(
                <ListItem data={list[i]} 
                    onToggleListItem={this.props.onToggleListItem}
                    onEditTask={this.props.onEditTask} 
                    onDeleteTask={this.props.onDeleteTask} />
                );
            }
        }    
        console.log(dom);
        return dom;
    }

    render() {
        return (
            <div style={{display: this.props.listShow ? 'none': ''}}>
                {this.createList(this.props.listCompleted)}
            </div>
        );
    }
}

export default List;