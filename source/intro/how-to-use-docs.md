---
title: How to Use this Documentation
description: This is a quick guide on how we hope people to use this documentation.
---

## Introduction
The GDST standards, as promulgated by the GSDT secretariat and member companies, is a normative set of practices for data collection, syntax, and conveyance. Because the GDST is a unique business-to-business framework with input from multiple types of expertise, these documents detail the background, rationale, and philosophy behind strategic decisions in designing the framework. These documents are meant for a variety of audiences, but chiefly are intended to instruct IT and supply chain management professionals how to implement their traceability systems to be interoperable across their supply chain partners. The GDST packet includes explanatory materials, normative standards, Key Data Elements Basic Universal List, and technical implementation guidance which are designed to be a flexible extension of EPCIS standards to address use cases in IUU fishing. The explanatory materials explain the background behind seafood traceability system design, the normative standards specify the data and identifer requirements to be GDST compliant, and the technical implementation guidance gives recommended instructions leveraging GS1 standards to ensure interoperability across a variety of data sharing arrangements and data collection technologies.

In addition to the GDST 1.0 packet materials, the GDST has created this GitHub repository to house additional enhanced documentation. This repo is intended for both technical and non-technical seafood industry leaders and staff, for organizations of any size and for all supply chain parties and stakeholders. If you or your organization need access to or share traceability data, this will be relevant for you. For more detailed technical guidance, links are provided to more detailed documents and a repository of example files and sample code that may be used at no cost under an open source license. 

## Generating GDST Data
We have 2 sections that specifically address how GDST event data should be created. We group this into 2 categories, `Aquaculture Events` and `Wild Events`. A section can be found for each category on the left-hand menu. Our primary focus in this documentation are covering the events up until the processor, because after that point the events are essentially the same as any other food traceability done with EPCIS. Each section contains a `Master Data` page that gives an example on what master data might look like for the events covered in that section. This is also the master data used for the event examples in that section. 

Next there is a page for each unique event type for the category. For `Wild Events` we have [Fishing Event](../wild-events/fishing-events), [On Vessel Processing](../wild-events/on-vessel-processing), [TransShipment](../wild-events/transshipment), and [Landing](../wild-events/landing). There are also pages that cover other situations such as [Gear Types](../wild-events/gear-types) and [Commodities](../wild-events/commodities). For `Farm Events` we have [Broodstock / Hatching](../aquaculture-events/brood-stock), [Feeding](../aquaculture-events/feeding), [Farm Harvest](../aquaculture-events/farm-harvest) event pages. There are also pages that cover other situations such as [Wild-to-Farmed](../aquaculture-events/wild-to-farmed) and [Commodities](../aquaculture-events/commodities). 

## Understanding and Reviewing EPCIS Extensions
We have a section titled `EPCIS Extensions` so that technical users can have a clear picture how the EPCIS base standard was extended to meet GDST requirements. We hope this will give developers a go-to area when it comes to knowing what extra data points will they need to be able to handle outside the EPCIS base standard.

## Meeting Regulation Requirements
We have a section titled `Regulatory` in the left-hand menu that covers [EU Catch Certificate](../regulatory/eu-catch-cert), [SIMP for Wild Scenarios](../regulatory/simp-wild-harvest), and [SIMP for Aquaculture Scenarios](../regulatory/simp-aquaculture) requirements so that users can understand how to take GDST data and meet regulatory requirements.

## Meeting Certification Requirements
We have a section titled `Certificates` in the left-hand menu that covers [MSC Chain of Custody](../certification/msc-asc) certification.

## Please Contribute
We intend that the Community, including Businesses, Traceability experts, and Solution Providers, will help the GDST grow this documentation by contributing their knowledge and experience as the core normative standards are implemented. If you are interested in contributing, please see the `Contributions` section in the left-hand menu. A good place to start is either with [Requesting Documentation](../contributions/how-to-request-new-doc) or [Editing Documentation](../contributions/how-to-work-on-doc).