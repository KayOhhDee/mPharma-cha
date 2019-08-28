import React from 'react';

const DeleteModal = (props) => {
  
  const handleDelete = () => {
    props.deleteProduct(props.selectedRow.id);
    props.toggle();
  };

  return (
    <div>
      {props.modalState && (
        <div className="modal">
          <div className="modal-content">
            <div style={{backgroundColor:"#FF3547", marginBottom:"0"}} className="modal-header">
              <span onClick={props.toggle} className="close">&times;</span>
              <h2>DELETE</h2>
            </div>
            <div className="modal-body">
              <p className="warn-words">Are you sure to delete selected row?</p>
            </div>
            <div className="delete-btns">
              <button onClick={handleDelete} style={{backgroundColor:"#ff3547"}} className="delete-options">
                Yes
              </button>
              <button onClick={props.toggle} style={{backgroundColor:"#444551"}} className="delete-options">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteModal;
