export const DetailsModal = ({ detailUser }) => {
  console.log(detailUser);
  return (
    <div
      className="modal fade"
      id="detailUser"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {detailUser?.firstName + " " + detailUser.lastName}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <img src={detailUser?.image} className="img-thumbnail" />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{detailUser?.email}</li>
              <li className="list-group-item">{detailUser?.phone}</li>
              <li className="list-group-item">{detailUser?.height} cm</li>
              <li className="list-group-item">{detailUser?.gender}</li>
              <li className="list-group-item">{detailUser?.domain}</li>
              <li className="list-group-item">
                {detailUser?.company?.department}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
