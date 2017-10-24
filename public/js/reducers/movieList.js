export default (state = {movie: [], addSuccess: ""}, action,) => {
    if (action.type === 'SHOW_MOVIES') {
        state.movie = action.data;

        return Object.assign({}, state);
    }

    if (action.type === "DELETE_MOVIE_FLAG") {
        switch (action.data) {
            case 'success':
                state.deleteMovieFlag = true;
                break;
            default:
                state.deleteMovieFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === "UPDATE_MOVIE_FLAG") {
        switch (action.data) {
            case 'success':
                state.modifyMovieFlag = true;
                break;
            default:
                state.modifyMovieFlag = false;
        }

        return Object.assign({}, state);
    }

    if (action.type === 'ADD_MOVIE_SUCCESS') {
        state.addSuccess = action.isSuccess;
        return Object.assign({}, state);
    }

    if (action.type === 'FIND_MOVIE_SUCCESS') {
        switch (action.isSuccess) {
            case true:
                // console.log(action.data)
                state.movie = action.data;
                state.findMovieFlag = true;
                break;
            default:
                state.findMovieFlag = false;

        }

        return Object.assign({}, state);
    }

    return state;
}
