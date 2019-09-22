import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProducts, addProduct, editProduct, deleteProduct } from "../redux/actions/products";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import DeleteModal from "./DeleteModal";

class Main extends Component {
  state = {
    addModal: false,
    editModal: false,
    deleteModal: false,
    rowSelect: null,
    selectedRow: [],
    disableBtn: true
  };

  componentDidMount() {
    this.props.loadProducts();
  }

  getLatestDate(item) {
    var pricesArr = item.prices.sort(
      (a, b) => new Date(a.date) - new Date(b.date)
    );
    return pricesArr[pricesArr.length - 1].price;
  }

  addtoggle = () => {
    this.setState(prevState => ({
      addModal: !prevState.addModal
    }));
  };

  edittoggle = () => {
    this.setState(prevState => ({
      editModal: !prevState.editModal
    }));
  };

  deletetoggle = condition => {
    this.setState(prevState => ({
      deleteModal: !prevState.deleteModal,
      disableBtn: condition ? true : false
    }));
  };

  handleSelect = (item, event) => {
    if (item && event.currentTarget) {
      if (item.id - 1 !== this.state.rowSelect) {
        this.setState({
          rowSelect: item.id - 1,
          selectedRow: item,
          disableBtn: item.id - 1 === this.state.rowSelect
        });
      } else {
        this.setState({
          rowSelect: null,
          disableBtn: true
        });
      }
    } else {
      return;
    }
  };

  render() {
    const list = this.props.products.map(
      item =>
        item.id && (
          <tr
            style={{
              backgroundColor:
                item.id - 1 === this.state.rowSelect ? "#a4d4ff" : ""
            }}
            onClick={this.handleSelect.bind(this, item)}
            key={item.id}
          >
            <td>{item.name}</td>
            <td>{this.getLatestDate(item)}</td>
          </tr>
        )
    );

    return (
      <div>
        <div className="head-text">
          <p>{`${!this.state.disableBtn ? "1" : "No"} row selected`}</p>
        </div>
        <div className="button-container">
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#ffbb33" }}
              className="button"
              onClick={this.addtoggle}
            >
              Add
            </button>
          </div>
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#ffbb33" }}
              className="button"
              disabled={this.state.disableBtn}
              onClick={this.edittoggle}
            >
              Edit
            </button>
          </div>
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#FF3547" }}
              className="button"
              disabled={this.state.disableBtn}
              onClick={this.deletetoggle}
            >
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
                <tbody>{list}</tbody>
              </table>
            </div>
          </div>
        </div>
        <AddForm
          modalState={this.state.addModal}
          toggle={this.addtoggle}
          addProduct={this.props.addProduct}
        />
        {this.state.editModal && (
          <EditForm
            modalState={this.state.editModal}
            toggle={this.edittoggle}
            selectedRow={this.state.selectedRow}
            getLatestDate={this.getLatestDate}
            editProduct={this.props.editProduct}
          />
        )}
        {this.state.deleteModal && (
          <DeleteModal
            modalState={this.state.deleteModal}
            toggle={this.deletetoggle}
            selectedRow={this.state.selectedRow}
            deleteProduct={this.props.deleteProduct}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { loadProducts, addProduct, editProduct, deleteProduct }
)(Main);
