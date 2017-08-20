import request from 'superagent';

export default store => next => action => {
    if (action.type === 'LOGIN') {
        request.post('/userInfo')
            .send(action.data)
            .end((err, res) => {
                if (err) {
                    return;
                }
                console.log(res.body.logInfo);
                next({type: "LOGIN_SUCCESS", isSuccess: res.body.isSuccess, logInfo: res.body.logInfo});
            });
    }
    else
        next(action);
};