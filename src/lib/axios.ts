import axios from 'axios'

export const api = axios.create({
  // baseURL: import.meta.env.VITE_AXIOS_BASE_URL,
  baseURL: `https://rcf-eventos-backend.vercel.app/`,
})
