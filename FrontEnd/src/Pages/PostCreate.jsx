import React, { useState } from 'react'
import Api from '../Api';
import { Link, useNavigate } from 'react-router'


const PostCreate = () => {

    const navigate = useNavigate();

    const { http } = Api();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const [titleError, setTitleError] = useState();
    const [descriptionError, setDescriptionError] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        http.post('/create-post', { title: title, description: description }).then((res) => {
            if (res.data.status === 400) {
                setTitleError(res.data.error.title);
                setDescriptionError(res.data.error.description);
            }

            if (res.data.status === 200) {
                navigate('/');
            }
        })
    }


    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Tille</label>
                                <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
                                <p className="text-danger fw-bold mt-1">{titleError}</p>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" onChange={(e) => setDescription(e.target.value)}></textarea>
                                <p className="text-danger fw-bold mt-1">{descriptionError}</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PostCreate
