---
title: 3. Traceability data, traceability systems, and sharing
---

Connecting an internal traceability system to up and downstream
systems is somewhat more complicated. The following are the key tasks:

  - Update interfaces for traceable object capture (typically barcode
    scanning or manual entry via mobile or web) are capable of scanning,
    processing and storing the expected identifiers received from
    immediate trading partners.

  - Update inbound and outbound machine-to-machine interfaces support
    the visibility event format and technologies for seafood
    traceability interoperability.

  - Test with all appropriate entities, including trading partners,
    regulators, certification standard bodies, brokers, importers and
    exporters.

## Managing and sharing traceability data

## Sources and structures within EPCIS

`Traceability Data` is composed of four types, of which EPCIS
structures according to its relative dynamism.

  - **Static Master Data**: infrequently changed data that describes
    locations, products, parties, locations and assets. For example,
    `Address`, `Species Code and Name.` Data is often first captured
    in accounting software applications followed by logistics
    applications. Trading partners typically share their location and
    product information via paper, spreadsheets, centralized web portals
    and the GS1 Global Data Sharing Network. The challenge, often, is
    the lack of a single source of truth, often leading to erroneous
    master data.

  - **Instance or Lot Master Data (ILMD)**: data that varies over
    different instances of production and is associated with either a
    specific serialized item (I) or lot (L). For example, `First Freeze Date`, 
    and `Catch Area.` This information is most frequently
    provided in human readable format on the product case or pallet
    label and must be entered upon receipt by the buyer. The same types
    of systems that capture this data also capture visibility event data
    (below).

  - **Transaction Data**: data related to a business transaction such as
    the completion of a transfer of ownership (Purchase and Sales
    Orders, Invoices) or a transfer of custody (proof of delivery,
    advanced shipment notice). This is commonly accomplished through EDI
    and AIDC.

  - **Visibility Event Data**: visibility events are usually captured by
    existing business systems – warehouse and/or accounting software,
    manufacturing execution software (MES), Enterprise Resource Planning
    (ERP) software and on-vessel systems for e-logbook and vessel
    monitoring systems. Increasingly, organizations are investing in
    fit-for-purpose traceability systems and applications to support
    their consumer visibility efforts or to meet retailer demands.

## Sensitivity and External Visibility

Much of the data required for traceability and the business cases laid
out in section 1 is considered sensitive by entities in the supply
chain. In the piloting activities of WG2 as well as supporting studies
by the GDST secretariat and outside consulting firms, the GDST
framework realizes that point-to-point sharing of traceability
information is preferred and overwhelmingly the most common
choreography of data sharing between supply chain partners.

Therefore, our recommendation is that traceability data sharing
covered in this document is point to point and linked to a contract,
agreement or clear terms of usage. In other words, when data is
shared, both sender and recipient have a clear and full understanding
of the rules and authentication protocols for how data can be used and
shared downstream.

As common protocols and methods of visibility emerge, further
documentation will reside on the GDST GitHub Repo.\[23\] Through
GDST-led hackathons, we have also explored data visibility and
confidentiality. One open source solution in the Cologne event
showcased an algorithm for hashing sensitive EPCIS information and
associated discovery service.\[24\]

## Quality and Verification

> The quality of data is critical for supporting the goals of seafood
> traceability and interoperability. Therefore, group within the Global
> Dialogue is developing specific guidance on how to assure the veracity
> of the data collected and shared.
 
The following are some basic criteria to consider as part of your
systems design:

  - Completeness: are all of the CTEs and KDEs captured?

  - Accuracy: are the recorded data accurately reflecting what happened?

  - Consistency: are the data aligned across systems?

  - Trusted Source: are the shared events identified with source and
    digital signature?

### Sharing of traceability data\[25\]

One of the most interesting discussions in the traceability world are
the growing number of approaches to sharing data. While other
arrangements, such as networked sharing, centralized repositories, and
blockchains, can all be used to share seafood traceability in the GDST
framework, the following is the recommended choreography:

**Cumulative (Push): \[Recommended\]** this approach is a push method
where the traceability data is systematically enhanced and pushed
forward to the next party in the chain in parallel of the product
flow. It enables sharing of upstream data with parties further
downstream, but not the opposite.

This approach results in asymmetric visibility across the supply
chain, in which downstream parties receive a complete copy of all
relevant upstream data, while the upstream parties have no visibility
downstream beyond their immediate 1-down customer. This assures data
security for supply chain owners (retailers, restaurants) and provides
explicit, fine grained control for what is shared at each stage in the
supply chain. For example, a retailer may prefer a summary of the
pedigree while a certification body might prefer a complete, unedited
original event listing. This method would serve both purposes. Below
is an example.

## Seafood Traceability systems

Putting it all together, a seafood traceability system requires the
following components:

  - **Identification**, marking and attribution of traceable objects,
    parties and locations.

  - Automatic **capture** (through a scan or read) of the movements or
    events involving an object

  - **Recording** and **sharing** of the traceability data, either
    internally or with parties in a supply chain, so that visibility to
    what has occurred may be realized.

The scope of the traceability system of a party will depend on the
role of the party and the traceability questions that need to be
addressed. Some elements that define the scope of a traceability
system are:

  - How many tiers up and down your supply chains will you need to share
    data?

  - Will you need to interact with only direct supply chain partners, or
    will your system require a broader scope?

  - Will you track main ingredients only, or also packaging and indirect
    materials?

  - Will your system need to integrate data sharing with final consumers
    / end customers?
