import { useState } from "react";

function BootstrapModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn btn-primary" onClick={() => setShow(true)}>
        Open Modal
      </button>

      {show && (
        <div className="modal d-block">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">My Modal</h5>

                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShow(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Hello Prerna!</p>
                <p>This is my Bootstrap Modal.</p>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShow(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BootstrapModal;
