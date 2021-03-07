import React from 'react'

const Loader = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow text-secondary" style={{ width: "5rem", height: "5rem" }}>
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader
