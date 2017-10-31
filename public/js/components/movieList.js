import React, {Component} from 'react';

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                movieId: null,
                movieName: null,
                movieLead: null,
                movieAct: null,
                movieDuration: null,
                movieInfo: null
            }
        }
    }


    componentWillMount() {
        this.props.OnDisplayMovies();
    }

    deleteMovie(movieId) {
        this.props.OnDeleteMovie(movieId);
    }

    modifyMovie() {
        this.props.OnModifyMovie({
            movieId: this.state.movieId,
            movieName: this.state.movieName,
            movieLead: this.state.movieLead,
            movieAct: this.state.movieAct,
            movieDuration: this.state.movieDuration,
            movieInfo: this.state.movieInfo
        })

    }

    onChangeMovieName() {
        this.setState({
            movieName: this.refs.movieName.value
        });
    }

    onChangeMovieLead() {
        this.setState({
            movieLead: this.refs.movieLead.value
        })
    }

    onChangeMovieAct() {
        this.setState({
            movieAct: this.refs.movieAct.value
        })
    }

    onChangeMovieDuration() {
        this.setState({
            movieDuration: this.refs.movieDuration.value
        })
    }

    onChangeMovieInfo() {
        this.setState({
            movieInfo: this.refs.movieInfo.value
        })
    }

    onChageMovieId(movieId) {
        this.setState({
            movieId: movieId
        })
    }

    addMovie(){
        const movieName = this.refs.movieName.value;
        const movieLead = this.refs.movieLead.value;
        const movieAct = this.refs.movieAct.value;
        const movieDuration = this.refs.movieDuration.value;
        const movieInfo = this.refs.movieInfo.value;


        if (!movieName || !movieLead || !movieAct || !movieDuration || !movieInfo) {
            alert("The movie info connot be empty");
            return;
        }

        this.props.OnAddMovie({movieName,movieLead,movieAct,movieDuration,movieInfo});

    }

    findMovie(){
        const findMovieName = this.refs.findMovieName.value;
        this.props.OnFindMovie(findMovieName);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteMovieFlag === true) {
            alert("删除成功！");
            window.location.reload();

        } else if (nextProps.deleteMovieFlag === false) {
            alert("删除失败！");
            window.location.reload();
        }

        if (nextProps.modifyMovieFlag === true) {
            alert("修改成功！");
            window.location.reload();

        } else if (nextProps.modifyMovieFlag === false) {
            alert("修改失败！");
            window.location.reload();
        }

        if (nextProps.addSuccess === true) {
            alert("添加成功！");
            window.location.reload();

        } else if (nextProps.addSuccess === false) {
            alert("添加失败！");
            window.location.reload();
        }

        if (nextProps.findMovieFlag === true) {
        } else if (nextProps.findMovieFlag === false) {
            alert("查找失败！");
        }
    }

    render() {
        const movieList = this.props.movie.map((movie, movieId) => {

            return <div key={movieId}>
                <hr/>
                <table className="table-hover">
                    <tbody>
                    <tr>
                        <td className="movieList">{movie.movieId}</td>
                        <td className="movieList">{movie.movieName}</td>
                        <td className="movieLead">{movie.movieLead}</td>
                        <td className="movieList">{movie.movieAct}</td>
                        <td className="movieList">{movie.movieDuration}</td>
                        <td className="movieList">{movie.movieInfo}</td>

                        <td>
                            <button className="btn btn-primary distance"
                                    onClick={this.deleteMovie.bind(this, movie.movieId)}>
                                删除
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-primary "
                                    data-toggle="modal" data-target="#modifyMovie"
                                    onClick={this.onChageMovieId.bind(this, movie.movieId)}>
                                修改
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div className="margin" >
            <div>
                <h2>影片信息管理</h2>
            </div>
            <div>
                <button className="btn btn-primary addButton"
                        data-toggle="modal" data-target="#addMovie">添加</button>
            </div>
            <div>
                <input type="text" className="findInput" ref="findMovieName"/>
                <button className="btn btn-primary "
                        onClick={this.findMovie.bind(this)}>查找</button>
            </div>
            <table>
                <tbody>
                <tr>
                    <th className="movieList">编号</th>
                    <th className="movieList">电影名称</th>
                    <th className="movieLead">主演</th>
                    <th className="movieList">导演</th>
                    <th className="movieList">时长</th>
                    <th className="movieList">简介</th>
                </tr>
                </tbody>
            </table>

            <div>{movieList}</div>

            <div className="modal fade" id="modifyMovie" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">影片信息</h4>
                        </div>

                        <div className="modal-body">
                            电影名称：<input type="text" ref="addName" className="kuang"
                                        defaultValue={this.state.movieName ? this.state.movieName : ""}
                                        onChange={this.onChangeMovieName.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影主演：<input type="text" ref="movieLead" className="kuang"
                                        onChange={this.onChangeMovieLead.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影导演：<input type="text" ref="movieAct" className="kuang"
                                        onChange={this.onChangeMovieAct.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影时长：<input type="text" ref="movieDuration" className="kuang"
                                        onChange={this.onChangeMovieDuration.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影简介：<input type="text" ref="movieInfo" className="kuang"
                                        onChange={this.onChangeMovieInfo.bind(this)}/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" onClick={this.modifyMovie.bind(this)}>
                                提交更改
                            </button>
                        </div>

                    </div>
                </div>
            </div>



            <div className="modal fade" id="addMovie" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">添加影片信息</h4>
                        </div>

                        <div className="modal-body">
                            电影名称：<input type="text" ref="movieName" className="kuang"/>
                        </div>

                        <div className="modal-body">
                            电影主演：<input type="text" ref="movieLead" className="kuang"/>
                        </div>

                        <div className="modal-body">
                            电影导演：<input type="text" ref="movieAct" className="kuang"/>
                        </div>

                        <div className="modal-body">
                            电影时长：<input type="text" ref="movieDuration" className="kuang"/>
                        </div>

                        <div className="modal-body">
                            电影简介：<input type="text" ref="movieInfo" className="kuang"/>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal"
                                     >关闭
                            </button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addMovie.bind(this)}>
                                确认添加
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}