import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from 'react-icons/fa'
import Logo from './Logo'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      { subNav } = this.props,
      NavLink = ({ to, className, children, ...props }) => (
        <Link
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </Link>
      )

    return (
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <Link to="/" onClick={this.handleLinkClick} className="Logo-Link">
            <Logo />
          </Link>
          <div className="Nav--Links">
            <NavLink to="/project/">Project</NavLink>
            <a href="https://nhsfest.co.uk/" target="_blank" className="NavLink">
              NHS Fest
            </a>
            <NavLink to="/donate/">Donate</NavLink>
            {/* <a href="https://merch.helpournhs.co.uk/" target="_blank" className="NavLink">
              Merch
            </a> */}
            <NavLink to="/volunteer/">Volunteer</NavLink>
            <NavLink to="/collaborate/">Collaborate</NavLink>
            <NavLink to="/credits/">Credits</NavLink>
            <NavLink to="/contact/">Contact</NavLink>

            {/* <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
              >
                Blog
                <div className="Nav--GroupLinks">
                  <NavLink to="/blog/" className="Nav--GroupLink">
                    All Posts
                  </NavLink>
                  {subNav.posts.map((link, index) => (
                    <NavLink
                      to={link.slug}
                      key={'posts-subnav-link-' + index}
                      className="Nav--GroupLink"
                    >
                      {link.title}
                    </NavLink>
                  ))}
                </div>
              </span>
            </div> */}
          </div>
          <div className="Nav--Social">
            <a href="https://facebook.com/helpingournhs" target="_blank" >
              <FaFacebookSquare />
            </a>
            <a href="https://twitter.com/helpingournhs" target="_blank" >
              <FaTwitterSquare />
            </a>
            <a href="https://instagram.com/helpingournhs" target="_blank" >
              <FaInstagram />
            </a>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
