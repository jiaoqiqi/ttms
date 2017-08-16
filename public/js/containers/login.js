import Login from '../components/login'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        logSuccess: state.login.logSuccess
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onLogin:(userInfo)=>{
            dispatch({type:'LOGIN',data:userInfo})
        },
        onChangeLogSuccess: () => {
            dispatch({type: "CHANGE_LOG_SUCCESS"});
        }

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

