import Register from '../components/register'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        registerSuccess : state.register.registerSuccess,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister:(registerInfo)=>{
            dispatch({type:'REGISTER',data:registerInfo})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
