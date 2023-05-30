import axios from 'axios';

export const API_URL = 'https://localhost:7041/api' // set on valid url

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
});

// $api.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//     return config;
// })

// $api.interceptors.response.use((config) => {
//     return config;
// }, async (error) => {
//     const originalRequest = error.config
//     if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
//         originalRequest._isRetry = true;
//         try {
//             const response = await axios.get(`${API_URL}/refresh`, {withCredentials: true})
//             localStorage.setItem('token', response.data.accessToken);
//             return $api.get(originalRequest);
//         } catch (e) {
//             console.log('Don`t auth')
//         }
//     }
//     throw error;
// })

export default $api;