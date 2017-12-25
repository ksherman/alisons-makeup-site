const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        console.log(node);
        if (node.fields.slug.includes('/posts/')) {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/single-post.jsx'),
            context: {
              slug: node.fields.slug,
            },
          });
        } else {
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/single-page.jsx'),
            context: {
              slug: node.fields.slug,
            },
          });
        }
      });
      resolve();
    });
  });
};
