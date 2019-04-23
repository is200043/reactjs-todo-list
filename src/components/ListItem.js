import React from 'react';
import './ListItem.css';

class ListItem extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="round" style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>
                        <input type="checkbox" id="checkbox" />
                        <label for="checkbox"></label>
                    </div>
                <div style={{display: 'inline-block', margin: '0px 5px 0px 5px'}}>
                        <span>Task</span>
                </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default ListItem;