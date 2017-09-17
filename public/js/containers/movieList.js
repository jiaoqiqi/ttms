import {connect} from "react-redux";
import MovieList from "../components/movieList";

const mapStateToProps = (state) => {
    return{
        movie:state.movieList.movie,
        deleteFlag:state.movieList.deleteFlag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayMovies : () => {
            dispatch({type:"SELECT_MOVIES"})
        },
        OnDeleteMovie : (movieId) => {
            dispatch({type:"DELETE_MOVIES",movieId})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);