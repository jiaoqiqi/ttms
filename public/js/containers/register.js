import Register from '../components/register'
import {connect} from "react-redux";

const mapDispatchToProps = (dispatch) => {
    return {
        onRegister:(registerInfo)=>{
            dispatch({type:'REGISTER',data:registerInfo})
        },
    }
}


export default connect(()=>{return {}}, mapDispatchToProps)(Register);