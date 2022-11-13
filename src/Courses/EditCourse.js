import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function EditCourse() {

    let navigate = useNavigate();
    const {id} = useParams();
    const [course, setCourse] = useState({
        courseName: "",
    })
    const {courseName} = course

    const onInputChange = (e) => {

        setCourse({...course, [e.target.name]: e.target.value});

    }
    const loadCourse = async () => {
        const result = await axios.get(`http://localhost:8080/api/course/update/${id}`);
        setCourse(result.data);
    };
    useEffect(() => {
        loadCourse();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await  axios.put(`http://localhost:8080/api/course/update/${id}`,course);
        navigate("/viewcourse");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Course</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="courseName" className="form-label">
                                Course name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter a name"
                                name="courseName"
                                defaultValue={courseName}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type={"submit"} className={"btn btn-secondary"}>Submit</button>
                        <Link type={"submit"} className={"btn btn-danger mx-2"} to="/viewcourse">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

