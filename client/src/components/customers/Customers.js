import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCustomers } from "../../actions/customersActions";

class Customers extends Component {
  componentDidMount() {
    this.props.getCustomers();
  }
  render() {
    const { user } = this.props.auth;
    const { customers, loading } = this.props.customers;
    let content;
    if (customers === null || loading) {
      content = <h4>Loading...</h4>;
    } else {
      content = (
        <ul>
          {customers.map(customer => {
            return (
              <li key={customer._id}>
                <h4>{customer.name}</h4>
              </li>
            );
          })}
        </ul>
      );
    }
    return <div>{content}</div>;
  }
}

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
};

const mapStateTOProps = state => ({
  customers: state.customers,
  auth: state.auth
});

export default connect(
  mapStateTOProps,
  { getCustomers }
)(Customers);
