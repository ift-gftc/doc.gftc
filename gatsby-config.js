const themeOptions = require("./src/theme-options")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: 'GDST Docs'
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
        githubRepo: "ift-gftc/doc.gdst",
        sidebarCategories: {
          null: ["index", "intro/executive-summary", "intro/how-to-use-docs"],
          "Pretext": [
            "pretext/why-epcis",
            "pretext/why-extension",
            "pretext/why-iuu",
          ],
          "Frequently Asked Questions (F.A.Q.)": [
            "faq/epcis-faq",
            "faq/gdst-faq"
          ],
          "Certifications": [
            "certification/msc-asc",
            "certification/other-cert"
          ],
          "Regulatory": [
            "regulatory/gdpr",
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
            "aquaculture-events/commodities",
            "aquaculture-events/xml-mappings",
            "aquaculture-events/advanced01"
          ],
          "Wild Events": [
            "wild-events/master-data",
            "wild-events/fishing-events",
            "wild-events/on-vessel-processing",
            "wild-events/transshipment",
            "wild-events/landing",
            "wild-events/gear-types",
            "wild-events/mari-culture",
            "wild-events/commodities",
            "wild-events/xml-mappings",
            "wild-events/advanced"
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
          "Communication Protocol" : [
            "comms/request-data",
            "comms/tracebacks"
          ],
          "Tools" : [
            "tools/check-tool",
            "tools/firstmile-wild-test",
            "tools/fullchain-test"
          ],
          "Resources": [
            "resources/featured-implementation",
            "resources/index"
          ],
          "Contributions": [
            "contributions/how-to-work-on-doc",
            "contributions/how-to-request-new-doc",
            "contributions/how-to-submit-work-for-review",
            "contributions/running-gatsby",
            "contributions/authors",
            "contributions/contacts"
          ]
        },
      },
    },
  ],
}
