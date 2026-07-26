import axiosInstance from "../api/axios"

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export type Comment = {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export const getPosts = async (): Promise<Post[]> => {
  const response = await axiosInstance.get<Post[]>("/posts")
  return response.data
}

export const getPostById = async (id: number): Promise<Post> => {
  const response = await axiosInstance.get<Post>(`/posts/${id}`)
  return response.data
}

export const getCommentsByPostId = async (id: number): Promise<Comment[]> => {
  const response = await axiosInstance.get<Comment[]>(`/posts/${id}/comments`)
  return response.data
}