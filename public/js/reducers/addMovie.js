export default (state = {addSuccess: ""}, action) => {
    if (action.type === 'ADD_MOVIE_FLAG') {
        state.addSuccess = action.isSuccess;
        return Object.assign({}, state);
    }

    return state;
}
