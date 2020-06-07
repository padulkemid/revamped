import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}>
          + your average pop punker -
        </Link>
      </h1>
    );
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}>
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}>
          {title}
        </Link>
      </h3>
    );
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        <a href="https://github.com/padulkemid">github</a>∙
        <a href="https://twitter.com/padulkemid">twitter</a>∙
        <a href="https://instagram.com/padulkemid">instagram</a>
      </footer>
    </div>
  );
};

export default Layout;
