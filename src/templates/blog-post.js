import React from 'react';
import { Link, graphql } from 'gatsby';
import { DiscussionEmbed } from 'disqus-react';

import Bio from '../components/bio';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import { readingTime } from '../utils/helper';

const styles = {
  title: {
    fontFamily: `Poppins, sans-serif`,
    marginTop: rhythm(1),
    marginBottom: 0,
  },
  readingTime: {
    ...scale(-1 / 5),
    display: `block`,
    marginBottom: rhythm(1),
  },
  divider: {
    marginBottom: rhythm(1),
  },
  navigator: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `space-between`,
    listStyle: `none`,
    padding: 0,
  },
};

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { previous, next } = pageContext;

  const post = data.markdownRemark;
  const { title, ogimage } = post.frontmatter;

  const siteTitle = data.site.siteMetadata.title;
  const ogImagePath = ogimage && ogimage.childImageSharp.fixed.src;

  const disqusConfig = {
    shortname: 'Padulkemid',
    config: {
      identifier: title,
    },
  };

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        image={ogImagePath}
      />
      <article>
        <header>
          <h1 style={styles.title}>{post.frontmatter.title}</h1>
          <p style={styles.readingTime}>
            {post.frontmatter.date} &nbsp;•&nbsp; {readingTime(post.timeToRead)}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr style={styles.divider} />
        <footer>
          <p>Written by :</p>
          <Bio />
        </footer>
      </article>
      <hr style={styles.divider} />

      <DiscussionEmbed {...disqusConfig} />

      <hr style={styles.divider} />
      <nav>
        <ul style={styles.navigator}>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        ogimage {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`;
