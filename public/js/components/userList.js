import React, {Component} from 'react';

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

                        <td className="col seat-col">
                            <span className="glyphicon glyphicon-erase" data-toggle="modal"
                                  onClick={this.initState.bind(this, user)} data-target="#myModal1"/>
                        </td>

                    </tr>
                    </tbody>
                </table>
            </div>
        });

        return <div>
            <div className="add-div">
                <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                    添加用户
                </button>
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