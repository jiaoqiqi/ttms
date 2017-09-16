import request from "superagent";

export default store => next => action => {
    if (action.type === 'SELECT_MOVIES') {
        request.get('/movieList')
            .end((err, res) => {
                next({type: "SHOW_MOVIES", data: res.body});
            });
    }

    else
        next(action);
};