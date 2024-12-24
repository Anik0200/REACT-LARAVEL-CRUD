import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import Api from '../Api'

const Edit = () => {

    const navigate = useNavigate();
    const param = useParams();
    const { http } = Api();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        http.get('/edit-post/' + param.id).then((r) => {
            if (r.data.status === 200) {
                setTitle(r.data.post.title);
                setDescription(r.data.post.description);
            }
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        http.put('/update-post/' + param.id, { title: title, description: description }).then((res) => {
            if (res.data.status === 200) {
                navigate('/');
            }
        })
    }


    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="mb-3">
                            <label className="form-label">Tille</label>
                            <input type="text" className="form-control" defaultValue={title || ""} onChange={(e) => setTitle(e.target.value)} />
                            <p className="text-danger fw-bold mt-1"></p>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea className="form-control" rows="3" defaultValue={description || ""} onChange={(e) => setDescription(e.target.value)} />
                            <p className="text-danger fw-bold mt-1"></p>
                        </div>
                    </div>

                    <div className="col-4">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Edit
