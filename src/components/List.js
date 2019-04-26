import React from 'react';
import ListItem from './ListItem';

class List extends React.Component {

    createList = (isCompleted) => {
        let dom = [];
        let list = this.props.state.list;
        list.map((item) => {
            if (item.isCompleted === isCompleted) {
                dom.push(
                    <ListItem data={item}
                        onToggleListItem={this.props.onToggleListItem}
                        onEditTask={this.props.onEditTask}
                        onDeleteTask={this.props.onDeleteTask} />
                );
            }
            return dom;
        });
        return dom;
    }

    render() {
        return (
            <div style={{ display: this.props.listShow ? 'none' : '' }}>
                {this.createList(this.props.listCompleted)}
            </div>
        );
    }
}

export default List;