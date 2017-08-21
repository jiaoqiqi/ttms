import React, {Component} from 'react';
import {browserHistory} from 'react-router';


export default class UserList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            name: null,
            role: null
        }
    }

    initState(user) {
        this.setState({
            id: user.id,
            name: user.name,
            role: user.role
        })

    }

    componentWillMount() {
        this.props.OnDisplayUsers();
    }

    deleteUser(id) {
        this.props.onDeleteUser({id});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.deleteFlag === true) {
            alert("删除成功！");
            window.location.reload(); //reload the page auto;

        } else if (nextProps.deleteFlag === false) {
            alert("删除失败！");
            this.props.OnDisplayUsers();
        }
    }

    render() {
        const userList = this.props.user.map((user, i) => {

            return <div key={i}>
                <hr/>
                <table>
                    <tbody>
                    <tr>
                        <td className="col">{user.id}</td>
                        <td className="col">{user.name}</td>
                        <td className="col">{user.role}</td>

                        <td>
                            <button className="btn btn-primary "
                                    onClick={this.deleteUser.bind(this, user.id)}>
                                删除</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            <div className="add-div">
            </div>
            <hr/>
            <table>
                <tbody>
                <tr>
                    <th className="col-th">序号</th>
                    <th className="col-th">姓名</th>
                    <th className="col-th">职权</th>
                </tr>
                </tbody>
            </table>

            <div>{userList}</div>

        </div>

    }
}