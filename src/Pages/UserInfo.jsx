import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getUserById } from "../api/users";

function UserInfo() {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUserById(id)
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
      <div className="min-h-screen bg-gray-100 flex justify-center items-center">
        <div className="bg-white p-5 rounded-2xl text-center shadow-lg">
          <h2 className="text-gray-900 text-xl font-semibold">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="bg-white p-5 rounded-2xl text-center shadow-lg">
          <h2 className="text-red-600 mb-2">
            Invalid Details
          </h2>

          <p className="text-gray-600">
            User with ID {id} does not exist.
          </p>

          <NavLink
            to="/users"
            className="inline-block mt-5 px-[18px] py-[10px] bg-blue-600 text-white no-underline rounded-[7px] font-bold"
          >
            Back to Users
          </NavLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f7fb] px-5 py-10 box-border">

      <div className="w-full max-w-[700px] mx-auto bg-white rounded-2xl p-[35px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] box-border">
        <div className="flex items-center gap-5 pb-[25px] border-b border-[#e5e7eb]">

          <div className="w-[70px] h-[70px] rounded-full bg-blue-600 text-white flex items-center justify-center text-[28px] font-bold shrink-0">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1 className="m-0 text-[28px] text-gray-900 font-bold">
              {user.name}
            </h1>

            <p className="mt-[6px] mb-0 text-gray-600 text-[15px]">
              @{user.username}
            </p>
          </div>

        </div>
        <div className="grid grid-cols-1 gap-[15px] mt-[25px]">
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              Email
            </span>

            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.email}
            </p>
          </div>
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              Phone
            </span>

            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.phone}
            </p>
          </div>
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              Website
            </span>
            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.website}
            </p>
          </div>
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              Company
            </span>

            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.company.name}
            </p>
          </div>
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              City
            </span>

            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.address.city}
            </p>
          </div>
          <div className="bg-slate-50 border border-[#e5e7eb] rounded-[10px] p-[15px]">
            <span className="text-gray-500 text-[13px]">
              Street
            </span>

            <p className="text-gray-900 font-semibold mt-[6px] mb-0">
              {user.address.street}
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-[30px] flex-wrap">
          <NavLink
            to={`/users/${id}/posts`}
            className="px-5 py-3 bg-blue-600 text-white no-underline rounded-lg font-bold"
          >
            View Posts
          </NavLink>
          <NavLink
            to="/users"
            className="px-5 py-3 bg-gray-200 text-gray-700 no-underline rounded-lg font-bold"
          >
            Back to Users
          </NavLink>
        </div>
      </div>
    </div>
  );
}
export default UserInfo;