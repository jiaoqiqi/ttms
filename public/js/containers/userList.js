import UserList from '../components/userList'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        user:state.userList.user,
    }
}

const mapDispatchTOProps = (dispatch) => {
    return {
        OnDisplayUsers : () => {
            dispatch({type:"SELECT_USER"})
        },
    }
}


export default connect(mapStateToProps,mapDispatchTOProps)(UserList);