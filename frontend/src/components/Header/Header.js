import React from 'react'
import logo from '../../logo.png'
import './Header.scss'

const Header = () => (
  <div className='header sticky-top'>
    <div className='layout'>
      <header className='navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar'>
        <a className='navbar-brand mr-0 mr-md-2' href='https://en.gamigo.com/' target='_blank' rel='noopener noreferrer'>
          <span className='logo'>
            <img src={logo} height='38px' className='App-logo' alt='logo' />
          </span>
        </a>
        <div className='navbar-nav-scroll d-none d-md-flex'>
          <ul className='navbar-nav bd-navbar-nav flex-row'>
            <li className='nav-item'>
              <a className='nav-link' href='https://en.gamigo.com/'>
                Info
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='https://en.gamigo.com/'>
                Support
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  </div>
)

export default Header
