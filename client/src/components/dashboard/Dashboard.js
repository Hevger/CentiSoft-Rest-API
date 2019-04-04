import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCustomers } from "../../actions/customersActions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }
  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <button type="button" className="btn btn-primary">
          <Link type="button" class="btn btn-primary" />
          Customers
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { getCustomers }
)(Dashboard);
