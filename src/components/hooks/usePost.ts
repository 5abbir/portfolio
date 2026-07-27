import { useEffect, useState } from "react"
import {
  createPost,
  deletePost,
  getPosts,
  type CreatePostInput,
  type Post,
} from "../service/postService"

function usePost() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [creating, setCreating] = useState(false)
  const [deletingId, setDeletingId] = useState<number | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const data = await getPosts()
        setPosts(data)
      } catch {
        setError("Failed to load posts")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const handleCreatePost = async (data: CreatePostInput) => {
    try {
      setCreating(true)
      const newPost = await createPost(data)
      setPosts((prev) => [newPost, ...prev])
      return true
    } catch {
      setError("Failed to create post")
      return false
    } finally {
      setCreating(false)
    }
  }

  const handleDeletePost = async (id: number) => {
    try {
      setDeletingId(id)
      await deletePost(id)
      setPosts((prev) => prev.filter((post) => post.id !== id))
    } catch {
      setError("Failed to delete post")
    } finally {
      setDeletingId(null)
    }
  }

  return {
    posts,
    loading,
    error,
    creating,
    deletingId,
    handleCreatePost,
    handleDeletePost,
  }
}

export default usePost