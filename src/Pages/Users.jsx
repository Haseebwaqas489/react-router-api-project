import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  const styles = {
    container: {
      padding: "40px",
      minHeight: "100vh",
      backgroundColor: "#f4f6f8",
    },

    heading: {
      textAlign: "center",
      marginBottom: "30px",
      color: "#222",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "25px",
      maxWidth: "1100px",
      margin: "0 auto",
    },

    card: {
      backgroundColor: "white",
      padding: "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },

    name: {
      marginBottom: "15px",
      color: "#2563eb",
    },

    paragraph: {
      color: "#555",
      margin: "10px 0",
      lineHeight: "1.5",
    },

    button: {
      display: "inline-block",
      marginTop: "15px",
      padding: "10px 18px",
      backgroundColor: "#2563eb",
      color: "white",
      textDecoration: "none",
      borderRadius: "6px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Users</h1>

      <div style={styles.grid}>
        {users.map((user) => (
          <div style={styles.card} key={user.id}>
            <h2 style={styles.name}>{user.name}</h2>

            <p style={styles.paragraph}>
              <strong>Username:</strong> {user.username}
            </p>

            <p style={styles.paragraph}>
              <strong>Email:</strong> {user.email}
            </p>

            <p style={styles.paragraph}>
              <strong>Phone:</strong> {user.phone}
            </p>

            <NavLink style={styles.button} to={`/users/${user.id}`}>
              View Details
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;