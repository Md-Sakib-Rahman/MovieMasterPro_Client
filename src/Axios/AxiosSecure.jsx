import axios from "axios";
import { auth } from "../Firebase/firebase.config";
const axiosSecureInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosSecureInstance.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser; 
    
    if (user) {
      const token = await user.getIdToken();
      
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config; 
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosSecureInstance;
