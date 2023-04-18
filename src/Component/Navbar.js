import React from 'react'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/">About</a>
                            <a className="nav-link" href="/">Business</a>
                            <a className="nav-link" href="/">Entertainment</a>
                            <a className="nav-link" href="/">General</a>
                            <a className="nav-link" href="/">Health</a>
                            <a className="nav-link" href="/">Science</a>
                            <a className="nav-link" href="/">Sports</a>
                            <a className="nav-link" href="/">Technology</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
