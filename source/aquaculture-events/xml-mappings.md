---
title: XML Mappings
description: These are ECPIS XML Mappings from GDST KDEs to the exact XPath in the EPCIS Event XML. These XPaths start from the base of the <ObjectEvent>, <TransformationEvent>, and <AggregateEvent> XML elements.
---

## Feed Mill

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Source of Protein | `ilmd/proteinSource`
Harvest Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCert']`
Harvest Chain of Custody Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`


## Hatching

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Source of Broodstock | `extension/ilmd/broodstockSource`
Date of Harvest (Start) | `extension/ilmd/harvestStartDate`
Date of Harvest (End) | `extension/ilmd/harvestEndDate`
Harvest Certificate | `extension/ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCert']`
Harvest Chain of Custody Certificate | `extension/ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `extension/ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`


## Farm Harvest

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Production Method | `ilmd/productionMethodForFishAndSeafoodCode`
Farming Method | `ilmd/aquacultureMethod`
Date of Harvest (Start) | `ilmd/harvestStartDate`
Date of Harvest (End) | `ilmd/harvestEndDate`
Harvest Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCert']`
Harvest Chain of Custody Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`

## Processing

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Production Date | `eventTime`
Product Origin | `ilmd/cbvmda:countryOfOrigin`
Harvest Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCert']`
Harvest Chain of Custody Certificate | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCoC']`
Processor's License | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:processorLicense']`
Human Welfare Policy | `ilmd/cbvmda:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`


## Aggregate / Deaggregate

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Harvest Chain of Custody Certificate | `gdst:certificationList/cbvmda:certification[gdst:certificateType='urn:gdst:certType:harvestCoC']`


## Ship / Receive

GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`

