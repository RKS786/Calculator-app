// Action creator for clearing the input
export const clear = () => ({ type: 'CLEAR' });

// Action creator for inputting a number
export const inputNumber = (number) => ({ type: 'INPUT_NUMBER', payload: number });

// Action creator for choosing an operator (e.g., addition, subtraction, etc.)
export const chooseOperator = (operator) => ({ type: 'CHOOSE_OPERATOR', payload: operator });

export const toggleSign = () => ({type: 'TOGGLE_SIGN'});

// Action creator for calculating the result
export const equals = () => ({ type: 'EQUALS' });
