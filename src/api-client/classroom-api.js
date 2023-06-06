import axiosClient from "./axios-client";

export const classroomApi = {
    getListClassroom() {
        return axiosClient.get('/classes')
    }
}

export default classroomApi