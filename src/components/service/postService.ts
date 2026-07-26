import axiosInstance from "../api/axios"

export type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export async function getPosts(): Promise<Post[]> {
  const response = await axiosInstance.get<Post[]>("/posts")

  return response.data
}


