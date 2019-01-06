

const defaultState = {
    inputValue: '',
    list: []
}

// reducer 可以接受state, 但绝不能改变state的zhi
export default (state = defaultState, action) => {
    console.log(state, action);
    if (action.type == 'change_input_value') {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type == 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    return state;
}