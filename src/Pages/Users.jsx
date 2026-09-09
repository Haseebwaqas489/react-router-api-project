
import { useEffect, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { getUsers } from "../api/users";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
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

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h2 className="loading">Loading users...</h2>;
  }

  return (
    <>
      <style>{`
        .users-container {
          max-width: 1100px;
          margin: 40px auto;
          padding: 20px;
        }

        .users-container h1 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 10px;
        }

        .search-result {
          text-align: center;
          color: #555;
          font-size: 18px;
          margin-bottom: 30px;
        }

        .users-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 25px;
        }

        .user-card {
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.user-card h2 {
  margin-bottom: 10px;
  font-size: 22px;
  color: #111827;
  font-weight: 700;
}
  .user-card:hover {
 transform: translateY(-5px);
 box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
 }

.user-card p {
  color: #666;
  margin-bottom: 20px;
}

        .details-btn {
          display: inline-block;
          padding: 10px 16px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          transition: 0.3s;
        }

        .details-btn:hover {
          background: #1d4ed8;
        }

        .loading {
          text-align: center;
          margin-top: 50px;
        }

        .no-users {
          text-align: center;
          color: #555;
        }

        @media (max-width: 900px) {
          .users-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .users-list {
            grid-template-columns: 1fr;
          }

          .users-container h1 {
            font-size: 28px;
          }
        }
      `}</style>

      <div className="users-container">
        <h1>Users</h1>

        {search && (
          <p className="search-result">
            Search results for: <strong>{search}</strong>
          </p>
        )}

        {filteredUsers.length === 0 ? (
          <h2 className="no-users">No users found</h2>
        ) : (
          <div className="users-list">
            {filteredUsers.map((user) => (
              <div className="user-card" key={user.id}>
                <h2>{user.name}</h2>

                <p>{user.email}</p>

                <NavLink
                  to={`/users/${user.id}`}
                  className="details-btn"
                >
                  View Details
                </NavLink>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Users;

