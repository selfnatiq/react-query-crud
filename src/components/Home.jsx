import React from 'react'
import { useQueryClient, useMutation, useQuery } from 'react-query'
import { getPosts, removePost } from '../api'
import Loader from './Loader'

const Home = () => {
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery('posts', getPosts)
    const { mutateAsync } = useMutation(removePost)

    const handleClick = async id => {
        await mutateAsync(id)
        queryClient.invalidateQueries("posts")
    }

    if (isLoading) return <Loader />

    return (
        <div className="py-2">
            <h3 className="py-2">All Post</h3>
            <div className="d-flex flex-wrap">

                {data.map(post =>
                    <div className="card w-25 m-1" key={post.id}>
                        <div className="card-header">{post.author}</div>
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-sm btn-danger ms-1" onClick={() => handleClick(post.id)}>Delete</button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Home
