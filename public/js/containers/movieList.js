import {connect} from "react-redux";
import MovieList from "../components/movieList";

const mapStateToProps = (state) => {
    return{
        movie:state.movieList.movie,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnDisplayMovies : () => {
            dispatch({type:"SELECT_MOVIES"})
        },
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieList);