import React from "react";

export default class Navigation extends React.Component {
    render(){
        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                    <a className="navbar-brand px-5">
                        ImagiSOFT
                    </a>
                    <div className="justify-content-center">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="">Shop</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="">Contact Us</a>
                            </li>                
                        </ul>
                    </div>
                </nav>
    
    }
}