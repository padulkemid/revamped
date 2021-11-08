/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

const HomeBio = () => {
  const [width, setWindowWidth] = useState(0);
  const atMobileRes = width <= 425;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener(`resize`, updateDimensions);

    return () => window.removeEventListener(`resize`, updateDimensions);
  }, []);

  const data = useStaticQuery(graphql`
    query HomeBioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 100, height: 100, quality: 100) {
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
  const responsiveStyle = {
    div: {
      flexDirection: atMobileRes ? `column` : `row`,
      alignItems: atMobileRes ? `center` : `stretch`,
    },
  };

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
        ...responsiveStyle.div,
      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: rhythm(1),
          minWidth: 100,
          minHeight: 100,
          borderRadius: `100%`,
          ...responsiveStyle.img,
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
