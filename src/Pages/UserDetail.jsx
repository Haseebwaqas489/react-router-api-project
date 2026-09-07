
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function UserDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("User not found");
        }
        return response.json();
      })
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch(() => {
        setUser(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f7fb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px 60px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f4f7fb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "40px 60px",
            borderRadius: "16px",
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2 style={{ color: "#dc2626", marginBottom: "10px" }}>
            Invalid Details
          </h2>

          <p style={{ color: "#6b7280" }}>
            User with ID {id} does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fb",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "700px",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "35px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          boxSizing: "border-box",
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            paddingBottom: "25px",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              backgroundColor: "#2563eb",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "bold",
            }}
          >
            {user.name.charAt(0)}
          </div>

          <div>
            <h1
              style={{
                margin: 0,
                fontSize: "28px",
                color: "#111827",
              }}
            >
              {user.name}
            </h1>

            <p
              style={{
                margin: "6px 0 0",
                color: "#6b7280",
              }}
            >
              @{user.username}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Email
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.email}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Phone
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.phone}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Website
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.website}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Company
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.company.name}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              City
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.address.city}
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#f8fafc",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "15px",
            }}
          >
            <span style={{ color: "#6b7280", fontSize: "13px" }}>
              Street
            </span>

            <p style={{ color: "#111827", fontWeight: "500" }}>
              {user.address.street}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;

