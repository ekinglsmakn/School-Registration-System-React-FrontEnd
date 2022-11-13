import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

export default function ViewStudent() {
    const {id} = useParams();
    const [students, setStudents] = useState([])

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {
        const result = await axios.get("http://localhost:8080/api/student/get");
        setStudents(result.data);
    }

    const deleteStudent = async (id) => {
        await axios.delete(`http://localhost:8080/api/student/delete/${id}`)
        loadStudents();
    }

    return (

            <div className='container'>
                <div className='py-4'>
                    <div  id="addStudent">
                        <Link className="btn btn-danger my-2"
                              to={`/addstudent`} >
                            Add Student
                        </Link>

                    </div>

                    <table className="table table-hover shadow border-0">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            <th scope="col">Student Number</th>
                            <th scope="col">Activity</th>
                        </tr>
                        </thead>

                        <tbody>
                        {
                            students.map((student, index) => (
                                <tr>
                                    <th scope="row" key={index}>{index + 1}</th>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.surname}</td>
                                    <td>{student.number}</td>
                                    <td>
                                        <button className="btn btn-primary mx-3">Details</button>
                                        <Link className="btn btn-secondary mx-3"
                                              to={`/editstudent/${student.id}`}>
                                            Edit
                                        </Link>
                                        <button className="btn btn-primary mx-3"
                                                onClick={() => deleteStudent(student.id)}
                                        >Delete
                                        </button>
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

