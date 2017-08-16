export default (state = {logSuccess: ""}, action) => {
        if(action.type === 'LOGIN_SUCCESS') {
                state.logSuccess = action.isSuccess;
                return Object.assign({}, state); //创建对象拷贝 返回新的state对象
           }

            return state;
    }