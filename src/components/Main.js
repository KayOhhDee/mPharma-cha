import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProducts } from "../redux/actions/products";

class Main extends Component {

  componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    return (
      <div>
        <div className="head-text">
          <p>No row selected</p>
        </div>
        <div className="button-container">
          <div className="button-container-sub">
            <button style={{ backgroundColor: "#ffbb33" }} className="button">
              Add
            </button>
          </div>
          <div className="button-container-sub">
            <button style={{ backgroundColor: "#ffbb33" }} className="button">
              Edit
            </button>
          </div>
          <div className="button-container-sub">
            <button style={{ backgroundColor: "#FF3547" }} className="button">
              Delete
            </button>
          </div>
        </div>
        <div>
          <div className="table-row">
            <div className="table-row-col">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { loadProducts }
)(Main);
