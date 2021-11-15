import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm, scale } from '../utils/typography';

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  },
  footer: {
    container: {
      display: 'flex',
    },
    referralLink: {
      marginRight: rhythm(1 / 2),
    },
    date: {
      marginTop: rhythm(1 / 4),
      marginLeft: `auto`,
      textAlign: `right`,
    },
  },
  divider: {
    marginBottom: rhythm(1),
  },
  homepageHeader: {
    h1: {
      ...scale(0.42),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    },
    link: {
      boxShadow: 'none',
      color: 'inherit',
    },
  },
  blogPostHeader: {
    h3: {
      fontFamily: 'Poppins, sans-serif',
      fontWeight: 'normal',
      marginTop: 0,
    },
    link: {
      boxShadow: 'none',
      color: 'inherit',
    },
  },
};

const Layout = ({ location, title, children }) => {
  let header;
  const rootPath = `${__PATH_PREFIX__}/`;

  const socialMedia = useStaticQuery(graphql`
    query socialMediaQuery {
      github: file(absolutePath: { regex: "/git.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagram: file(absolutePath: { regex: "/ig.png/" }) {
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
      linkedin: file(absolutePath: { regex: "/linkin.png/" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const links = [
    {
      link: 'https://github.com/padulkemid',
      alt: 'github',
      img: socialMedia.github.childImageSharp.fixed,
    },
    {
      link: 'https://twitter.com/padulkemid',
      alt: 'twitter',
      img: socialMedia.twitter.childImageSharp.fixed,
    },
    {
      link: 'https://instagram.com/padulkemid',
      alt: 'instagram',
      img: socialMedia.instagram.childImageSharp.fixed,
    },
    {
      link: 'https://linkedin.com/in/padulkemid/',
      alt: 'linkedin',
      img: socialMedia.linkedin.childImageSharp.fixed,
    },
  ];

  if (location.pathname === rootPath) {
    header = (
      <h1 style={styles.homepageHeader.h1}>
        <Link style={styles.homepageHeader.link} to={`/`}>
          + solve et coagula -
        </Link>
      </h1>
    );
  } else {
    header = (
      <>
        <h3 style={styles.blogPostHeader.h3}>
          <Link style={styles.blogPostHeader.link} to={`/`}>
            {title}
          </Link>
        </h3>
        <hr style={styles.divider} />
      </>
    );
  }

  return (
    <div style={styles.container}>
      <header>{header}</header>
      <main>{children}</main>
      <hr style={styles.divider} />
      <footer style={styles.footer.container}>
        {links.map(({ link, img, alt }) => (
          <a href={link} target="_blank" rel="noreferrer">
            <Image fixed={img} alt={alt} style={styles.footer.referralLink} />
          </a>
        ))}
        <p style={styles.footer.date}>
          &copy; {new Date().getFullYear()}, padulkemid
        </p>
      </footer>
    </div>
  );
};

export default Layout;
