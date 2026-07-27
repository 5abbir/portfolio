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

export type CreatePostInput = {
  title: string
  body: string
  userId?: number
}

export type UpdatePostInput = {
  title: string
  body: string
  userId: number
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

export const createPost = async (data: CreatePostInput): Promise<Post> => {
  const response = await axiosInstance.post<Post>("/posts", {
    ...data,
    userId: data.userId ?? 1,
  })
  return response.data
}

export const updatePost = async (
  id: number,
  data: UpdatePostInput
): Promise<Post> => {
  const response = await axiosInstance.put<Post>(`/posts/${id}`, data)
  return response.data
}

export const patchPost = async (
  id: number,
  data: Partial<UpdatePostInput>
): Promise<Post> => {
  const response = await axiosInstance.patch<Post>(`/posts/${id}`, data)
  return response.data
}

export const deletePost = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/posts/${id}`)
}