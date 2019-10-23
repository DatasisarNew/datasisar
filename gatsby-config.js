module.exports = {
    siteMetadata: {
        title: `Datasisar - Your reliable IT solutions partner`,
        description: `Dedicated teams offering professional services for your software needs.`,
        author: `@sangeet`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-catch-links`, 
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `lrpej7wpo77n`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: `G-4FzawsA2ennDq_gmdNAZhATUZgM0yQjXiT2Q7zhYw`,
            },
        },
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                // printRejected:true,
                // develop:true,
                tailwind: true,
                rejected: true,
                whitelist: ["whitelist"],
                whitelistPatterns: [/^slick-/],
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#204DD4`,
                theme_color: `#204DD4`,
                display: `minimal-ui`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
