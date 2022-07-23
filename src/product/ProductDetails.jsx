import React from "react";

const ProductDetails = ({ product, isOpen = false, onClose  }) => {
  if (!product) {
    return null;
  }
  return (
    <>
    <div
      style={{ display: isOpen ? "block" : "none" }}
      className="modal fade show"
      tabIndex="-1"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Product Cart</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
          <div className="row mt-5">
        <div className="col-sm-6">
          <img
            src={product.image}
            alt={product.name}
            width="100%"
            height="500px"
          />
        </div>
        <div className="col-sm-6">
          <h1>Thông tin sản phẩm</h1>
          <table className="table">
            <tbody>
              <tr>
                <td>Tên sản phẩm</td>
                <td>{product.name}</td>
              </tr>
              <tr>
                <td>Giá sản phẩm</td>
                <td>{product.price}</td>
              </tr>
              <tr>
                <td>Số lượng</td>
                <td>{product.quantity}</td>
              </tr>
              <tr>
                <td>Mô tả sản phẩm</td>
                <td>{product.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>

    {isOpen && <div className="modal-backdrop fade show"></div>}
  </>
  );
};

export default ProductDetails;
