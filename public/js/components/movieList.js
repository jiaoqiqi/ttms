import React, {Component} from 'react';

export default class MovieList extends Component {
    constructor(props) {
        super(props)
        {
            this.state = {
                movieId: null,
                movieName: null,
                movieLead: null,
                movieActor: null,
                movieDuration: null,
                movieInfo: null
            }
        }
    }


    componentWillMount() {
        this.props.OnDisplayMovies();
    }

    deleteMovie(movieId){
        this.props.OnDeleteMovie(movieId);
    }



    componentWillReceiveProps(nextProps){
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            window.location.reload();

        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
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
                        <td className="col">{movie.movieId}</td>
                        <td className="col">{movie.movieName}</td>
                        <td className="col">{movie.movieLead}</td>
                        <td className="col">{movie.movieActor}</td>
                        <td className="col">{movie.movieDuration}</td>
                        <td className="col">{movie.movieInfo}</td>

                        <td>
                            <button className="btn btn-primary "
                            onClick={this.deleteMovie.bind(this,movie.movieId)}>
                                删除
                            </button>
                        </td>
                        <td>
                            <button className="btn btn-primary "
                                    data-toggle="modal" data-target="#myModal"
                            >
                                修改
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div className="margin">
            <table>
                <tbody>
                <tr>
                    <th className="col-th">编号</th>
                    <th className="col-th">电影名称</th>
                    <th className="col-th">主演</th>
                    <th className="col-th">导演</th>
                    <th className="col-th">时长</th>
                    <th className="col-th">简介</th>
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
                            <h4 className="modal-title" id="myModalLabel">y影片信息</h4>
                        </div>

                        <div className="modal-body">
                            电影名称：<input type="text" ref="name" />
                        </div>

                        <div className="modal-body">
                            电影主演：<input type="text" ref="role" />
                        </div>

                        <div className="modal-body">
                            电影导演：<input type="text" ref="role" />
                        </div>

                        <div className="modal-body">
                            电影市时长：<input type="text" ref="role" />
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-default"
                                    data-dismiss="modal">关闭
                            </button>
                            <button type="button" className="btn btn-primary" >
                                提交更改
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}