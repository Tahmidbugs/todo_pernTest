import React, { Fragment } from "react";

export default function InputToDo() {
  const [description, setDescription] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
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
          />
          <button className="btn btn-success">Add</button>
        </form>
      </div>
    </Fragment>
  );
}
