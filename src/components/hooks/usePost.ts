import { useEffect, useState } from "react"

import {
  getPosts,
  type Post,
} from "../service/postService"

function usePost() {

  const [posts, setPosts] = useState<Post[]>([])

  const [loading, setLoading] =
    useState<boolean>(true)

  const [error, setError] =
    useState<string | null>(null)

  useEffect(() => {

    const fetchPosts = async () => {

      try {

        setLoading(true)

        const data = await getPosts()

        setPosts(data)
        console.log( "data",data)

      } catch (error) {

        setError(
          "Failed to load posts"
        )

      } finally {

        setLoading(false)

      }

    }

    fetchPosts()

  }, [])

  return {
    posts,
    loading,
    error,
  }
}

export default usePost