export default (state = {movie: []}, action) => {
    if (action.type === 'SHOW_MOVIES') {
        state.movie = action.data;

        return Object.assign({}, state);
    }

    if(action.type === "DELETE_MOVIE_FLAG"){
        switch (action.data) {
            case 'success':
                state.deleteMovieFlag = true;
                break;
            default:
                state.deleteMovieFlag = false;
        }

        return Object.assign({}, state);
    }

    return state;
}
