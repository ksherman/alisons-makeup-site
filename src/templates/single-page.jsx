import React from 'react';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="single-post-wrapper">
      <h2>{post.frontmatter.title}</h2>
      <div
        className="single-post-body"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  );
};

export const query = graphql`
  query SinglePageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
