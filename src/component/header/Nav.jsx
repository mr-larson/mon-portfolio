import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="###"> <img className="img-fluid" src="./img/gpc-logo.png" alt="green logo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active text-light">   
                                Home
                            </Link> 
                        </li>

                        <li className="nav-item">
                            <Link to="/Section1" className="nav-link text-light">
                                About me
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/Section2" className="nav-link text-light">
                                Lastest projects
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/MainShop" className="nav-link text-light">
                                Shopify
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}
