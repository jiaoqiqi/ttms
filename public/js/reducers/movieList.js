export default (state = {movie: []}, action) => {
    if (action.type === 'SHOW_MOVIES') {
        state.movie = action.data;

        return Object.assign({}, state);
    }

    if(action.type === "DELETE_MOVIE_FLAG"){
        switch (action.data) {
            case 'success':
                state.deleteFlag = true;
                break;
            default:
                state.deleteFlag = false;
        }

        return Object.assign({}, state);
    }

    return state;
}
