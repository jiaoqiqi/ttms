import request from 'superagent';

export default store => next => action => {
    if (action.type === 'REGISTER') {
        request.post('/registerInfo')
            .send(action.data)
            .end((err, res) => {
                if (err) {

                    next({type: "REGISER_SUCCESS", isSuccess: false});
                }
                next({type: "REGISER_SUCCESS", isSuccess: res.body.isSuccess});
            });
    }
    else
        next(action);
};