import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import usePostDetails from "./hooks/usePostDetails"
import { patchPost, updatePost, type Post } from "./service/postService"

function PostDetails() {
  const { id } = useParams()
  const { post, comments, loading, error } = usePostDetails(id)

  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [saving, setSaving] = useState(false)
  const [patching, setPatching] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  const postId = Number(id)

  const handlePutUpdate = async () => {
    if (!post) return

    try {
      setSaving(true)
      setMessage("")

      const updated = await updatePost(postId, {
        title,
        body,
        userId: post.userId,
      })

      setTitle(updated.title)
      setBody(updated.body)
      setMessage("Post updated with PUT")
    } catch {
      setMessage("Failed to update post")
    } finally {
      setSaving(false)
    }
  }

  const handlePatchTitle = async () => {
    if (!post) return

    try {
      setPatching(true)
      setMessage("")

      const patched = await patchPost(postId, {
        title,
      })

      setTitle(patched.title)
      setMessage("Post patched with PATCH")
    } catch {
      setMessage("Failed to patch post")
    } finally {
      setPatching(false)
    }
  }

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="mx-auto max-w-4xl">Loading post details...</div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-red-400">{error}</div>
      </section>
    )
  }

  if (!post) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="mx-auto max-w-4xl text-red-400">Post not found</div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <Link to="/post" className="text-blue-400 underline">
          ← Back to posts
        </Link>

        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <p className="text-blue-400 text-sm mb-2">POST #{post.id}</p>

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-2xl font-bold outline-none focus:border-blue-500"
          />

          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            className="mt-4 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-slate-200 outline-none focus:border-blue-500"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={handlePutUpdate}
              disabled={saving}
              className="rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save with PUT"}
            </button>

            <button
              onClick={handlePatchTitle}
              disabled={patching}
              className="rounded-lg bg-emerald-600 px-4 py-2 hover:bg-emerald-700 disabled:opacity-60"
            >
              {patching ? "Patching..." : "Patch title only"}
            </button>
          </div>

          {message && <p className="mt-4 text-slate-300">{message}</p>}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-5">Comments</h2>

          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="rounded-xl border border-slate-800 bg-slate-900 p-4"
              >
                <p className="text-blue-400 text-sm mb-2">{comment.email}</p>
                <p className="text-slate-300">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PostDetails