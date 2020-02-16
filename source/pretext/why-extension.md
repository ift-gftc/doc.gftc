---
title: Why Extension?
---

By default, EPCIS was meant to be extended to suit Industry needs. As stated in the EPCIS 1.2 documentation. Because of this, we tried to use the natural extensible points in the EPCIS schema to meet our Seafood Traceability needs.

> The core specifications provide a core set of data types and operations, but also provide several means whereby the core set may be extended for purposes specific to a given industry or application area. *(EPCIS 1.2 Documentation - pg. 16)*

This includes extending the following points:

* ILMD
* Master Data
* Object Event
    - This was extended to allow for KDEs needed on Object events that could not use ILMD data.
* Business Steps
* Disposition

Before extending, we tried to first use the base EPCIS standard and the given attributes, business steps, and dispositions. However, instead of stretching existing standards to try and meet our needs, if nothing existed that fit our needs well, we opted for extending the EPCIS standard where recommended by the EPCIS 1.2 standard. 
