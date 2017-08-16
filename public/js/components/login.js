require('../../css/style.css')
import React ,{Component} from 'react';
// import {browserHistory} from 'react-router';

export default class Login extends Component {

    login(){
        const userName = this.refs.userName.value;
        const userPassword = this.refs.userPassword.value;

        if(!userName || !userPassword){
            alert("The name or password connot be empty");
            return ;
        }
        this.props.onLogin({userName , userPassword});
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logSuccess === true) {
            alert("login success");
            // browserHistory.push('/hello');
        } else if(nextProps.logSuccess === false) {
            alert("login failed");
        }

        this.props.onChangeLogSuccess();
    }


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

                <button className='btn btn-primary  logButton' onClick={this.login.bind(this)} >登录</button>

            </div>
        </div>;

    }
}