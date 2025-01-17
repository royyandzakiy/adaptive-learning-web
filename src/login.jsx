import React, { Component } from 'react';
import './css/login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div class="container">
                <div class="row">
                    <div class="col-md-4 col-md-offset-4 text-center">
                        <div class="search-box">
                            <div class="caption">
                                <h3>Login Form</h3>
                                <p>Silahkan login terlebih dahulu</p>
                            </div>
                            <form action="" class="loginForm">
                                <div class="input-group">
                                    <input type="text" id="username" class="form-control" placeholder="Username" />
                                    <input type="password" id="paw" class="form-control" placeholder="Password" />
                                    <input type="submit" id="submit" class="form-control" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="aro-pswd_info">
                            <div id="pswd_info">
                                <h4>Password must be requirements</h4>
                                <ul>
                                    <li id="letter" class="invalid">At least <strong>one letter</strong></li>
                                    <li id="capital" class="invalid">At least <strong>one capital letter</strong></li>
                                    <li id="number" class="invalid">At least <strong>one number</strong></li>
                                    <li id="length" class="invalid">Be at least <strong>8 characters</strong></li>
                                    <li id="space" class="invalid">be<strong> use [~,!,@,#,$,%,^,&,*,-,=,.,;,']</strong></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Login;
