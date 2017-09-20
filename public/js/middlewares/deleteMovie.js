import request from "superagent";

export default store => next => action => {
    if (action.type === "DELETE_MOVIE") {
        console.log(action.movieId)
        request.post('/delMovie')
            .send({"movieId":action.movieId})
            .end((err, res) => {
                next({type: "DELETE_MOVIE_FLAG", data: res.body.tip});
            })
    }
    else {
        next(action)
    }
}