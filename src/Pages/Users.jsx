import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { getUsers } from "../api/users";
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  if (loading) {
    return (
      <h2 className="text-center mt-12 text-2xl font-bold text-gray-800">
        Loading users...
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto my-10 p-5">
      <h1 className="text-center text-4xl font-bold mb-5 text-gray-900">
        Users
      </h1>
      <div className="text-center mb-8">
        <input
          type="text"
          placeholder="Search users by name..."
          value={search}
          onChange={handleSearchChange}
          className="w-full max-w-md px-5 py-3 text-base border-2 border-gray-200 rounded-lg outline-none focus:border-blue-600"
        />
      </div>
      {search && (
        <p className="text-center text-gray-600 text-lg mb-8">
          Search results for:{" "}
          <strong className="text-gray-900">{search}</strong>
        </p>
      )}
      {filteredUsers.length === 0 ? (
        <h2 className="text-center text-gray-600 text-xl">
          No users found
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredUsers.map((user) => (
            <div
              className="bg-white p-6 rounded-xl shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={user.id}
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {user.name}
              </h2>

              <p className="text-gray-600 mb-5">
                {user.email}
              </p>

              <NavLink
                to={`/users/${user.id}`}
                className="inline-block px-4 py-2 bg-blue-600 text-white no-underline rounded-lg transition duration-300 hover:bg-blue-700"
              >
                View Details
              </NavLink>
            </div>
          ))}

        </div>
      )}
    </div>
  );
}
export default Users;