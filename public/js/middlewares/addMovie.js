import request from 'superagent';

export default store => next => action => {
    if (action.type === 'ADD_MOVIE') {
        request.post('/addMovie')
            .send(action.movie)
            .end((err, res) => {
                if (err) {
                    next({type: "ADD_MOVIE_SUCCESS", isSuccess: false});
                }
                next({type: "ADD_MOVIE_SUCCESS", isSuccess:res.body.isSuccess});
            });
    }
    else
        next(action);
};