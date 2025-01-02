function Modal({ name, image }) {
  return (
    <>
      <div
        className="modal fade"
        id={name}
        tabIndex="-1"
        aria-labelledby={`#${name}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center">
              <div className="justify-content-center">
                <img className="img-fluid w-100" src={image} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Modal;
