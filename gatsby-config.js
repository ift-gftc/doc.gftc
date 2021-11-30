const themeOptions = require("./src/theme-options")

module.exports = {
  pathPrefix: "/doc.ift.org",
  siteMetadata: {
    title: 'IFT Docs'
  },
  plugins: [
    `gatsby-plugin-dark-mode`,
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-check-links',
            options: {
              exceptions: [
                '/contributions/',
              ]
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        
        root: __dirname,
        githubRepo: "louisgv/doc.ift.org",
        sidebarCategories: {
          null: ["index", "intro/executive-summary", "intro/feedback"],
          "Pretext": [
            "pretext/why-epcis",
            "pretext/why-extension",
            "pretext/why-iuu",
          ],
          "Certifications": [
            "certification/msc-asc",
            "certification/other-cert"
          ],
          "Regulatory": [
            "regulatory/simp-aquaculture",
            "regulatory/simp-wild-harvest",
            "regulatory/eu-catch-cert",
            "regulatory/non-western-regulations",
          ],
          "Events": [
            "events/at-sea",
            "events/aquaculture",
          ],
          "Resources": [
            "resources/index"
          ],
          "Contributions": [
            "contributions/how-to-work-on-doc",
            "contributions/how-to-request-new-doc",
            "contributions/how-to-submit-work-for-review",
            "contributions/authors"
          ]
        },
      },
    },
  ],
}
