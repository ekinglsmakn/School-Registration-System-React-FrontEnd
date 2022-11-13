import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export default function EditStudent() {

    let navigate = useNavigate();
    const {id} = useParams();
    const [student, setStudent] = useState({
        name: "",
        surname: "",
        number: "",
    })
    const {name, surname, number} = student

    const onInputChange = (e) => {

        setStudent({...student, [e.target.name]: e.target.value});

    }
    const loadStudent = async () => {
        const result = await axios.get(`http://localhost:8080/api/student/update/${id}`);
        setStudent(result.data);
    };

    useEffect(() => {
        loadStudent();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/api/student/update/${id}`, student);
        navigate("/viewstudent");

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Edit Student</h2>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Name
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter a new name"
                                name="name"
                                defaultValue={name}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Surname" className="form-label">
                                Surname
                            </label>
                            <input
                                type={"text"}
                                className="form-control"
                                placeholder="Enter a  new surname"
                                name="surname"
                                defaultValue={surname}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className="form-label">
                                Student Number
                            </label>
                            <input
                                type={"number"}
                                className="form-control"
                                placeholder="Enter a new student number"
                                name="number"
                                defaultValue={number}
                                onChange={(e) => onInputChange(e)}/>
                        </div>
                        <button type={"submit"} className={"btn btn-secondary"}>Submit</button>
                        <Link type={"submit"} className={"btn btn-danger mx-2"} to="/viewstudent">Cancel</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

