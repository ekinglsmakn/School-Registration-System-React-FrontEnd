import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";


export default function EditCourse() {

    const [course, setCourse] = useState({
        courseName:"",
        enable:"",
        studentList:"",
    })

    const {id} = useParams();

    useEffect(() => {
        loadCourse();
    }, []);

    const loadCourse = async () => {
        const result = await axios.get(`http://localhost:8080/api/student/registered${id}`);
        setCourse(result.data);
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Course Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of Course Id: {course.id}
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <b>Course Name:</b>
                                    {course.courseName}

                                </li>
                                <li className="list-group-item">
                                    <b>Status:</b>

                                </li>
                                <li className="list-group-item">
                                    <b>Student name</b>

                                </li>
                            </ul>


                        </div>
                    </div>

                    <Link className="btn btn-primary my-2" to={"/viewcourse"}>Back</Link>
                </div>
            </div>
        </div>
    );
}

