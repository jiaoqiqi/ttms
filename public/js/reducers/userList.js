export default (state = {user: []}, action) => {
    if (action.type === 'SHOW_USERS') {
        state.user = action.data;

        return Object.assign({}, state);
    }

    return state;
}
