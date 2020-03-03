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
        githubRepo: "ift-gftc/doc.ift.org",
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
          "Aquaculture Events": [
            "aquaculture-events/master-data",
            "aquaculture-events/brood-stock",
            "aquaculture-events/feeding",
            "aquaculture-events/farm-harvest",
            "aquaculture-events/wild-to-farmed",
            "aquaculture-events/commodities"
          ],
          "Wild Events": [
            "wild-events/fishing-events",
            "wild-events/on-vessel-processing",
            "wild-events/transshipment",
            "wild-events/landing",
            "wild-events/gear-types",
            "wild-events/mari-culture",
            "wild-events/commodities"
          ],
          "EPCIS Extensions": [
            "extensions/business-steps",
            "extensions/dispositions",
            "extensions/certificates",
            "extensions/catch-area",
            "extensions/master-data",
            "extensions/ilmd",
            "extensions/object-event"
          ],
          "EPCIS Extensions": [
            "extensions/business-steps",
            "extensions/dispositions",
            "extensions/certificates",
            "extensions/catch-area",
            "extensions/ilmd",
            "extensions/object-event"
          ],
          "Open API": [
            "open-api/examples",
            "open-api/swagger-api"

          ],
          "Resources": [
            "resources/featured-implementation",
            "resources/index"
          ],
          "Contributions": [
            "contributions/how-to-work-on-doc",
            "contributions/how-to-request-new-doc",
            "contributions/how-to-submit-work-for-review",
            "contributions/authors",
            "contributions/contacts"
          ]
        },
      },
    },
  ],
}
