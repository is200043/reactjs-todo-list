import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="round" style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>
                        <input type="checkbox" id={this.props.data.id} checked={this.props.data.isCompleted} value={this.props.data.id} onChange={(e) => this.props.onToggleListItem(e)}/>
                        <label for={this.props.data.id}></label>
                    </div>
                    <div style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>
                            <span>{this.props.data.title}</span>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default ListItem;