import {connect} from "react-redux";
import MovieList from "../components/movieList";

const mapStateToProps = (state) => {
    return{
        movie:state.movieList.movie,
        deleteMovieFlag:state.movieList.deleteMovieFlag,
        modifyMovieFlag : state.movieList.modifyMovieFlag,
        addMovieFlag : state.movieList.addMovieFlag
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayMovies : () => {
            dispatch({type:"SELECT_MOVIES"})
        },
        OnDeleteMovie : (movieId) => {
            dispatch({type:"DELETE_MOVIE",movieId})
        },
        OnModifyMovie : (movie) => {
            dispatch({type:"MODIFY_MOVIE",movie})
        },
        OnAddMovie : (movie) => {
            dispatch({type:"ADD_MOVIE",movie})
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);