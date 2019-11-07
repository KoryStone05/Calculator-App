import React, { Component } from 'react';
import './KeypadRow.css';

class KeypadRow extends Components {
    render() {
        return(
            <div className="KeypadRow">
                {this.props.children}
            </div>
        );
    }
}

export default KeypadRow;