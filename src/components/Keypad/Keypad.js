import React, { Component } from 'react';
import './Keypad.css';
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return(
            <div className="Keypad">
                {/* Row 1 */}
                <KeypadRow>
                    <Button OnButtonPress={this.props.onButtonPress} type='primary'>C</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='primary'>&larr;</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='operator'>%</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='operator'>/</Button>
                </KeypadRow>

                {/* Row 2 */}
                <KeypadRow>
                    <Button OnButtonPress={this.props.onButtonPress} >7</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >8</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >9</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='operator'>*</Button>
                </KeypadRow>

                {/* Row 3 */}
                <KeypadRow>
                    <Button OnButtonPress={this.props.onButtonPress} >4</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >5</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >6</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='operator'>-</Button>
                </KeypadRow>

                {/* Row 4 */}
                <KeypadRow>
                    <Button OnButtonPress={this.props.onButtonPress} >1</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >2</Button>
                    <Button OnButtonPress={this.props.onButtonPress} >3</Button>
                    <Button OnButtonPress={this.props.onButtonPress} type='operator'>+</Button>
                </KeypadRow>

                {/* Row 5 */}
                <KeypadRow>
                <Button OnButtonPress={this.props.onButtonPress} >0</Button>
                <Button OnButtonPress={this.props.onButtonPress} >.</Button>
                <Button OnButtonPress={this.props.onButtonPress} type='large'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;