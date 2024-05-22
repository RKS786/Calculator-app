import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clear, inputNumber, chooseOperator, equals, toggleSign } from '../redux/actions';
import './calculator.css';

const Calculator = () => {
    const dispatch = useDispatch();
    const currentValue = useSelector((state) => state.currentValue);

    const handleNumberClick = (number) => {
        dispatch(inputNumber(number));
    };

    const handleOperatorClick = (operator) => {
        dispatch(chooseOperator(operator));
    };

    const handleToggleSignClick = () => {
        dispatch(toggleSign());
    };

    const handleEqualsClick = () => {
        dispatch(equals());
    };

    const handleClearClick = () => {
        dispatch(clear());
    };

    return (
        <div className="calculator">
            <input type="text" className="calculator-screen" value={currentValue} disabled />
            <div className="calculator-keys">
                <button className="key" onClick={handleClearClick}>C</button>
                <button className="key" onClick={() => handleToggleSignClick('+/-')}>+/-</button>
                <button className="key" onClick={() => handleOperatorClick('%')}>%</button>
                <button className="key operator-key" onClick={() => handleOperatorClick('/')}>/</button>
                <button className="key" onClick={() => handleNumberClick('7')}>7</button>
                <button className="key" onClick={() => handleNumberClick('8')}>8</button>
                <button className="key" onClick={() => handleNumberClick('9')}>9</button>
                <button className="key operator-key" onClick={() => handleOperatorClick('*')}>*</button>
                <button className="key" onClick={() => handleNumberClick('4')}>4</button>
                <button className="key" onClick={() => handleNumberClick('5')}>5</button>
                <button className="key" onClick={() => handleNumberClick('6')}>6</button>
                <button className="key operator-key" onClick={() => handleOperatorClick('-')}>-</button>
                <button className="key" onClick={() => handleNumberClick('1')}>1</button>
                <button className="key" onClick={() => handleNumberClick('2')}>2</button>
                <button className="key" onClick={() => handleNumberClick('3')}>3</button>
                <button className="key operator-key" onClick={() => handleOperatorClick('+')}>+</button>
                <button className="key key-0" onClick={() => handleNumberClick('0')}>0</button>
                <button className="key" onClick={() => handleNumberClick('.')}>.</button>
                <button className="key operator-key" onClick={handleEqualsClick}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
