import React, { Component } from 'react'


export default class NavBar extends Component {
  render() {
    return (
      <header className='header'>
        <div className="nav__container">
          <h3 className="nav__title">License Control</h3>
          <div className="nav__links">
            <a href="#">Logs</a>
            <a href="#">Users</a>
            <a href="#">Add</a>
          </div>
        </div>
      </header>
    )
  }
}
