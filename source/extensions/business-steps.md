---
title: Business Steps
description: This covers all the additional Business Steps added by GDST to cover specific event scenarios in Seafood Traceability.
---

Business Steps were extended to cover the recording of events not covered in the EPCIS CBV 1.2 standard. These events cover scenarios unique to Seafood Traceability. The business steps are recorded under the namespace `urn:gdst:bizStep:`.

| Business Step | Description | Example |
| ----------- | ----------- | ----------|
| `urn:gdst:bizStep:fishingEvent` | Products are harvested from the wild. | A fishing vessel catches some Tuna from the ocean. |
| `urn:gdst:bizStep:farmHarvest` | Products are harvested from an aquaculture facility. | A shrimp farmer harvests shrimp from a pong. |
| `urn:gdst:bizStep:transshipment` | A product harvested from the wild is transferred to a `vessel` from another `vessel` before it's `landing` event. | A Tuna is harvested by a fishing vessel an transferred to a tinger to be carried to shore. |
| `urn:gdst:bizStep:landing` | A product harvested in the wild is transferred from a `vessel` to `land` for the first time since being harvested. | Tuna is offloaded from a tinder to a dock. |
| `urn:gdst:bizStep:feeding` | A feed is given to a live fish at an aquaculture facility. This is a `transformation` event with the input being the feed and the output is what is being fed. | A shrimp farmers feeds his shrimp. |
| `urn:gdst:bizStep:hatching` | A container at an aquaculture is stocked with a live species. | A shrimp farmer stocks his pond with shrimp. |
| `urn:gdst:bizStep:temperature` | A temperature is recorded about seafood products. | A cargo container of frozen shrimp is recorded for the cold-chain. |
| `urn:gdst:bizStep:packaging` | Products are packaged. | A processors packages salmon fillets into cedar planks inside cartons. |
| `urn:gdst:bizStep:commingling` | Products are put together without their GTIN changing. Only the Lot Number changes. | Caviar collected from several fisherman is collected into a barrel to be processed. |
| `urn:gdst:bizStep:sampling` | Products are sampled and scientific measurements are recording as part of the event. | A biological test is performed on salmon and the results of the test are recorded with the event. |
| `urn:gdst:bizStep:freezing` | Products are frozen. | A Shrimp Processor block freezes a case of shrimp. |
