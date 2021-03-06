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

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic-2.jpg/" }) {
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
            summary
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
        marginBottom: rhythm(2.5),
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
