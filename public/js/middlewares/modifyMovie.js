import request from 'superagent';

export default store => next => action => {
    if (action.type === 'MODIFY_MOVIE') {
        request.post('/updateMovie')
            .send(action.movie)
            .end((err, res) => {
                next({type: "UPDATE_MOVIE_FLAG", data: res.body.tip});
            });
    }

    else
        next(action);
};
