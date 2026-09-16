
function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-slate-900 text-white px-8 py-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <h1 className="text-2xl font-bold">
            User Dashboard
          </h1>

          <div className="flex gap-6">
            <a
              href="/"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>

            <a
              href="/users"
              className="hover:text-blue-400 transition"
            >
              Users
            </a>
          </div>

        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-800 text-white rounded-2xl p-8 shadow-lg">

          <h2 className="text-2xl font-bold mb-3">
            React Router & REST API
          </h2>

          <p className="text-slate-300 leading-7">
            This project uses React Router for navigation and REST APIs
            to fetch and display user and post data dynamically. You can
            explore users, view their details, and read their posts through
            different routes.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Home;


