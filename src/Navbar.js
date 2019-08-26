import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Todos
              </Link>
            </li>
 
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add todo
              </Link>
            </li>
            </ul>
          </div>
      </nav>
    )
  }
}
 
export default Navbar;