import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';

export default class HeaderRouter extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/movie-detail">Movie Detail</NavLink>
            </li>
            </ul>
        </div>
        </nav>

    )
  }
}
