import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
})

axiosInstance.interceptors.request.use(
  (config) => {

    console.log(
      "Request sent:",
      config.method?.toUpperCase(),
      config.url
    )

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {

    console.log(
      "Response received:",
      response.status
    )

    return response
  },

  (error) => {

    console.error(
      "API Error:",
      error.message
    )

    return Promise.reject(error)
  }
)

export default axiosInstance