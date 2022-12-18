import { React, Fragment } from "react";
import "./App.css";
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";
function App() {
  return (
    <div
      style={{
        backgroundColor: "black",
        flex: 1,
        height: "100vh",
      }}
    >
      <InputToDo />
      <ListToDo />
    </div>
  );
}

export default App;
