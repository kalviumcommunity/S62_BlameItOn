import React, { useEffect, useState } from "react";
import axios from "axios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://s62-blameiton-1.onrender.com/users/get-users"
        );
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users.");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">
        User Directory
      </h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <div
              key={user._id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4 flex items-center">
                <img
                  src={user.profilePhoto}
                  alt={`${user.username}'s profile`}
                  className="w-16 h-16 rounded-full border border-gray-300 mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {user.username}
                  </h2>
                  <p className="text-gray-500">Points: {user.points}</p>
                </div>
              </div>
              <div className="p-4 border-t border-gray-200">
                <p className="text-gray-600">{user.bio}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Joined: {new Date(user.joinedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UsersList;
