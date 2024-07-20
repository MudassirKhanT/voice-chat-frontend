import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// list of all apis
export const sendOtp = (data) => api.post("/api/send-otp", data);
export const verifyOtp = (data) => api.post("/api/verify-otp", data);
export const activate = (data) => api.post("/api/activate", data);
export const logout = () => api.post("/api/logout");
// Intercepters sets in between req and res in frontend
api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const oirginalRequest = error.config;
    if (error.response.status === 401 && oirginalRequest && !oirginalRequest._isRetry) {
      oirginalRequest._isRetry = true;
      try {
        await axios.get(`${process.env.REACT_APP_API_URL}/api/refresh`, {
          withCredentials: true,
        });

        return api.request(oirginalRequest);
      } catch (err) {
        console.log(err.message);
      }
    }
    throw error;
  }
);
export default api;
