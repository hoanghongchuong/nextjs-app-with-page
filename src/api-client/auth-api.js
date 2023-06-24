import axiosClient from "./axios-client";

export const authApi = {
    login(payload) {
        return axiosClient.post('/admin/login', payload)
    },
    logout() {
        return axiosClient.post('/admin/logout');
    },
    getProfile() {
        return axiosClient.get('/profile')
    }
}

export default authApi