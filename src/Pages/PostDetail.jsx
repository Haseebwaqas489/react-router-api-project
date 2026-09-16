
// import { useEffect, useState } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { getPostById } from "../api/users";
// function PostDetail() {
//   const { id, postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     setLoading(true);
//     setError("");
//     setPost(null);

//     getPostById(postId)
//       .then((data) => {
       
//         if (!data || !data.id) {
//           setError("This post does not exist.");
//           setLoading(false);
//           return;
//         }

//         if (data.userId !== Number(id)) {
//           setError("This post does not belong to this user.");
//           setLoading(false);
//           return;
//         }

//         setPost(data);
//         setLoading(false);
//       })
//       .catch(() => {
//         setError("This post does not exist.");
//         setLoading(false);
//       });
//   }, [postId, id]);

//   if (loading) {
//     return (
//       <h2
//         style={{
//           textAlign: "center",
//           marginTop: "40px",
//           color: "#ffffff",
//         }}
//       >
//         Loading post...
//       </h2>
//     );
//   }

//   if (error) {
//     return (
//       <div
//         style={{
//           textAlign: "center",
//           marginTop: "60px",
//         }}
//       >
//         <h2
//           style={{
//             color: "#ef4444",
//             marginBottom: "20px",
//           }}
//         >
//           {error}
//         </h2>

//         <NavLink
//           to={`/users/${id}/posts`}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#2563eb",
//             color: "white",
//             textDecoration: "none",
//             borderRadius: "8px",
//             fontWeight: "bold",
//           }}
//         >
//           Back to Posts
//         </NavLink>
//       </div>
//     );
//   }


//   return (
//     <div
//       style={{
//         maxWidth: "650px",
//         margin: "20px auto 40px",
//         padding: "35px 25px",
//         backgroundColor: "#f8fafc",
//         border: "2px solid #2563eb",
//         borderRadius: "16px",
//         boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//     >
//       <h1
//         style={{
//           color: "#0f172a",
//           textTransform: "capitalize",
//           fontSize: "26px",
//           lineHeight: "1.4",
//           margin: "0 0 15px 0",
//         }}
//       >
//         {post.title}
//       </h1>

//       <p
//         style={{
//           color: "#475569",
//           lineHeight: "1.6",
//           fontSize: "16px",
//           margin: "0 0 25px 0",
//         }}
//       >
//         {post.body}
//       </p>

//       <NavLink
//         to=".."
//         relative="path"
//         style={{
//           padding: "10px 20px",
//           backgroundColor: "#2563eb",
//           color: "white",
//           textDecoration: "none",
//           borderRadius: "8px",
//           fontWeight: "bold",
//           fontSize: "15px",
//         }}
//       >
//         Back to Posts
//       </NavLink>
//     </div>
//   );
// }
// export default PostDetail;





import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getPostById } from "../api/users";

function PostDetail() {
  const { id, postId } = useParams();

  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    setError("");
    setPost(null);

    getPostById(postId)
      .then((data) => {
        if (!data || !data.id) {
          setError("This post does not exist.");
          setLoading(false);
          return;
        }

        if (data.userId !== Number(id)) {
          setError("This post does not belong to this user.");
          setLoading(false);
          return;
        }

        setPost(data);
        setLoading(false);
      })
      .catch(() => {
        setError("This post does not exist.");
        setLoading(false);
      });
  }, [postId, id]);

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full  mx-auto"></div>

          <h2 className="text-white text-xl font-semibold">
            Loading post...
          </h2>
        </div>
      </div>
    );
  }

  // Error
  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
        <div className="w-full max-w-lg bg-slate-800 border border-red-500/30 rounded-2xl p-8 text-center shadow-2xl">

          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-red-500/10 flex items-center justify-center">
            <span className="text-3xl">⚠️</span>
          </div>

          <h2 className="text-2xl font-bold text-red-400 mb-3">
            {error}
          </h2>

          <p className="text-slate-400 mb-6">
            Please check the post ID or go back to the user's posts.
          </p>

          <NavLink
            to={`/users/${id}/posts`}
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition duration-200"
          >
            ← Back to Posts
          </NavLink>

        </div>
      </div>
    );
  }

  // Post Details
  return (
    <div className="min-h-screen bg-slate-900 px-4 py-10">

      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
            Post Details
          </p>

          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Read the complete post
          </h1>
        </div>

        {/* Post Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          {/* Top Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
            <div className="flex flex-wrap gap-3 text-sm">

              <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                User ID: {post.userId}
              </span>

              <span className="bg-white/20 text-white px-3 py-1 rounded-full">
                Post ID: {post.id}
              </span>

            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-10">

            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 capitalize leading-relaxed mb-6">
              {post.title}
            </h2>

            <div className="w-16 h-1 bg-blue-600 rounded-full mb-6"></div>

            <p className="text-slate-600 text-base md:text-lg leading-8">
              {post.body}
            </p>

          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 px-6 md:px-10 py-5 flex justify-between items-center">

            <span className="text-sm text-slate-400">
              Post #{post.id}
            </span>

            <NavLink
              to=".."
              relative="path"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold transition duration-200 shadow-md hover:shadow-lg"
            >
              ← Back to Posts
            </NavLink>

          </div>

        </div>

      </div>

    </div>
  );
}

export default PostDetail;

