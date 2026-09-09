import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Pages/Home";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetail";
import UserPosts from "./Pages/UserPosts";
import PostDetail from "./Pages/PostDetail";
import NotFound from "./Pages/NotFound";

import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<Users />} />

        <Route path="/users/:id" element={<UserDetails />}>
          
          <Route path="posts" element={<UserPosts />}>
            
            <Route
              path=":postId"
              element={<PostDetail />}
            />
            
          </Route>

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;