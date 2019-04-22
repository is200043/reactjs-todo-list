import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <h1>{this.props.title}</h1> 
                <button onClick={this.props.onCreateNewItem}> + </button>
            </div>
        );
    }
}

export default Header;