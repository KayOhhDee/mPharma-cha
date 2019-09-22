import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProducts, add, edit, remove } from "../redux/actions/products";
import AddForm from "./AddForm";
import EditForm from "./EditForm";
import DeleteModal from "./DeleteModal";

class Main extends Component {
  state = {
    addModal: false,
    editModal: false,
    deleteModal: false,
    rowSelect: null,
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
        this.setState({
          rowSelected: item.id !== this.state.rowSelected ? item.id : null,
          disableBtn: item.id === this.state.rowSelected
        });
    } else {
      return;
    }
  };

  render() {
    const list = this.props.products.map(
      item =>
        <tr
          style={{
            backgroundColor:
              item.id === this.state.rowSelected ? "#a4d4ff" : ""
          }}
          onClick={this.handleSelect.bind(this, item)}
          key={item.id}
        >
          <td>{item.name}</td>
          <td>{this.getLatestDate(item)}</td>
        </tr>
    );

    const selectedRow = this.props.products.find(
      item => this.state.rowSelected === item.id
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
                {this.props.error ? (
                  <tbody>
                    <tr>
                      <td colspan="2" style={{ textAlign: "center" }}>
                        Products not found
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>{list}</tbody>
                )}
              </table>
            </div>
          </div>
        </div>
        <AddForm
          modalState={this.state.addModal}
          toggle={this.addtoggle}
          addProduct={this.props.add}
        />
        {this.state.editModal && (
          <EditForm
            modalState={this.state.editModal}
            toggle={this.edittoggle}
            selectedRow={selectedRow}
            getLatestDate={this.getLatestDate}
            editProduct={this.props.edit}
          />
        )}
        {this.state.deleteModal && (
          <DeleteModal
            modalState={this.state.deleteModal}
            toggle={this.deletetoggle}
            selectedRow={selectedRow}
            deleteProduct={this.props.remove}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  error: state.error
});

export default connect(
  mapStateToProps,
  { loadProducts, add, edit, remove }
)(Main);
