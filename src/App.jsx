import { Routes, Route, NavLink } from "react-router-dom";

import Home from "./Pages/Home";
import Users from "./Pages/Users";
import UserDetails from "./Pages/UserDetail";
import UserPosts from "./Pages/UserPosts";
import PostDetail from "./Pages/PostDetail";
import NotFound from "./Pages/NotFound";
import UserInfo from "./Pages/UserInfo";

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

          <Route index element={<UserInfo />} />

          {/* All posts */}
          <Route path="posts" element={<UserPosts />} />

          {/* Single post */}
          <Route path="posts/:postId" element={<PostDetail />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;