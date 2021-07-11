import "./App.css";
import Headers from "./components/headers";
import User from "./components/user";
import React from "react";
let isLoggedIn = true;
let userList = [
  { id: 1, firstName: "ARİF", lastName: "AKNAR", age: 25 },
  { id: 2, firstName: "mert", lastName: "can", age: 21},
];

function App() {
  return (
    <>
      <Headers />
      <User isLoggedIn={isLoggedIn}  userList={userList}/>{" "}
      {/* App.js den user.js ye Props Transeri */}
    </>
  );
}

export default App;
