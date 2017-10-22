import request from 'superagent';

export default store => next => action => {
    if (action.type === 'FIND_USER') {
        request.post('/finduser')
            .send({name: action.findUserName})
            .end((err, res) => {
                if (err) {

                    next({type: "FIND_USER_SUCCESS", isSuccess: false});
                }
                next({type: "FIND_USER_SUCCESS", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};