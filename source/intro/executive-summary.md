---
title: Executive Summary
---

## Overview

The Global Dialogue on Seafood Traceability (also referred to as the
Dialogue) is an international, business-to-business platform established
to advance a unified framework for interoperable seafood traceability
practices. The Dialogue brings together a broad spectrum of seafood
industry stakeholders from across different parts of the supply chain,
as well as relevant civil society experts from diverse regions.

The Dialogue is catalysing the development of interoperable practices
that will:

-   Improve the reliability of seafood information

-   Reduce the cost of seafood traceability

-   Contribute to supply chain risk reduction

-   Contribute to securing the long-term social and environmental
    sustainability of the sector.

The Dialogue is organized around a structure and an agenda stemming from
a dozen preparatory workshops in Asia, Europe, and North America. With
three technical working groups, the pre-competitive Dialogue aims to
produce an aligned global framework for seafood traceability based on
four pillars:

1.  Internationally agreed key data elements (KDEs) to be routinely
    associated with seafood products;

2.  Technical specifications for interoperable traceability systems,
    along with standard legal and business formats facilitating
    business-to-business information exchange;

3.  Internationally agreed benchmarks for verifying data validity; and

4.  Harmonisation of business-smart national regulations to help reduce
    compliance burdens.

These four pillars are similar to those that have helped create
interoperable business-to-business traceability and information systems
within other globalised industries, including banking,
telecommunications, and pharmaceuticals.

A number of market factors have increased the need for both
standardising business practices and harmonising regulations to promote
interoperable traceability within the seafood sector. These include:

-   Growing consumer and regulatory demands for more information about
    the origins of seafood products;

-   Rising concerns about the marketing of seafood which is sourced from
    illegal, unsustainable, or socially irresponsible practices
    (including slavery at sea); and

-   Increased business interest in improving transparency within seafood
    supply chains.

## Technical Decisions

The Dialogue elected to use GS1 Standards to build this guidance
document. The following are the key documents one should review to
better understand decisions made by the Dialogue.

1.  **GS1 Global Traceability Standard 2.0 (GTS2)**[^1] explains how
    traceability systems are constructed based on the GS1 system of
    standards, specifically EPCIS[^2]. This document provides much of
    the language and fundamental architecture assumed in this guide.

2.  **GS1 Foundation for Fish, Seafood and Aquaculture Traceability
    Guideline**[^3] provides a global view of seafood traceability from
    first sale to retail.

3.  **GS1 US & NFI Seafood Traceability Implementation Guide**[^4]
    provides specific guidance for North American seafood sold at
    retail.

The following extensions or adaptations of the GS1 Standards will be
used to support the Dialogue's approach to creating global seafood
interoperable traceability systems.

1.  **Unique identification using free, non-GS1 keys.** One of the chief
    weaknesses or complaints about GS1-based traceability is the
    perceived requirement to purchase GS1 identifiers for products and
    locations. It is true that for products sold at retail, they must
    carry a GS1 barcode and globally unique identifier (UPC, EAN,
    DataBar or DataMatrix) that is compatible with point of sale
    systems. However, within the supply chain, it is common for
    companies, fishermen and farmers to leverage free, non-GS1
    identifiers such as the UUID/GUID[^5], URL[^6], Geographic
    Coordinates and the QR Code[^7]. This guide will provide
    instructions and examples on how to use these open, free identifiers
    to identify trade items, logistic units, parties and locations in
    lieu of GS1 identifiers. See section 4.1 in GTS2 for more detail on
    identification of objects, parties and locations using GS1 keys. See
    section 4.2 in GTS2 for more detail on barcodes and RFID.

2.  **Open data sharing approach.** Rather than choose a specific
    system, platform or architecture, the Dialogue elected to support an
    open, flexible, technology agnostic method for sharing data with
    trading partners, audit bodies and regulators which simplifies data
    privacy and security. This guide will provide instructions and
    examples on how to create and share traceability data files using
    several file formats and technologies. [Our recommended method for
    sharing is by "bilaterally pushing" whole chain traceability EPCIS
    files]{.underline} including all relevant master and event data from
    one party to another party when product changes hands, as part of an
    audit or to a regulatory body. This assures that the data is
    exchanged knowingly between two parties as part of a legally binding
    agreement. Also, the inclusion of all relevant master data and event
    data representing each required step in the supply chain provides
    the receiver with a complete history of the product or products of
    interest without having to access additional systems or parties.
    However, this does put the responsibility of collecting all prior
    events digitally (CTEs and KDEs) on processors, brokers, importers
    and other links in the supply chain that currently rely heavily on
    paper records. This will require each organization to adopt systems
    that can collect, store and share both their own event information
    and all prior events. For example, a tuna loin processor would be
    required to receive, and store catch details from a vessel operator.
    In turn, the exporter might need to be able to electronically
    receive both the catch information and the processing information
    from the loin processor. See section 4.3 in GTS2 for more detail on
    data sharing.

## How to Use this Document


