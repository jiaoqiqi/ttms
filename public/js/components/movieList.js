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
    }

    render() {
        const movieList = this.props.movie.map((movie, movieId) => {

            return <div key={movieId}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="movieList">{movie.movieId}</td>
                        <td className="movieList">{movie.movieName}</td>
                        <td className="movieLead">{movie.movieLead}</td>
                        <td className="movieList">{movie.movieAct}</td>
                        <td className="movieList">{movie.movieDuration}</td>
                        <td className="movieList">{movie.movieInfo}</td>

                        <td>
                            <button className="btn btn-primary "
                                    onClick={this.deleteMovie.bind(this, movie.movieId)}>
                                删除
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-primary "
                                    data-toggle="modal" data-target="#myModal"
                                    onClick={this.onChageMovieId.bind(this, movie.movieId)}>
                                修改
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div className="margin">
            <div>
                <h2>影片信息管理</h2>
            </div>
            <div>
                <button className="btn btn-primary addButton">添加</button>
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

            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog"
                 aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal"
                                    aria-hidden="true">&times;</button>
                            <h4 className="modal-title" id="myModalLabel">影片信息</h4>
                        </div>

                        <div className="modal-body">
                            电影名称：<input type="text" ref="movieName"
                                        onChange={this.onChangeMovieName.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影主演：<input type="text" ref="movieLead"
                                        onChange={this.onChangeMovieLead.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影导演：<input type="text" ref="movieAct"
                                        onChange={this.onChangeMovieAct.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影时长：<input type="text" ref="movieDuration"
                                        onChange={this.onChangeMovieDuration.bind(this)}/>
                        </div>

                        <div className="modal-body">
                            电影简介：<input type="text" ref="movieInfo"
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
        </div>
    }
}