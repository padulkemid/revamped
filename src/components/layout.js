import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm, scale } from '../utils/typography';

const Layout = ({ location, title, children }) => {
  const socialMedia = useStaticQuery(graphql`
    query socialMediaQuery {
      instagram: file(absolutePath: { regex: "/ig.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(absolutePath: { regex: "/git.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/twt.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(0.42),
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
      <>
        <h3
          style={{
            fontFamily: `Poppins, sans-serif`,
            fontWeight: 'normal',
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
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      </>
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
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      <footer
        style={{
          display: `flex`,
        }}>
        <a href="https://github.com/padulkemid" target="_blank">
          <Image
            fixed={socialMedia.github.childImageSharp.fixed}
            alt="github"
            style={{
              marginRight: rhythm(1 / 2),
            }}
          />
        </a>
        <a href="https://twitter.com/padulkemid" target="_blank">
          <Image
            fixed={socialMedia.twitter.childImageSharp.fixed}
            alt="twitter"
            style={{
              marginRight: rhythm(1 / 2),
            }}
          />
        </a>
        <a href="https://instagram.com/padulkemid" target="_blank">
          <Image
            fixed={socialMedia.instagram.childImageSharp.fixed}
            alt="instagram"
            style={{
              marginRight: rhythm(1 / 2),
            }}
          />
        </a>
        <p
          style={{
            marginTop: rhythm(1 / 4),
            marginLeft: `auto`,
            textAlign: `right`,
          }}>
          &copy; {new Date().getFullYear()}, padulkemid
        </p>
      </footer>
    </div>
  );
};

export default Layout;
