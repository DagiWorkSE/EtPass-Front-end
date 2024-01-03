import React, { useState } from "react";

const StatusModal = ({ titlee }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        type="button"
        className="btn login-form-btn mt-2 w-100"
        onClick={handleShowModal}
      >
        {titlee}
      </button>

      {showModal && (
        <div className="modal" tabIndex="-1" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{titlee}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">hi there</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-outline-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatusModal;
