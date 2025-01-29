import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    profilePhoto: "",
    bio: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("User Data:", user);

    const response = await axios
      .post("http://localhost:8080/users/create-user", user)
      .then(() => {
        console.log("Sucessfully added the user");
        navigate("/");
      })
      .catch((er) => {
        console.log("Error adding the user", er);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
          Add New User
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded"
          />
          <input
            type="url"
            name="profilePhoto"
            placeholder="Profile Photo URL"
            value={user.profilePhoto}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <textarea
            name="bio"
            placeholder="Bio"
            value={user.bio}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded hover:bg-indigo-700"
          >
            Add User
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="w-full bg-gray-500 text-white p-3 rounded hover:bg-gray-600 mt-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
