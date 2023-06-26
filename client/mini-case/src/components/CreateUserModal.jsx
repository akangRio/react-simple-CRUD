import axios from "axios";
import { useState } from "react";

export const CreateUserModal = () => {
  const [form, setForm] = useState({
    name: "",
    university: "",
    birthDate: "",
    company: "",
  });

  const [disabled, setDisabled] = useState(true);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setDisabled(checkState);
  };

  const createUser = async () => {
    console.log(form, 12);
    const response = await axios.post("https://dummyjson.com/users/add", {
      form,
    });
    Swal.fire({
      icon: "success",
      title: "Created",
      text: "New User has created!",
    });

    setForm({
      name: "",
      university: "",
      birthDate: "",
      company: "",
    });
  };

  const checkState = () => {
    if (
      form.name !== "" &&
      form.university !== "" &&
      form.birthDate !== "" &&
      form.company !== ""
    )
      return false;
    else return true;
  };
  return (
    <div
      className="modal fade"
      id="createUser"
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
              New User Form
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label d-flex align-self-start"
              >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="name"
                value={form?.name ? form.name : ""}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label d-flex align-self-start"
              >
                University
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="university"
                value={form?.university ? form.university : ""}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1 "
                className="form-label d-flex align-self-start"
              >
                Birthdate
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="birthDate"
                value={form?.birthDate ? form.birthDate : ""}
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label d-flex align-self-start"
              >
                Company
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                onChange={handleChange}
                name="company"
                value={form?.company ? form.company : ""}
              />
            </div>
          </div>
          <div className="modal-footer">
            {form.name == "" ||
            form.university == "" ||
            form.birthDate == "" ||
            form.company == "" ? (
              <div>please complete the field</div>
            ) : null}
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() =>
                setForm({
                  name: "",
                  university: "",
                  birthDate: "",
                  company: "",
                })
              }
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={createUser}
              disabled={disabled}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
