import { Link } from "react-router-dom"
import { useState } from "react"
import usePost from "./hooks/usePost"

function Post() {
  const {
    posts,
    loading,
    error,
    creating,
    deletingId,
    handleCreatePost,
    handleDeletePost,
  } = usePost()

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim() || !body.trim()) return

    const success = await handleCreatePost({
      title,
      body,
      userId: 1,
    })

    if (success) {
      setTitle("")
      setBody("")
    }
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <p>Loading posts...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold mb-6">Posts</h1>
        <p className="text-slate-400 mb-10">
          Create, view, edit, patch, and delete posts from JSONPlaceholder.
        </p>

        {error && (
          <div className="mb-6 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-300">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mb-12 rounded-2xl border border-slate-800 bg-slate-900 p-6"
        >
          <h2 className="text-2xl font-semibold mb-4">Create a new post</h2>

          <div className="grid gap-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Post title"
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />

            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Post body"
              rows={5}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            />

            <button
              type="submit"
              disabled={creating}
              className="w-fit rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700 disabled:opacity-60"
            >
              {creating ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
            >
              <p className="mb-2 text-sm text-blue-400">POST #{post.id}</p>
              <h2 className="mb-3 text-xl font-semibold capitalize">
                {post.title}
              </h2>
              <p className="mb-6 text-slate-400 line-clamp-4">{post.body}</p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/post/${post.id}`}
                  className="rounded-lg bg-slate-800 px-4 py-2 hover:bg-slate-700"
                >
                  View
                </Link>

                <button
                  onClick={() => handleDeletePost(post.id)}
                  disabled={deletingId === post.id}
                  className="rounded-lg bg-red-600 px-4 py-2 hover:bg-red-700 disabled:opacity-60"
                >
                  {deletingId === post.id ? "Deleting..." : "Delete"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Post