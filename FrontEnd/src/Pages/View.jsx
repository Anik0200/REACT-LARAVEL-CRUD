import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router'
import Api from '../Api'

const View = () => {

    const param = useParams();
    const { http } = Api();

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();


    useEffect(() => {
        http.get('/view-post/' + param.id).then((r) => {
            if (r.data.status === 200) {
                setTitle(r.data.post.title);
                setDescription(r.data.post.description);
            }
        })
    }, [])

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="mb-3">
                                <label className="form-label">Tille</label>
                                <input type="text" className="form-control" defaultValue={title || ""} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                <textarea className="form-control" rows="3" defaultValue={description || ""} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default View
