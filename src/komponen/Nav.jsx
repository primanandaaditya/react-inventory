import React from "react";
import {Link} from "react-router-dom";

class Nav extends React.Component{
    render() {

        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Inventory</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button"
                                       data-bs-toggle="dropdown" aria-expanded="false">
                                        File
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link className="dropdown-item" to="/jenis_produk">Jenis produk</Link></li>
                                        <li><Link className="dropdown-item" to="/produk">Produk</Link></li>
                                        <li>
                                            <hr className="dropdown-divider"/>
                                        </li>
                                        <li><a className="dropdown-item">Something else here</a></li>
                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
                <br/>
            </div>
        )
    }
}
export default Nav;