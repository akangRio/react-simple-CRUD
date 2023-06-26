import { Content } from "./Content";
import { CreateUserModal } from "./CreateUserModal";
import { Sidebar } from "./Sidebar";

export const Layout = () => {
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div
          className="col bg-primary-subtle col-lg-2 d-flex flex-column"
          style={{ minHeight: "100vh" }}
        >
          <Sidebar />
          <CreateUserModal />
        </div>
        <div
          className="col d-flex flex-column justify-content-between"
          style={{ minHeight: "100vh" }}
        >
          <div className="d-flex flex-row">
            <h1 className="display-6 align-self-start">Users</h1>
          </div>
          <div className="h-auto">
            <Content />
          </div>
          <div>Footer</div>
        </div>
      </div>
    </div>
  );
};
