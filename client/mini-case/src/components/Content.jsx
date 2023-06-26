import { useEffect, useState } from "react";
import axios from "axios";
import { DetailsModal } from "./DetailsModal";
import { UpdateUserModal } from "./UpdateUserModal";

export const Content = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("https://dummyjson.com/users?limit=8");
    setUsers(response.data.users);
  };
  const [selectedUser, setSelectedUser] = useState({});

  const selectUser = (id) => {
    const selecting = users.filter((e) => e.id == id);
    setSelectedUser(selecting[0]);
  };

  const delUser = async (id) => {
    const response = await axios.delete(
      `https://dummyjson.com/users/${id}`,
      {}
    );
    Swal.fire({
      icon: "success",
      title: "Deleted",
      text: "User has been deleted!",
    });
    getUsers();
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Profile Picture</th>
            <th scope="col">Name</th>
            <th scope="col">University</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Company</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((e, i) => {
            if (e)
              return (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>
                    <img
                      src={e.image}
                      className="img-thumbnail"
                      style={{ width: "50px" }}
                      data-bs-toggle="modal"
                      data-bs-target="#detailUser"
                      onClick={() => selectUser(e.id)}
                    />
                  </td>
                  <td>{e.firstName + " " + e.lastName}</td>
                  <td>{e.university}</td>
                  <td>{e.birthDate}</td>
                  <td>{e.company.name}</td>
                  <td>
                    <div className="d-flex">
                      <div
                        className="icon-link icon-link-hover"
                        onClick={() => delUser(e.id)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          className="bi"
                        >
                          <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
                        </svg>
                      </div>
                      <div
                        className="icon-link icon-link-hover"
                        onClick={() => selectUser(e.id)}
                        data-bs-toggle="modal"
                        data-bs-target="#updateUser"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="bi"
                        >
                          <path d="M 12 0 L 8 4 L 12 8 L 12 5 C 15.859 5 19 8.14 19 12 C 19 12.88 18.82925 13.720094 18.53125 14.496094 L 20.046875 16.009766 C 20.651875 14.800766 21 13.442 21 12 C 21 7.038 16.963 3 12 3 L 12 0 z M 3.953125 7.9902344 C 3.348125 9.1992344 3 10.558 3 12 C 3 16.962 7.037 21 12 21 L 12 24 L 16 20 L 12 16 L 12 19 C 8.141 19 5 15.86 5 12 C 5 11.12 5.17075 10.279906 5.46875 9.5039062 L 3.953125 7.9902344 z"></path>
                        </svg>
                      </div>
                    </div>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
      <DetailsModal detailUser={selectedUser} />
      <UpdateUserModal detailUser={selectedUser} />
    </>
  );
};
