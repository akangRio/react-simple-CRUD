export const Sidebar = () => {
  return (
    <div className="d-flex flex-column gap-2 m-2">
      <button
        type="button"
        className="btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#createUser"
      >
        Create New User
      </button>
    </div>
  );
};
