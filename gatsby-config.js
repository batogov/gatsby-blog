module.exports = {
    siteMetadata: {
        title: `Gatsby Blog`,
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/src/content/`,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-responsive-iframe',
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                            showLineNumbers: false,
                            noInlineHighlight: false,
                        },
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 800,
                            linkImagesToOriginal: false,
                            showCaptions: true,
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Jane — designer and developer from Berlin`,
                short_name: `Jane`,
                start_url: `/`,
                background_color: `#6378d7`,
                theme_color: `#6378d7`,
                display: `standalone`,
                icon: `src/images/icon.png`,
                include_favicon: true,
            },
        },
    ],
};
