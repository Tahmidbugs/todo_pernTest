import React, { Fragment } from "react";

import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:5000/" });

export default function InputToDo() {
  const [description, setDescription] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("todos", {
        description: description,
      });
      console.log(response);
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div style={{ paddingTop: 100 }}>
      <h1 className="text-center mt-5">PERN Todo List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form className="d-flex m-5 " onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control"
            style={{
              marginRight: 20,
              marginLeft: 30,
              width: 500,
              alignSelf: "center",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={"Add Task"}
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </div>
  );
}
