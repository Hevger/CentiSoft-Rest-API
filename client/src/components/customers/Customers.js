import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCustomers } from "../../actions/customersActions";

class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = { openModel: false };
  }

  state = {
    openModel: false
  };

  toggleModal = () => {
    this.setState({
      openModel: !this.state.openModel
    });
  };

  componentDidMount() {
    this.props.getCustomers();
  }
  populateTable(customer) {
    return (
      <tr key={customer._id}>
        <td style={{ fontWeight: "bold" }}>{customer.name}</td>
        <td>{customer.address}</td>
        <td>{customer.address2}</td>
        <td>{customer.zip}</td>
        <td>{customer.city}</td>
        <td>{customer.country}</td>
        <td>{customer.phone}</td>
        <td>{customer.email}</td>
      </tr>
    );
  }

  render() {
    //const { user } = this.props.auth;
    const { customers, loading } = this.props.customers;
    let content;
    if (customers === null || loading) {
      content = <h4>Loading...</h4>;
    } else {
      content = (
        <div class="table-responsive">
          <table className="table table-hover ">
            <thead>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Address 2</th>
              <th scope="col">ZIP</th>
              <th scope="col">City</th>
              <th scope="col">Country</th>
              <th scope="col">Phone</th>
              <th scope="col">E-mail</th>
            </thead>
            <tbody>{customers.map(this.populateTable)}</tbody>
          </table>
        </div>
      );
    }
    return (
      <div>
        {" "}
        <button
          type="button"
          onClick={this.toggleModal}
          class="btn btn-primary"
        >
          Create Customer
        </button>{" "}
        {content}
      </div>
    );
  }
}

Customers.propTypes = {
  getCustomers: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  customers: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  customers: state.customers,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCustomers }
)(Customers);
