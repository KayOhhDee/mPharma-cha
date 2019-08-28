import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadProducts, addProduct } from "../redux/actions/products";
import AddForm from "./AddForm";

class Main extends Component {
  state = {
    addmodal: false,
    rowSelect: null,
    selectedRow: [],
    disablebtn: true
  };

  componentDidMount() {
    this.props.loadProducts();
  }

  getLatestDate(item) {
    let pricesArr = item.prices.map(i => {
      i.date = new Date(i.date);
      return i;
    });

    let a;
    do {
      a = false;
      for (let i = 0; i < pricesArr.length - 1; i++) {
        if (pricesArr[i].date > pricesArr[i + 1].date) {
          let init = pricesArr[i];
          pricesArr[i] = pricesArr[i + 1];
          pricesArr[i + 1] = init;
          a = true;
        }
      }
    } while (a);

    return pricesArr[pricesArr.length - 1].price;
  }

  addtoggle = () => {
    this.setState(prevState => ({
      addmodal: !prevState.addmodal
    }));
  };

  handleSelect = (item, event) => {
    if(item && event.currentTarget) {
      if((item.id - 1) !== this.state.rowSelect) {
        this.setState({
          rowSelect: item.id - 1,
          selectedRow: item,
          disablebtn: item.id - 1 === this.state.rowSelect
        });
      } else {
        this.setState({
          rowSelect: null,
          disablebtn: true
        })
      }
    } else {
      return;
    }
  };

  render() {
    const list = this.props.products.map(item => (
      item.name && <tr 
        style={{backgroundColor: (item.id - 1) === this.state.rowSelect ? "#a4d4ff" : ""}} 
        onClick={this.handleSelect.bind(this, item)} key={item.id}
      >
        <td>{item.name}</td>
        <td>{this.getLatestDate(item)}</td>
      </tr>
    ));

    return (
      <div>
        <div className="head-text">
          <p>{`${!this.state.disablebtn ? "1" : "No"} row selected`}</p>
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
              disabled={this.state.disablebtn}
            >
              Edit
            </button>
          </div>
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#FF3547" }}
              className="button"
              disabled={this.state.disablebtn}
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
          modalState={this.state.addmodal}
          toggle={this.addtoggle}
          addProduct={this.props.addProduct}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(
  mapStateToProps,
  { loadProducts, addProduct }
)(Main);
