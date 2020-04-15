---
title: XML Mappings
description: These are ECPIS XML Mappings from GDST KDEs to the exact XPath in the EPCIS Event XML. These XPaths start from the base of the <ObjectEvent>, <TransformationEvent>, and <AggregateEvent> XML elements. If the EPCIX XML XPath mapping states that this is looked up using the master data, then the XPath is based on the root <EPCISMasterData> element.
---

## Fishing
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Vessel Name | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselName`
Vessel Registration | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselID`
Unique Vessel ID | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:imoNumber`
Public Vessel Registry Hyperlink | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:vesselPublicRegistry`
Availability of Catch Coordinates | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:gpsAvailability`
Satellite Vessel Tracking Authority | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:satelliteTracking`
Catch Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:catchArea`
Economic Zone | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:economicZone`
RMFO Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:rmfoArea`
Sub-National Permit Area | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:subnationalPermitArea`
Fishery Improvement Project | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / gdst:fisheryImprovementProject`
Gear Type | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:fishingGearTypeCode`
Vessel Flag | `extension / ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselFlagState`
Date of Capture | `eventTime`
Production Method | `extension / ilmd / productionMethodForFishAndSeafoodCode`
Expiration Date | `extension / ilmd / cbvmda:itemExpirationDate`
Country of Origin | `extension / ilmd / cbvmda:countryOfOrigin`
Fishing Authorization | ```extension  /  ilmd  /  cbvmda:certificationList  /  cbvmda:certification  [gdst:certificateType='urn:gdst:certType:fishingAuth']```
Harvest Certificate | `extension / ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCert']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## On-Vessel Processing
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Vessel Name | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselName`
Vessel Registration | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselID`
Unique Vessel ID | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:imoNumber`
Public Vessel Registry Hyperlink | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselPublicRegistry`
Vessel Flag | `ilmd / cbvmda:vesselCatchInformationList / cbvmda:vesselCatchInformation / cbvmda:vesselFlagState`
Expiration Date | `ilmd / cbvmda:itemExpirationDate`
Country of Origin | `ilmd / cbvmda:countryOfOrigin`
Harvest Chain of Custody Certificate | `extension / ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Policy Standard | `gdst:humanWelfarePolicy`

## Transshipment
GDST KDE | EPCIX XML XPath
---------|----------------
Event ID | `eventID`
Event Date & Time | `eventTime`
Product Owner | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Transshipment Vessel Name | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselName']`
Transshipment Vessel Unique ID | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:gdst#imoNumber']`
Transshipment Vessel Registration | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselID']`
Transshipment Vessel Flag | This is looked up in the master data of the `bizLocation` of the event. `EPCISMasterData / VocabularyList / Vocabulary [@type='urn:epcglobal:epcis:vtype:Location'] / VocabularyElementList / VocabularyElement [@id='insert_gln_here'] / attribute [@id='urn:epcglobal:cbv:mda#vesselFlagState']`
Transshipment Location (In-Port) | `gdst:unloadingPort`
Transshipment Location (At-Sea) | `readPoint`
Dates of TransShipment (Start) | `gdst:transshipStartDate`
Dates of TransShipment (End) | `gdst:transshipEndDate`
TransShipment Authorization | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:transshipmentAuth']`
Harvest Chain of Custody Certificate | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `extension / ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:humanPolicy']`
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
Landing Authorization | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:landingAuth']`
Human Welfare Policy | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:humanPolicy']`
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
Harvest Chain of Custody Certificate | `ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCoC']`
Human Welfare Policy | `ilmd / cbvmda:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:humanPolicy']`
Human Welfare Policy Standard | `gdst:humanWelfarePolicy`

## Aggregate  /  Deaggregate
GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Harvest Chain of Custody Certificate | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCoC']`

## Ship  /  Receive
GDST  KDE | EPCIS Mapping 
----------|--------------
Event ID  | `eventID`
Event Date & Time | `eventTime`
Event Read Point | `readPoint`
Product Ownership | `gdst:productOwner`
Information Provider | `cbvmda:informationProvider`
Harvest Chain of Custody Certificate | `gdst:certificationList / cbvmda:certification [gdst:certificateType='urn:gdst:certType:harvestCoC']`
