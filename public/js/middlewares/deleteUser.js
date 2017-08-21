import request from 'superagent';

export default store => next => action => {
    if (action.type === 'DELETE_USER') {
        request.post('/deleteUser')
            .send(action.id)
            .end((err, res) => {
                next({type: "DELETE_USER_FLAG", data: res.body.tip});
            });
    }

    else
        next(action);
};