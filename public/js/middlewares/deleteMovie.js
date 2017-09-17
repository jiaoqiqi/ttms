import request from "superagent";

export default store => next => action => {
    if (action.type === "DELETE_MOVIE") {
        request.post('/deleteMovie').send(action.movieId)
            .end((err, res) => {
                next({type: "DELETE_MOVIE_FLAG", data: res.body.tip});
            })
    }
    else {
        next(action)
    }
}