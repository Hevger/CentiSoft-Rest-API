import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authorizedLinks = (
      <ul>
        <li className="nav-link">
          <span>logged as {user.name} - </span>
          {/* eslint-disable-next-line */}
          <a href="#" onClick={this.onLogoutClick.bind(this)}>
            Log out
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/login">
            Log In
          </Link>
        </li>
      </ul>
    );

    return (
      <header>
        <div className="container">
          <div id="branding">
            <h1>
              <Link className="navbar-brand" to="/">
                <span className="highlight">CentiSoft</span>
              </Link>
            </h1>
          </div>
          <nav>{isAuthenticated ? authorizedLinks : guestLinks}</nav>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);