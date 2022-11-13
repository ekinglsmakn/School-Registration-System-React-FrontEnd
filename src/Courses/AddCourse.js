import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function AddCourse() {

    let navigate = useNavigate()
    const [course, setCourse] = useState({
        courseName: "",
    })
    const {courseName} = course
    const onInputChange = (e) => {

        setCourse({...course, [e.target.name]: e.target.value});

    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await  axios.post("http://localhost:8080/api/course/save",course);
        navigate("/viewcourse");
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register Course</h2>
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

