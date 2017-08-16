import request from 'superagent';

export default store => next => action => {
    if (action.type === 'LOGIN') {
        request.post('/userInfo')
            .send(action.data)
            .end((err, res) => {
                if(err) {

                    next({type:"LOGIN_SUCCESS", isSuccess: false});
                }
                next({type:"LOGIN_SUCCESS", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};