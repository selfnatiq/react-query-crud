import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router'
import { createPost } from '../api'

const Create = () => {
    const histroy = useHistory()
    const [formData, setFromData] = useState({ title: null, body: null, author: null })
    const { mutateAsync, isSuccess } = useMutation(createPost, { mutationKey: "createPost" })



    const hanleOnSubmit = async e => {
        e.preventDefault()
        if (formData.title && formData.body && formData.author) {
            await mutateAsync(formData)
        }

        histroy.push("/")
    }
    return (
        <div className="w-50">
            <form onSubmit={hanleOnSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="Title" className="form-control" onChange={e => setFromData(p => ({ ...p, title: e.target.value }))} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" id="body" cols="30" rows="10" onChange={e => setFromData(p => ({ ...p, body: e.target.value }))} />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" placeholder="Author" className="form-control" onChange={e => setFromData(p => ({ ...p, author: e.target.value }))} />
                </div>
                <input type="submit" className="btn btn-primary" disabled={isSuccess} />
            </form>
        </div>
    )
}

export default Create
