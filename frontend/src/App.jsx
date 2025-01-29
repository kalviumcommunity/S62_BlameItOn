import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HomePage from "./Pages/HomePage";
import ExcuseList from "./Pages/ExcuseList.jsx";
import { Routes, Route } from "react-router-dom";
import UsersList from "./Pages/UserList.jsx";
import AddUser from "./Pages/AddUser.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/excuse" element={<ExcuseList />}></Route>
        <Route path="/users" element={<UsersList />}></Route>
        <Route path="/add-user" element={<AddUser />}></Route>
      </Routes>
    </>
  );
}

export default App;
