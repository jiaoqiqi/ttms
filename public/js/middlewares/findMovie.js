import request from 'superagent';

export default store => next => action => {
    if (action.type === 'FIND_MOVIE') {
        request.post('/findmovie')
            .send({name: action.movieName})
            .end((err, res) => {
                if (err) {

                    next({type: "FIND_MOVIE_SUCCESS", isSuccess: false});
                }
                next({type: "FIND_MOVIE_SUCCESS",
                    isSuccess: res.body.isSuccess,
                    data:res.body.result});
            });
    }
    else
        next(action);
};