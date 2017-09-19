import {connect} from "react-redux";
import MovieList from "../components/movieList";

const mapStateToProps = (state) => {
    return{
        movie:state.movieList.movie,
        deleteMovieFlag:state.movieList.deleteMovieFlag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayMovies : () => {
            dispatch({type:"SELECT_MOVIES"})
        },
        OnDeleteMovie : (movieId) => {
            dispatch({type:"DELETE_MOVIE",movieId})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);