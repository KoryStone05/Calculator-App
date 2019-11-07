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
                    <Button type='primary'>C</Button>
                    <Button type='primary'>&larr;</Button>
                    <Button type='operator'>%</Button>
                    <Button type='operator'>/</Button>
                </KeypadRow>

                {/* Row 2 */}
                <KeypadRow>
                    <Button>7</Button>
                    <Button>8</Button>
                    <Button>9</Button>
                    <Button type='operator'>*</Button>
                </KeypadRow>

                {/* Row 3 */}
                <KeypadRow>
                    <Button>4</Button>
                    <Button>5</Button>
                    <Button>6</Button>
                    <Button type='operator'>-</Button>
                </KeypadRow>

                {/* Row 4 */}
                <KeypadRow>
                    <Button>1</Button>
                    <Button>2</Button>
                    <Button>3</Button>
                    <Button type='operator'>+</Button>
                </KeypadRow>

                {/* Row 5 */}
                <KeypadRow>
                <Button>0</Button>
                <Button>.</Button>
                <Button type='large'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;