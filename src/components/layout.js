import React from 'react'
import { Link } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
const siteTitle = 'Rose Robertson';
require('../../static/syntax.css');

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    const headerStyle = {
      border: 'none',
      fontSize: '3rem'
    };
    let header;

    if (location.pathname === rootPath) {
      header = (
        <h1 style={headerStyle}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {siteTitle}
            <sup>🌹</sup>
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1 style={headerStyle}>
          <Link
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
            to={'/'}
          >
            {siteTitle}
            <sup>🌹</sup>
          </Link>
        </h1>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
      </div>
    )
  }
}

export default Template
