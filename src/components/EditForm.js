import React, {Component} from 'react';

class EditForm extends Component {
  state = {
    name: "",
    price: ""
  };

  componentDidMount() {
     const name = this.props.selectedRow.name;
     if (this.props.selectedRow.id !== undefined) {
       var price = this.props.getLatestDate(this.props.selectedRow);
     }
     this.editPreset(name, price)
  }
  
  editPreset(name, price) {
    this.setState({
      name,
      price
    })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const {name, price} = this.state;
    this.props.editProduct(name, price, this.props.selectedRow.id);
    this.props.toggle();
  }

  render() {
   
    return (
      <div>
        {this.props.modalState && (
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span onClick={this.props.toggle} className="close">
                  &times;
                </span>
                <h2>EDIT DRUG</h2>
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
                    value={this.state.name}
                    required
                  />

                  <label htmlFor="price1">Price:</label>
                  <input
                    type="text"
                    id="price1"
                    name="price"
                    placeholder="Price.."
                    onChange={this.handleChange}
                    value={this.state.price}
                    required
                  />

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default EditForm;
