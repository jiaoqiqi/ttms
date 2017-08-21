import UserList from '../components/userList'
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return{
        user:state.userList.user,
        deleteFlag:state.userList.deleteFlag
    }
}

const mapDispatchTOProps = (dispatch) => {
    return {
        OnDisplayUsers : () => {
            dispatch({type:"SELECT_USER"})
        },
        onDeleteUser: (id) => {
            dispatch({type: "DELETE_USER", id});
        },
    }
}


export default connect(mapStateToProps,mapDispatchTOProps)(UserList);