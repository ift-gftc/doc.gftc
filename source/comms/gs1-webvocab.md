---
title: GS1 Web Vocab JSON-LD
description: This demonstrates how to encode master data into the GS1 Web Vocab JSON-LD format.
---

# Product Definitions
Below is an example of a product definition with the GDST KDEs represented in the GS1 Web Vocab format.

```
{
    "@context": {
        "gs1": http://gs1.org/voc/,
        "cbv": "urn:epcglobal:cbv:mda",
        "xsd": http://www.w3.org/2001/XMLSchema#,
        "@vocab": http://gs1.org/voc/
    },
    "@type": "gs1:Seafood", 
    "gtin": "urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT",
    "cbv:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbv:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbv:speciesForFisheryStatisticsPurposesCode" : [
            "YFT"
    ],
    "cbv:tradeItemConditionCode" : "WHL",
    "productName": [
        {
            "@value": "Yellowfin Tuna",
            "@language": "en"
        }
    ],
}
```

# Locations
Below is an example of a location with the GDST KDEs represented in the GS1 Web Vocab format.

```
{
    "@context": {
        "gs1": "http://gs1.org/voc/",
        "cbv": "urn:epcglobal:cbv:mda",
        "gdst" : "https://traceability-dialogue.org/vocab"
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "@vocab": "http://gs1.org/voc/"
    },
    "@type": "gs1:Place",
    "globalLocationNumber": "urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684",
    "cbv:vesselName" : "some vessel",
    "cbv:vesselID" : "some_vessel_id",
    "gdst:imoNumber" : "some_imo_number",
    "cbv:vesselFlagState" : "US",
    "cbv:unloadingPort" : "SDPORT",
    "gdst:vesselPublicRegistry" : "https://some.registry.com/some_vessel_id",
    "gdst:satelliteTracking" : "Some Name of a Sattelite tracking authority",
    "address": {
        "organizationName": [
            {
                "@value": "Fishing Vessel #1",
                "@language": "en"
            }
        ],
        "streetAddress": [
            {
                "@value": "15814 Blanco Trails Ln",
                "@language": "en"
            }
        ],
        "addressLocality": [
            {
                "@value": "Cypress",
                "@language": "en"
            }
        ],
        "addressRegion": [
            {
                "@value": "Texas",
                "@language": "en"
            }
        ],
        "countyCode": "840",
        "postalCode": "77429",
        "@type": "gs1:PostalAddress"
    }
}
```

# Trading Parties
Below is an example of a trading party with the GDST KDEs represented in the GS1 Web Vocab format.

- The `PGLN` of the trading party is recorded under the `globalLocationNumber` KDE. 
- The `@type` tells you this is a trading party (`gs1:Organization`).

```
{
    "@context": {
        "gs1": http://gs1.org/voc/,
        "cbv": "urn:epcglobal:cbv:mda",
        "gdst" : "https://traceability-dialogue.org/vocab"
        "xsd": http://www.w3.org/2001/XMLSchema#,
        "@vocab": http://gs1.org/voc/
    },
    "@type": "gs1:Organization", 
    "globalLocationNumber": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbv:informationProvider": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "cbv:owning_party": "urn:gdst:traceability-solution.com:party:0048000.000001",
    "gdst:iftp" : "1234567890",
    "organizationName": [
        {
            "@value": "test",
            "@language": "en"
        }
    ],
    "address": [
        {
            "streetAddress": [
                {
                    "@value": "15814 blanco trails ln",
                    "@language": "en"
                }
            ],
            "addressLocality": [
                {
                    "@value": "Cypress",
                    "@language": "en"
                }
            ],
            "addressRegion": [
                {
                    "@value": "Texas",
                    "@language": "en"
                }
            ],
            "countyCode": "840",
            "postalCode": "77429",
            "@type": "gs1:PostalAddress"
        }
    ]
}
```