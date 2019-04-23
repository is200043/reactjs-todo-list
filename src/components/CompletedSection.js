import React from 'react';
import List from './List';

class CompletedSection extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div style={{width: '87%', display: 'inline-block', padding: '0px 5px 0px 5px', marginLeft: '25px'}}>{this.props.countCompleted} Completed</div> 
                    <div style={{width: '9%', display: 'inline-block', textAlign: 'right', padding: '0px 5px 0px 5px'}}>
                        <a href="#" onClick={this.props.onToggleCompletedList} style={{fontSize: '12px'}}>
                            {this.props.showCompleted ? 'hide': 'show'}
                        </a>
                    </div>
                </div>
                <hr/>
                <List />
            </div>
           
        );
    }
}

export default CompletedSection;