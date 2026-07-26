import { Link } from "react-router-dom"
import usePost from "./hooks/usePost"

function Post() {
  const { posts, loading, error } = usePost()

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p>Loading posts...</p>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-red-400">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-12">Posts</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              to={`/posts/${post.id}`}
              key={post.id}
              className="block border border-slate-800 rounded-xl p-6 transition hover:border-blue-500 hover:bg-slate-900"
            >
              <p className="text-blue-400 text-sm mb-3">
                POST #{post.id}
              </p>

              <h2 className="text-xl font-semibold capitalize mb-4">
                {post.title}
              </h2>

              <p className="text-slate-400">
                {post.body}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Post