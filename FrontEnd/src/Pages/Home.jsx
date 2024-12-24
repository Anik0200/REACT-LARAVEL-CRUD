import React, { useEffect, useState } from 'react'
import Api from '../Api';
import { Link } from 'react-router'

const Home = () => {

    const { http } = Api();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        http.get('/all-post').then((res) => {
            if (res.data.status === 200) {
                setPosts(res.data.post);
            }
        })
    }, [])

    const handleDelete = (id) => {
        http.delete('/delete-post/' + id).then((res) => {
            setPosts(posts.filter((post) => post.id !== id));
        })
    }

    return (
        <>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <table className="table">

                                <thead>
                                    <tr>
                                        <th scope="col" width="10%">#</th>
                                        <th scope="col" width="30%">Title</th>
                                        <th scope="col" width="50%">Description</th>
                                        <th scope="col" width="20%">Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        posts.map((post, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{post.title}</td>
                                                    <td>{post.description}</td>
                                                    <td className="d-flex gap-2">
                                                        <Link className="btn btn-sm btn-success" to={`/view/${post.id}`}>
                                                            View
                                                        </Link>

                                                        <Link className="btn btn-sm btn-primary" to={`/edit/${post.id}`}>
                                                            Edit
                                                        </Link>

                                                        <Link className="btn btn-sm btn-danger" onClick={() => handleDelete(post.id)}>
                                                            Delete
                                                        </Link>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
