import React, {useEffect, useState} from 'react';
import AdminLayout from "../../../components/layout/admin";
import axiosClient from "../../../api-client/axios-client";
import classroomApi from "../../../api-client/classroom-api";

function ClassRoom(props) {
    const classrooms = props.classrooms

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên lớp</th>
                    <th>Chủ nhiệm</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                </tr>
                </thead>
                <tbody>
                {classrooms && classrooms.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.teacher.name}</td>
                            <td>{item.start_time}</td>
                            <td>{item.end_time}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>


        </div>
    );
}

ClassRoom.getLayout = function getLayout(page) {
    return (
        <AdminLayout>{page}</AdminLayout>
    )
}

export async function getStaticProps() {
    try {
        const response = await classroomApi.getListClassroom();
        const data = await response.data;
        console.log(data.data);
        return {
            props: {
                classrooms: data.data,
            },
        };
    } catch (error) {
        console.log('Error fetching data:', error);
        return {
            props: {
                classrooms: null,
            },
        };
    }
}

export default ClassRoom;