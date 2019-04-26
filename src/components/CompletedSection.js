import React from 'react';
import List from './List';

class CompletedSection extends React.Component {

    countCompletedList = () => {
        var countCompletedList = 0;
        let list = this.props.state.list;
        list.map((item) => {
            if (item.isCompleted === true) {
                countCompletedList++;
            }
            return countCompletedList;
        });
        return countCompletedList;
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div style={{ width: '87%', display: 'inline-block', padding: '0px 5px 0px 5px', marginLeft: '25px' }}>{this.countCompletedList()} Completed</div>
                        <div style={{ width: '9%', display: 'inline-block', textAlign: 'right', padding: '0px 5px 0px 5px' }}>
                            <a href="#" onClick={this.props.onToggleCompletedList} style={{ fontSize: '12px' }}>
                                {this.props.state.showCompleted ? 'hide' : 'show'}
                            </a>
                        </div>
                    </div>
                    <hr />
                    <List state={this.props.state} listCompleted={true} listShow={this.props.state.showCompleted}
                        onToggleListItem={this.props.onToggleListItem}
                        onEditTask={this.props.onEditTask}
                        onDeleteTask={this.props.onDeleteTask} />
                </div>
                <List state={this.props.state} listCompleted={false}
                    onToggleListItem={this.props.onToggleListItem}
                    onEditTask={this.props.onEditTask}
                    onDeleteTask={this.props.onDeleteTask} />
            </div>

        );
    }
}

export default CompletedSection;