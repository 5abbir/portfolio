import { Link, useParams } from "react-router-dom"
import usePostDetails from "./hooks/usePostDetails"

function PostDetails() {
  const { id } = useParams()
  const { post, comments, loading, error } = usePostDetails(id)
  console.log("postid", id)

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p>Loading post details...</p>
        </div>
      </section>
    )
  }

//   if (error) {
//     return (
//       <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
//         <div className="max-w-4xl mx-auto">
//           <p className="text-red-400">{error}</p>
//         </div>
//       </section>
//     )
//   }

  if (!post) {
    return (
      <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-400">Post not found</p>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/post" className="text-blue-400 underline">
          ← Back to posts
        </Link>

        <p className="text-blue-400 mt-6 mb-2">POST #{post.id}</p>
        <h1 className="text-4xl font-bold mb-6 capitalize">{post.title}</h1>
        <p className="text-slate-300 leading-8 mb-10">{post.body}</p>

        <h2 className="text-2xl font-semibold mb-5">Comments</h2>

        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-slate-800 rounded-xl p-4 bg-slate-900"
            >
              <p className="text-blue-400 text-sm mb-2">{comment.email}</p>
              <p className="text-slate-300">{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PostDetails