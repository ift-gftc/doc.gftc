---
title: Object Event
description: This covers how the Object Event type has been extended to support Seafood Traceability.
---

# GDST Required KDEs

## Certification List
You can see in the Certificates section that we have extended the base object event to allow for Certifications where ILMD data is not allowed. 

`<cbvmda:certificationList></cbvmda:certificationList>`


## Existence of Human Welfare Policy
Indicator of human welfare policies in place on a vessel/trip, answering the question "What kind of human welfare, labor, or anti-slavery policy was in place on this vessel/trip?" If internal policy subject to 3rd party audit, select '3P Audit'.

`<gdst:humanWelfarePolicy></gdst:humanWelfarePolicy>`


## Landing Start & End Date
Calendar start and end dates when seafood is discharged to a landing location.

`<gdst:landingStartDate></gdst:landingStartDate>`

`<gdst:landingEndDate></gdst:landingEndDate>`


## Product Ownership
The party who owns the product(s) at the time the event was recorded.

`<gdst:productOwner></gdst:productOwner>`


## Transshipment Start & End Date
Calendar start and end dates of a rendezvous to discharge seafood from a fishing vessel to transshipment vessel.

`<gdst:transshipStartDate></gdst:transshipStartDate>`

`<gdst:transshipEndDate></gdst:transshipEndDate>`

## Vessel Trip Start & End Date
This is the start and end date of the vessel trip.

`<gdst:vesselTripStart></gdst:vesselTripStart>`

`<gdst:vesselTripEnd></gdst:vesselTripEnd>`


# Additional KDEs not required by GDST
Sometimes, industry members need to include additional information on events that 
are not required by the GDST. In an effort to improve interoperability, GDST will 
come up a with a common mapping for that industry member to use.

## Transport Type
This specifies what mode of transport the products referenced in a ship / receive event were shipped by. 

Allowed values for this KDE are:
- AIR
- SEA
- LAND

An example of the XML would be:

`<gdst:transportType>AIR</gdst:transportType>`

## Transport Vehicle ID
This is an identifier of the vehicle carrying the goods. It is recommended that this is a GLN.

An example of the XML would be:

`<gdst:transportVehicleID>urn:epc:id:sgln:08600031303.0.0</gdst:transportVehicleID>`

## Transport Number
This is an identifier for the shippment or transportation taking place. This might also be referred to as a "Shipment Number".

An example of the XML would be:

`<gdst:transportNumber>BTT0101010101010</gdst:transportNumber>`