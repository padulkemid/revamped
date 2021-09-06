/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const HomeBio = () => {
  const data = useStaticQuery(graphql`
    query HomeBioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Hi my name is <b>Fadhil Muhammad</b>!
        <br />
        I'm currently working as a Software Engineer at{' '}
        <a href="https://dkatalis.co/" target="_blank" rel="noreferrer">
          DKatalis
        </a>
        .
        <br />
        If you have no idea, we're the guys behind{' '}
        <a href="https://www.jago.com/" target="_blank" rel="noreferrer">
          Jago
        </a>
        .
      </p>
    </div>
  );
};

export default HomeBio;
