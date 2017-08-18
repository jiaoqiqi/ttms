require('../../css/style.css')
import React ,{Component} from 'react';

export default class Register extends Component {

    register(){
        const userName = this.refs.userName.value;
        const userPassword = this.refs.userPassword.value;
        const confirmPassword = this.refs.confirmPassword.value;

        if(!userName || !userPassword || !confirmPassword){
            alert("The name or password connot be empty");
            return ;
        }
        if(userPassword != confirmPassword){
            alert("the confirm password is not correct");
            return ;
        }
        this.props.onRegister({userName , userPassword , confirmPassword});
    }
    

    render() {
        return <div className="container-fluid back">

            <div className="col-md-5 col-md-offset-7 logPage ">
                <h2>注册</h2>
                <hr/>
                <div className="input-group account">
                    <label className="input-group-addon ">账号</label>
                    <input type="text" id="account" ref="userName" className="form-control"/>
                </div>

                <div className="input-group account">
                    <lable className="input-group-addon">密码</lable>
                    <input type="password" id="password" ref="userPassword" className="form-control"/>
                </div>

                <div className="input-group account">
                    <lable className="input-group-addon">确认密码</lable>
                    <input type="password" id="confirmPassword" ref="confirmPassword" className="form-control"/>
                </div>

                <button className='btn btn-primary  logButton' onClick={this.register.bind(this)} >注册</button>

            </div>
        </div>;

    }
}