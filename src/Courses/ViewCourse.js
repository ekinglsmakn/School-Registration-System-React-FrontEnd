import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewCourse() {
    const {id} = useParams();
    const [courses, setCourses] = useState([])
    useEffect(() => {
        loadCourses();
    }, []);

    const loadCourses = async () => {
        const result = await axios.get("http://localhost:8080/api/course/get");
        setCourses(result.data);
    }

    const deletecourse = async (id) => {
        await axios.delete(`http://localhost:8080/api/course/delete/${id}`)
        loadCourses();
    }

    return (
        <div className='container'>
            <div className='py-4'>
               <div id="addCourse">
                   <Link className="btn btn-danger my-2"
                         to={`/addcourse`} >
                       Add Course
                   </Link>
               </div>
                <table className="table table-hover shadow border-0">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">id</th>
                        <th scope="col">Course Name</th>
                        <th scope="col"></th>

                    </tr>
                    </thead>

                    <tbody>
                    {
                        courses.map((course, index) => (
                            <tr>
                                <th scope="row" key={index}>{index+1}</th>
                                <td>{course.id}</td>
                                <td>{course.courseName}</td>
                                <td>
                                    <Link className="btn btn-info mx-3"
                                          to={`/detailscourse/${course.id}`}>
                                        Details
                                    </Link>
                                    <Link className="btn btn-secondary mx-3"
                                          to={`/editcourse/${course.id}`}>
                                        Edit
                                    </Link>
                                    <button className="btn btn-primary mx-3"
                                            onClick={()=>deletecourse(course.id)}
                                    >Delete</button>
                                </td>
                            </tr>

                        ))
                    }

                    </tbody>
                </table>

            </div>
        </div>
    );
}

