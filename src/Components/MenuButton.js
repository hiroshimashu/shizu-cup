import React, { Component } from 'react';

class MenuButton extends Component {

    render() {
        return (
            <div className= {this.props.open}   id = "nav-toggle" style = {{zIndex: 1000}} onClick={this.props.handleClick}>
                <div>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}

export default MenuButton;