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

const Bio = () => {
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
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-2.jpg/" }) {
        childImageSharp {
          fixed(width: 125, height: 100, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
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
    img: {
      minHeight: atMobileRes ? 125 : 100,
    },
  };

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2),
        ...responsiveStyle.div,
      }}>
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: rhythm(1.5),
          minWidth: 100,
          borderRadius: `100%`,
          ...responsiveStyle.img,
        }}
      />
      <p>
        <b>+ padul -</b>
        <br />
        selalu rebahan tiap hari, kalo mau nulis ya nulis kalo nggak yaudah.
        kadang pengen nulis pake <em>english</em> ( ga jago-jago amat,
        itung-itung latian ) kalo ga ya pake bahasa indonesia dong hehehe.
        <em> By the way,</em> aku baru nyoba nulis nih, kepingin berbagi
        karangan pada kalian yang udah kesini, semoga tertarik yaaa :D
      </p>
    </div>
  );
};

export default Bio;
