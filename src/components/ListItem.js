import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {

    onDelete = (event, id) => {
        if (window.confirm('Confirm Del?')) {
            this.props.onDeleteTask(event, id);
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="round" style={{ display: 'inline-block', margin: '0px 5px 0px 5px' }}>
                        <input type="checkbox" id={'chk' + this.props.data.id} checked={this.props.data.isCompleted} value={this.props.data.id} onChange={(e) => this.props.onToggleListItem(e)} />
                        <label for={'chk' + this.props.data.id}></label>
                    </div>
                    <div style={{ display: 'inline-block', margin: '0px 5px 0px 5px' }}>
                        <input type="text" id={'title' + this.props.data.id} value={this.props.data.title}
                            onChange={(e) => this.props.onEditTask(e, this.props.data.id)} />
                        <a href="#" onClick={(e) => this.onDelete(e, this.props.data.id)} > Del </a>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default ListItem;