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