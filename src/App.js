import React, { Component } from "react";
import { Switch, Route, Link, NavLink, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardAdmin from "./components/board-admin.component";
import About from './components/About';
import Contact from './components/Contact';

import ProductComponent from "./components/ProductComponent";


import Footer from "./components/Footer";
import CouponComponent from "./components/CouponComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser} = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/home"} className="navbar-brand">
            CouponDeals
          </Link>
          {/* <div className="navbar-nav mr-auto">

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )} */}

            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )} */}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )} */}
          {/* </div> */}

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              
              <li className="nav-item">
                <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/service">Coupons</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/products">Deals</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
              </li>

              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            {/* <Route exact path={["/", "/home"]} component={Home} /> */}
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/service" component={CouponComponent}/>
            <Route path="/products" component={ProductComponent}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/admin" component={BoardAdmin} />
            {/* <Redirect to="/" /> */}
            <Redirect to="/login" />
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
