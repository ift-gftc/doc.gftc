---
title: Master Data
description: These are additional attributes required by the Basic Universal List which are encoded in EPCIS Master Data. 
---

## Master Data Elements in the Basic Universal List of Key Data Elements
As these attributes are static among event level data, they are intended to be represented in the master data header. These attributes are included in [GS1's Addition of Attributes for Fish Traceability](https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf)

## Vessel Name
Vessel name should correspond to its IMO. It should be specified in the Master Data like so:

`<attribute id="urn:epcglobal:cbv:mda#vesselName">BING Ship</attribute>`                

## Vessel Flag
Vessel flag should be represented by its [2-digit ISO Country Code](https://www.iso.org/iso-3166-country-codes.html):

`<attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>`

## Vessel ID
So that the vessel ID would not have to be repeated each time in the Vessel Catch Information, it's possible to just specify it in the Master Data like so:

`<attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.9517276</attribute>`

## IMO Number
IMO number is a required attribute for GDST. It is expected that the IMO number will be recorded in the master data for the vessel.

`<attribute id="urn:epcglobal:gdst#imoNumber">IMO.1234567</attribute>`

## Vessel Public Registry
Vessel public registry is a required attribute for GDST. It is expected that the Vessel Public Registry will be recorded in the master data for the vessel.

`<attribute id="urn:epcglobal:gdst#vesselPublicRegistry">https://vesselregistry.com/example/1234567890</attribute>`

## Satellite Tracking Authority
Satellite tracking authority is a required attribtue for GDST. It is expected that the Satellite Tracking Authority will be recorded in the master data for the vessel.

`<attribute id="urn:epcglobal:gdst#satelliteTracking">https://vessel_tracking.com/vessel/1234567890</attribute>`

## Notes on EPCIS Conformance
The CBV 1.2 documentation states that:

```
CBV-Compliant or CBV-Compatible document MAY include any of the lot-level or instance level master data attributes specified in this section in the ILMD section of an EPCIS event, but SHOULD NOT include trade item-level attributes in the ILMD section.
```
[https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf](https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf)

The key word here is **SHOULD NOT** which means that is recommended that this is not praciticed. However, at the time of defining Vessel Flag, Vessel ID, and Vessel Name, it was not expected that the Fishing, Transshipment, and Landing events would be recorded. So they defined these KDEs in the ILMD section so that the first transformation event could record this vessel information. Now that we are recording the Fishing, Transshipment, and Landing events, it makes no sense to record these KDEs in the ILMD section, when they rarely change. It is much easier to record them in the Master Data associated with the GLN of the vessel / port.