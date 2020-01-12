const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `content` });

        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    const query = graphql(`
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
    `);

    return query.then(result => {
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: `/blog${node.fields.slug}`,
                component: path.resolve(`src/templates/article-page.js`),
                context: {
                    // Data passed to context is available
                    // in page queries as GraphQL variables.
                    slug: node.fields.slug,
                },
            });
        });
    });
};
