import React, {Component} from 'react';

export default class UpdateUser extends Component{
    render(){
        return <div>
            <div className="header">
                <h1>修改用户信息</h1>
            </div>
            <div>

                <div>
                    <input type="text" className="addInputStyle" id="name"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="password"/>
                </div>
                <div>
                    <input type="text" className="addInputStyle" id="role"/>
                </div>
                <dib>
                    <button className="btn btn-info btnStyle" >提交信息</button>
                </dib>
            </div>
        </div>
    }
}
