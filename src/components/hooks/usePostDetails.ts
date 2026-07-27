import { useEffect, useState } from "react"
import {
  getCommentsByPostId,
  getPostById,
  type Comment,
  type Post,
} from "../service/postService"

export default function usePostDetails(id?: string) {
  const [post, setPost] = useState<Post | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadDetails = async () => {
      if (!id) {
        setError("Post id is missing")
        setLoading(false)
        return
      }

      const postId = Number(id)

      if (Number.isNaN(postId)) {
        setError("Invalid post id")
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        const postData = await getPostById(postId)
        const commentsData = await getCommentsByPostId(postId)
        setPost(postData)
        setComments(commentsData)
      } catch {
        setError("Failed to load post details")
      } finally {
        setLoading(false)
      }
    }

    loadDetails()
  }, [id])

  return { post, comments, loading, error }
}