// Define the initial state of the calculator app
const initialState = {
    currentValue: '0',    // Represents the current value displayed on the calculator
    previousValue: null,  // Represents the previous value entered
    operator: null        // Represents the operator selected by the user
};

// Redux reducer function to handle state changes in the calculator app
function calculatorReducer(state = initialState, action) {
    // Switch statement to handle different types of actions
    switch (action.type) {
        // Action type for clearing the calculator
        case 'CLEAR':
            return initialState;
        // Action type for inputting a number
        case 'INPUT_NUMBER':
            // If the current value is '0', replace it with the input number; otherwise, append the input number
            if (state.currentValue === '0') {
                return { ...state, currentValue: action.payload };
            }
            return { ...state, currentValue: state.currentValue + action.payload };
        // Action type for choosing an operator
        case 'CHOOSE_OPERATOR':
            // If an operator is already selected, update only the operator; otherwise, store the current value as the previous value and reset the current value to '0'
            if (state.operator !== null) {
                return { ...state, operator: action.payload };
            }
            return {
                ...state,
                operator: action.payload,
                previousValue: state.currentValue,
                currentValue: '0'
            };
        case 'TOGGLE_SIGN':
            return {
                ...state,
                currentValue: String(parseFloat(state.currentValue) * -1)
            };
        // Action type for calculating the result
        case 'EQUALS':
            // If the operator or previous value is null, return the current state unchanged
            if (state.operator == null || state.previousValue == null) {
                return state;
            }
            // Calculate the result using the evaluate function
            const result = evaluate(state);
            // Return the updated state with the calculated result, resetting previousValue and operator
            return {
                currentValue: String(result),
                previousValue: null,
                operator: null
            };
        // Default case: return the current state unchanged
        default:
            return state;
    }
}

// Function to evaluate the result based on the current state of the calculator
function evaluate(state) {
    // Destructure the state object to extract currentValue, previousValue, and operator
    const { currentValue, previousValue, operator } = state;
    // Parse currentValue and previousValue into floating-point numbers
    const curr = parseFloat(currentValue);
    const prev = parseFloat(previousValue);
    // If currentValue or previousValue is not a number, return 0
    if (isNaN(curr) || isNaN(prev)) return 0;
    let result;
    // Switch statement to perform the corresponding arithmetic operation based on the operator
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = (prev/ 100) * curr;
            break;
        // Default case: return 0 if the operator is not recognized
        default:
            return 0;
    }
    // Return the calculated result
    return result;
}

// Export the reducer function as the default export
export default calculatorReducer;
