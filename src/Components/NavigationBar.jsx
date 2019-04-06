import React from 'react';
import Button from "react-bootstrap/es/Button";

let Brand = (url)=> {
    return(
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block"/>
            <a className="navbar-brand d-none d-lg-inline-block" href="/">
                <img src={url} title="Urbanhire" alt="Urbanhire"/>
            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="/">
                <img src={url} alt="logo"/>
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"/>
                </button>
            </div>
        </div>
    )
};

let NavItem = (title)=> {
    return(
        <li className="nav-item">
            {title.toLowerCase() === 'login' ?
                <a href="/" className="login nav-link m-2 menu-item font-weight-bold">{title}</a>
            :
                <a href="/" className="nav-link m-2 menu-item">{title}</a>
            }
        </li>
    )
};

export let NavigationBar = ()=> {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            {Brand('https://winter-cdn.urbanhire.com/img/logo.svg')}
            <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul className="navbar-nav ml-auto flex-nowrap">
                    {NavItem("Home")}
                    {NavItem("Products")}
                    {NavItem("Pricing")}
                    {NavItem("Customers")}
                    {NavItem("Partners")}
                    {NavItem("Job Search")}
                    {NavItem("Login")}
                    <Button size="sm" variant="success" className="nav-link color-me">Try for Free</Button>
                </ul>
            </div>
        </nav>
    )
};