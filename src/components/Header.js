import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <div style={{ marginTop: '40px' }}>
                    <div style={{ width: '89%', verticalAlign: 'middle', display: 'inline-block', padding: '0px 5px 0px 5px' }}>
                        <h1 style={{ marginBottom: '10px', marginTop: '10px' }}>{this.props.title}</h1>
                    </div>
                    <div style={{ width: '9%', textAlign: 'right', verticalAlign: 'middle', display: 'inline-block', padding: '0px 5px 0px 5px' }}>
                        <button onClick={this.props.onCreateNewItem} style={{ width: '30px', height: '20px' }}> + </button>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}

export default Header;