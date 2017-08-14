export default (state = {type: ""}, action) => {
    if(action.type === 'GET_HELLO') {
        state.type = action.data;
        return Object.assign({}, state);
    }
    return state;
}