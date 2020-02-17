---
title: Dispositions
description: This covers how Dispositions have been extended to support Seafood Traceability needs.
---

Business Steps were extended to cover the recording of events not covered in the EPCIS CBV 1.2 standard. These events cover scenarios unique to Seafood Traceability. The business steps are recorded under the namespace `urn:gdst:bizStep:`.

| Disposition | Description | Example |
| ----------- | ----------- | ----------|
| `urn:gdst:disposition:entering_commerce` | This indicates that a product has changed ownership for the first time since it was harvested from an aquaculture facility or from the wild. A product may only appear in a single event with this disposition. | Tuna is sold from a Fishing Vessel to a Transshipment Vessel. |