---
title: XML Mappings
description: These are ECPIS XML Mappings from GDST KDEs to the exact XPath in the EPCIS Event XML.
---

 These XPaths start from the base of the `<ObjectEvent>`, `<TransformationEvent>`, and `<AggregateEvent>` XML elements. If the EPCIX XML XPath mapping states that this is looked up using the Static Master Data, then the XPath is based on the root `<EPCISMasterData>` element.

 ## Notes

 - The `cbvmda:informationProvider` was originally defined for Static Master Data. However, it was adopted as an extension KDE into each CTE because it was determined to be critical in understanding which entity in the supply chain recorded the data.

 - The GS1 CBV and [GS1's Addition of Attributes for Fish Traceability](https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf) define some vessel KDEs to be defined in the `ILMD` section of `OBJECT-ADD` and `TRANSFORMATION`. However, these were originally defined to be in the ILMD because at the time of their definition, it was not expected that the Fishing, Transshipment, and Landing events were not expected to be recorded. Now that the these events are being recorded, it is more convenient to record some KDEs about vessels in the Static Master Data instead of the ILMD. However, because GS1 has previously defined these as to be in the ILMD, we will leave it optional for them to be either in the Static Master Data or the ILMD.



## Static Master Data
Master Data Type | Name                         | Master Data ID
-----------------|------------------------------|---------------
Vessel           | Vessel Flag State            | `urn:epcglobal:cbv:mda#vesselFlagState`
Vessel           | Vessel ID                    |  `urn:epcglobal:cbv:mda#vesselName`
Vessel           | IMO Number                   | `urn:gdst:kde#imoNumber`
Vessel           | Vessel Public Registry       | `urn:gdst:kde#vesselPublicRegistry`
Vessel           | Satellite Tracking Authority | `urn:gdst:kde#satelliteTracking`
Vessel           | Vessel Name                  | `urn:epcglobal:cbv:mda#vesselName`
Vessel           | Information Provider         | `urn:epcglobal:cbv:mda#informationProvider`
Vessel           | Owning Party                 | `urn:epcglobal:cbv:owning_party`
Location         | Information Provider         | `urn:epcglobal:cbv:mda#informationProvider`
Location         | Owning Party                 | `urn:epcglobal:cbv:owning_party`
Trade Item       | Species (Scientific Name)    | `urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName`
Trade Item       | Species (Alpha 3 Code)       | `urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode`
Trade Item       | Product Form                 | `urn:epcglobal:cbv:mda#radeItemConditionCode`
Trade Item       | Short Description            | `urn:epcglobal:cbv:mda#descriptionShort`
Trade Item       | Information Provider         | `urn:epcglobal:cbv:mda#informationProvider`
Trade Item       | Owning Party                 | `urn:epcglobal:cbv:owning_party`


## Fishing
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Vessel Name (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselName`
Vessel Registration (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselID`
Unique Vessel ID (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:imoNumber`
Public Vessel Registry Hyperlink (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:vesselPublicRegistry`
Satellite Vessel Tracking Authority (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:satelliteTracking`
Vessel Flag (Static Master Data or ILMD) | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselFlagState`
Availability of Catch Coordinates | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:gpsAvailability`
Catch Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:catchArea`
Economic Zone | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:economicZone`
RMFO Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:rfmoArea`
Sub-National Permit Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:subnationalPermitArea`
Fishery Improvement Project | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:fisheryImprovementProject`
Gear Type | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:fishingGearTypeCode`
Vessel Trip Date | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:vesselTripDate`
Date of Capture | `eventTime`
Production Method | `extension / ilmd / cbvmda:productionMethodForFishAndSeafoodCode`
Expiration Date | `extension / ilmd / cbvmda:itemExpirationDate`
Country of Origin | `extension / ilmd / cbvmda:countryOfOrigin`
Fishing Authorization | ```extension  /  ilmd  /  cbvmda:certificationList  /  certification  [gdst:certificationType='urn:gdst:certType:fishingAuth']```
Harvest Certificate | `extension / ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCert']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## On-Vessel Processing
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Vessel Name (Static Master Data or ILMD) | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselName`
Vessel Registration (Static Master Data or ILMD) | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselID`
Unique Vessel ID (Static Master Data or ILMD) | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:imoNumber`
Public Vessel Registry Hyperlink (Static Master Data or ILMD) | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselPublicRegistry`
Vessel Flag (Static Master Data or ILMD) | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselFlagState`
Expiration Date | `ilmd / cbvmda:itemExpirationDate`
Country of Origin | `ilmd / cbvmda:countryOfOrigin`
Harvest Chain of Custody Certificate | `extension / ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## Transshipment
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Transshipment Vessel Name (Static Master Data Only) | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselName']`
Transshipment Vessel Unique ID (Static Master Data Only) | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:gdst:kde#imoNumber']`
Transshipment Vessel Registration (Static Master Data Only) | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselID']`
Transshipment Vessel Flag (Static Master Data Only) | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselFlagState']`
Transshipment Location (In-Port) | `gdst:unloadingPort`
Transshipment Location (At-Sea) | `readPoint`
Dates of TransShipment (Start) | `gdst:transshipStartDate`
Dates of TransShipment (End) | `gdst:transshipEndDate`
TransShipment Authorization | `gdst:certificationList / certification [gdst:certificationType='urn:gdst:certType:transshipmentAuth']`
Harvest Chain of Custody Certificate | `gdst:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## Landing
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Landing Location (In-Port) | `gdst:unloadingPort`
Landing Location (Non-Port) | `readPoint`
Dates of Landing (Start) | `gdst:landingStartDate`
Dates of Landing (End) | `gdst:landingEndDate`
Landing Authorization | `cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:landingAuth']`
Human Welfare Policy | `cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## Processing
GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Production Date | `eventTime`
Product Origin | `ilmd / cbvmda:countryOfOrigin`
Harvest Chain of Custody Certificate | `ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `ilmd / cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`

## Aggregate  /  Deaggregate
GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Harvest Chain of Custody Certificate | `cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCoC']`

## Ship  /  Receive
GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Harvest Chain of Custody Certificate | `cbvmda:certificationList / certification [gdst:certificationType='urn:gdst:certType:harvestCoC']`


Additional KDE (Not Required by GDST Standard) | EPCIS Mapping
-----------------------------------------------|--------------
Transit Provider                               | `extension / sourceList[type='urn:epcglobal:cbv:sdt:possessing_party']/@text`
Transport Type                                 | `extension / gdst:transportType`
Transport Vehicle ID                           | `extension / gdst:transportVehicleID`
Shipment Number                                | `extension / gdst:transportNunber`