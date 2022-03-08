---
title: GDST - Frequently Asked Questions (F.A.Q.)
description: Below is a list of frequently asked questions about the GDST standard.
---

## What KDEs / CTEs are required?
A CTE/KDE is required if the event occurs or the information exists. This means that if the event does not occur, then the event cannot be recorded. If the information for the KDE on an event does not exist, then that KDE cannot be recorded.

> Example #1: The IMO is not required if the vessel performing the fishing event does not have an IMO Number.

> Example #2: The On-Vessel Processing event is not required if no processing occurs onboard the fishing or transshipment vessel.

> Example #3: The Transshipment event is only required when transshiping occurs.

> Example #4: IF no Chain-of-Custody certification program is assigned to the facility or vessel, then this certificate cannot be recorded for a Transshipment, Landing, Receive, Ship or Processing event.

## Do I need a GS1 Company Prefix to create a EPC/GTIN/GLN/PGLN?
No, you do not need a GS1 Company Prefix to create identifiers in the EPCIS / GDST standard. This is because we have defined a way to create identifiers that follow the private industry URN format defined in the [EPCIS CBV 1.2](https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf) document.

Identifiers Video can be found at https://vimeo.com/551525183 , you can access it with the password “IFTGFTC” 

## Can Unique Vessel Identification be taken from another field other than IMO Number?
No, it cannot. This field is reserved for IMO Number.

## What kind of document is needed for landing authorization?
Landing Authorization is two pieces of information. Who provides authority for a vessel to discharge seafood at the port? What is the number on the document given to the fishing vessel that gives them this permission from the authority? 

```
Authority Name = Certificate Standard
Document Number = Certificate Identification
```

***NOTE: This might be the same authority and document number as the Fishing Authorization on the fishing event.*

## What if our vessels do not do any on-vessel processing? Do we still need to record the On-Vessel Processing event?
No, you do not need to record the on-vessel processing event if no processing occuring onboard the vessels.

## What do I put for Human Welfare Policy? Do I put the same thing for all of my events?
The Human Welfare Policy is defined as:

> Name of internationally recognized standards to which policy on a vessel/trip claims conformity.

And the name of the standard should be provided in the Certificate Standard field of the certificat with the type set to `urn:gdst:certType:humanPolicy`

If the all of the vessels in a fishery fall under the same policy on all trips, including the transshipment vessels, then the same information would be provided. If not, then this would be different.


