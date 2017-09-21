import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_MOVIE') {
        request.post('/addInfo')
            .send(action.movie)
            .end((err, res) => {
                if (err) {

                    next({type: "ADD_MOVIE_FLAG", isSuccess: false});
                }
                next({type: "ADD_MOVIE_FLAG", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};