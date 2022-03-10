---
title: Vessel Catch Area
description: This covers how the Vessel Catch Area is extended by GDST.
---

This covers how the extended attributes added into the `<cbvmda:vesselCatchInformation />` attribute in the `<ilmd>` section on Fishing Events.

## GPS Availability
This should either be `true` or `false`

`<gdst:gpsAvailability>true</gdst:gpsAvailability>`

## RFMO Area
This is required to be a valid URN that can be found [here](https://raw.githubusercontent.com/ift-gftc/doc.gdst/master/data/rfmo.json).

`<gdst:rfmoArea>urn:gdst:rfmo:ciffa</gdst:rfmoArea>`

## Catch Area
Although, this is not a KDE extension created by GDST, GDST has created an allowed list of URN values that can be found [here](https://raw.githubusercontent.com/ift-gftc/doc.gdst/master/data/fao.json).

`<cbvmda:catchArea>urn:gdst:fao:27</cbvmda:catchArea>`

## Economic Zone
Although, this is not a KDE extension created by GDST, GDST has created an allowed list of URN values that can be found [here](https://raw.githubusercontent.com/ift-gftc/doc.gdst/master/data/eez.json).

`<cbvmda:economicZone>urn:gdst:eez:ABW</cbvmda:economicZone>`

## Sub-National Permit Area
This is a free-write field. Anything can go here.

`<gdst:subnationalPermitArea></gdst:subnationalPermitArea>`

## Vessel Public Registry Link
This field can be specified on the Catch Area in the fishing event, or it can be specified in the Master Data of the vessel.

`<gdst:vesselPublicRegistry>https://www.register-my-vessel.fake.com</gdst:vesselPublicRegistry>`

## Unique Vessel Identification / IMO Number
This KDE can be specified on the Catch Area in the fishing event, or it can be specified in the Master Data of the vessel.

`<gdst:imoNumber>IMO.1234567890</gdst:imoNumber>`

## Fishery Improvement Project
This should be the name of the FIP. This is a free-write field.

`<gdst:fisheryImprovementProject>Example Fishery Improvement Project</gdst:fisheryImprovementProject>`

## Gear Type
Although, this is not a KDE extension created by GDST, GDST has created an allowed list of URN values that can be found [here](https://raw.githubusercontent.com/ift-gftc/doc.gdst/master/data/geartypes.json).

`<cbvmda:fishingGearTypeCode>urn:gdst:gear:2.1</cbvmda:fishingGearTypeCode>`