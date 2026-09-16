import { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useParams,
  useMatch
} from "react-router-dom";
import { getUserPosts } from "../api/users";
function UserPosts() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const postDetail = useMatch("/users/:id/posts/:postId");
  useEffect(() => {
    getUserPosts(id)
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setLoading(false);
      });
  }, [id]);
  if (loading) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-gray-800">
          Loading posts...
        </h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center p-8">
        <h2 className="text-2xl font-bold text-red-600">
          {error}
        </h2>
      </div>
    );
  }
  if (postDetail) {
    return <Outlet />;
  }
  return (
    <div className="max-w-2xl mx-auto my-8 p-5">
      
      <h1 className="text-center text-3xl font-bold text-gray-900 mb-6">
        User Posts
      </h1>
      {posts.length === 0 ? (
        <p className="text-center text-gray-600">
          No posts found.
        </p>
      ) : (
        posts.map((post) => (
          <div
            key={post.id}
            className="bg-white p-5 mb-4 rounded-xl shadow-md"
          >
            <h2 className="text-xl font-bold text-gray-900 mt-0 mb-3">
              {post.title}
            </h2>

            <p className="text-gray-600 leading-relaxed mb-5">
              {post.body}
            </p>

            <NavLink
              to={`${post.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white no-underline rounded-lg font-bold hover:bg-blue-700"
            >
              View Post
            </NavLink>
          </div>
        ))
      )}

    </div>
  );
}
export default UserPosts;