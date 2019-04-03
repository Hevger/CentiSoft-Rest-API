import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <div id="branding">
            <h1>
              <span className="highlight">CentiSoft</span>
            </h1>
          </div>
          <nav>
            <ul>
              <li className="current">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="customers.html">Customers</a>
              </li>
              <li>
                <a href="clients.html">Clients</a>
              </li>
              <li>
                <a href="projects.html">Projects</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
