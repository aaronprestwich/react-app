import React from "react";

export default class LoginForm extends React.Component {
    render(){
        return (
                <form>     
                    <div className="card bg-light m-5 p-5">
                        <div className="card-title text-center">
                            <h3>Login</h3>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email"><b>Username</b></label>
                            <input type="email" className="form-control" placeholder="Enter Username" name="username" required></input>
                        </div>   
                        <div className="form-group">
                            <label htmlFor="password"><b>Password</b></label>
                            <input type="password" className="form-control" placeholder="Enter Password" name="password" required></input>
                        </div>   
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="dropdownCheck"></input>
                            <label className="form-check-label" htmlFor="dropdownCheck">
                                Remember me
                            </label>
                        </div>
                        <button className="btn btn-primary" type="submit">Login</button>
                        <span className="password">Forgot <a href="">password?</a></span>
                    </div>
                </form>
        )
    }
}
