---
title: MSC/ASC Chain of Custody
---

This document is **NOT** meant to serve as a complete guide to ensuring MSC / ASC Chain of Custody compliance. For more information please visit [MSC CoC Standard](https://www.msc.org/docs/default-source/default-document-library/for-business/program-documents/chain-of-custody-program-documents/msc-chain-of-custody-standard_default-version-v5-0.pdf?sfvrsn=b832b260_10). More so, this document is meant to serve a general starting place for knowing where in GDST data to find MSC / ASC Chain of Custody certification information and which events need to supply the certificate information.

## How to Specify the Certificate?
The Certificate can be in the Certification List on an EPCIS event either using the `<ilmd>` data of a `TRANSFORMATION` event, or by using the `<cbvmda:certificationList></cbvmda:certificationList>` on the `OBJECT` event. The Certificate Type for the certificate is `urn:gdst:certType:harvestCoC`.

```xml
<certification>
    <gdst:certificationType>urn:gdst:certType:harvestCoC</gdst:certificationType>
    <certificationStandard>MSC Chain of Custodyy</certificationStandard>
    <certificationAgency>MSC</certificationAgency>
    <certificationValue></certificationValue>
    <certificationIdentification>1234567890</certificationIdentification>
</certification>
```

## Which Events?

It is critical that products are identified as MSC / ASC Chain of Custody certified throughout the event history of those products to ensure compliance with the MSC / ASC Chain of Custody standards.

>Certified products shall be identified as certified at all stages of purchasing, receiving, storing, processing, packing, labelling, selling and delivering, except for sales invoices to final consumers. - [MSC CoC Standard](https://www.msc.org/docs/default-source/default-document-library/for-business/program-documents/chain-of-custody-program-documents/msc-chain-of-custody-standard_default-version-v5-0.pdf?sfvrsn=b832b260_10)

The Chain of Custody Certificate should be provided on any event where:

* Any events where the base event type is `TRANSFORMATION` regardless of the business step. This includes On-Vessel Processing, Commingling, Packing, and Processing events.

* Change of Ownership events where a product is being sold from one party to another. This is indicated in the event with the `<sourceList>` and `<destinationList>` having `<source>` and `<destination>` with type `urn:epcglobal:cbv:sdt:owning_party`. The Seller's MSC / ASC Chain of Custody certificate is the certificate that needs to be recorded on the Change of Ownership event, the Buyer's is not recorded.

    - It's possible that in some cases a change of ownership between the Fishery/Farm and the first buyer will not require a MSC / ASC Chain of Custody certificate. This is covered in more detail below.

* Any `OBJECT` events with a business step of `arriving`, `receiving`, or `storing` from the core [CBV 1.2](https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf).

Events where products are being harvested from a farm or from the wild sometimes do not need the MSC / ASC Chain of Custody certificate. However, they will always need a `urn:gdst:certType:harvestCert` (Harvest Certificate) that is used to authenticate the harvest and be MSC / ASC Chain of Custody compliant.

There are some cases where the Farm or Fishery will need a MSC / ASC Chain of Custody certificate:

> Checking the fishery assessment or farm audit report and, if the report specifies that the fishery or farm is required to have CoC certification, verifying that the fishery or farm also has a valid CoC certificate. - [MSC CoC Standard](https://www.msc.org/docs/default-source/default-document-library/for-business/program-documents/chain-of-custody-program-documents/msc-chain-of-custody-standard_default-version-v5-0.pdf?sfvrsn=b832b260_10)

If this is the case and the Farm or Fishing Vessel is required to provide a MSC / ASC Chain of Custody certificate, then that Chain of Custody certificate will need to be supplied in the initial Change of Ownership between the Farm/Fishing Vessel and the first buyer. This would be the event with the disposition `urn:gdst:disposition:entering_commerce`. Even if this is required, the Harvest Certificate specified above is still required on the Fishing / Farm Harvest event.

## Mixed Products
Adding a MSC / ASC Chain of Custody certificate to a `OBJECT` event signifies that all Products listed in the event are MSC / ASC Certified. For `TRANSFORMATION` events, it signifies that all output products are MSC / ASC Chain of Custody certified. If an event occurs to a set of Products containing a mix of certified and uncertified products, then 2 seperate events need to be recorded, one event for the group of certified products and one event for the group of non-certified products.

## Recording Volumes
> Principle 4: Certified products are traceable and **volumes are recorded**.  - [MSC CoC Standard](https://www.msc.org/docs/default-source/default-document-library/for-business/program-documents/chain-of-custody-program-documents/msc-chain-of-custody-standard_default-version-v5-0.pdf?sfvrsn=b832b260_10)

According to the standard, volumes are required to be recorded for certified products. This means that all events containing MSC / ASC Chain of Custody certified products must record weights for the product being recorded. This includes all `TRANSFORMATION`, `OBJECT`, and `AGGREGATION` events.

## Where should the Certificate be defined, in Party Master Data or Event Data?
Because there is a potential for mixed products and because the presence of a MSC / ASC Chain of Custody certificate being specifed indicates that the products are MSC / ASC Chain of Custody certificated, we are recommending that the certificate is recorded at the event level.