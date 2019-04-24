import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    createList = (isCompleted) => {
        console.log(isCompleted);
        let dom = [];
        let list = this.props.state.list;
        for (let i = 0; i < list.length; i++) {
            if(list[i].isCompleted === isCompleted){
                dom.push(<ListItem title={list[i].title} isCompleted={list[i].isCompleted} id={'checkbox' + i} onToggleListItem={this.props.onToggleListItem}/>);
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