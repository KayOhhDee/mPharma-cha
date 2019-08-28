import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div>
        <div className="head-text">
          <p>No row selected</p>
        </div>
        <div className="button-container">
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#ffbb33" }}
              className="button"
            >
              Add
            </button>
          </div>
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#ffbb33" }}
              className="button"
            >
              Edit
            </button>
          </div>
          <div className="button-container-sub">
            <button
              style={{ backgroundColor: "#FF3547" }}
              className="button"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main
