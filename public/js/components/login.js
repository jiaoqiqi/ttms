import React ,{Component} from 'react';

export default class Login extends Component {

    render() {
        return <div className="container-fluid back">

            <div className="col-md-5 col-md-offset-7 logPage ">

                <h2>登录</h2>
                <div className="input-group account">
                    <label className="input-group-addon ">账号</label>
                    <input type="text" id="account" ref="userName" className="form-control"/>
                </div>

                <div className="input-group account">
                    <lable className="input-group-addon">密码</lable>
                    <input type="password" id="password" ref="userPassword" className="form-control"/>
                </div>

                <button className='btn btn-primary  logButton' >登录</button>

            </div>
        </div>;

    }
}