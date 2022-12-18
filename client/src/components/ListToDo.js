import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import EditToDo from "./EditToDo";
const api = axios.create({ baseURL: "http://localhost:5000/" });

export default function ListToDo() {
  const [toDos, setToDos] = useState([]);
  const getTodos = async () => {
    try {
      const todos = await api.get("/todos");

      console.log(todos.data);
      setToDos(todos.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);

  const handleDelete = async (index) => {
    try {
      await api.delete(`/todos/${index}`);
      console.log("delete successful");
      setToDos(toDos.filter((todo) => todo.todo_id !== index));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <table className="table table-dark table-hover mt-5 text-center">
        <thead>
          <tr>
            <th style={{ verticalAlign: "middle", fontSize: 20 }}>
              Task pending
            </th>
            <th style={{ verticalAlign: "middle", fontSize: 20 }}>Edit</th>
            <th style={{ verticalAlign: "middle", fontSize: 20 }}>Delete</th>
          </tr>
        </thead>
        {toDos.length > 0 ? (
          toDos.map((toDo) => (
            <tbody key={toDo.todo_id}>
              <tr>
                <td style={{ verticalAlign: "middle", fontSize: 20 }}>
                  {toDo.description}
                </td>
                <td>
                  <EditToDo todo={toDo} />
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    style={{ height: 50, width: 100, borderRadius: 20 }}
                    onClick={() => handleDelete(toDo.todo_id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))
        ) : (
          <tbody>
            <tr>No tasks pending</tr>
          </tbody>
        )}
      </table>
    </Fragment>
  );
}
