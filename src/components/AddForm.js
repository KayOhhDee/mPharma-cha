import React, {Component} from 'react';

class AddForm extends Component {
  state = {
    name: '',
    price: ''
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, price} = this.state
    this.props.addProduct({name, price});
    this.setState({
      name: '', price: ''
    })
    this.props.toggle();
  }

  render() {
    const {name, price} = this.state;

    return (
      <div>
        {this.props.modalState && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span onClick={this.props.toggle} className="close">
                  &times;
                </span>
                <h2>ADD NEW DRUG</h2>
              </div>
              <div className="modal-body">
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="fname">Name:</label>
                  <input
                    type="text"
                    id="fname"
                    name="name"
                    placeholder="Name of drug.."
                    onChange={this.handleChange}
                    value={name}
                    required
                  />

                  <label htmlFor="price1">Price:</label>
                  <input
                    type="number"
                    step="any"
                    min="0"
                    id="price1"
                    name="price"
                    placeholder="Price.."
                    onChange={this.handleChange}
                    value={price}
                    required
                  />

                  <input type="submit" value="Add" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default AddForm;
