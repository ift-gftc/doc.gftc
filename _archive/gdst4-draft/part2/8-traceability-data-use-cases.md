---
title: 8. Traceability Data Use Cases
---

## Traceback

Traceback is a common, straightforward usage of traceability data.
Beginning with the traceable object of interest, for example the case
of frozen shrimp shown in the examples above.

1. Query the event repository for all events related to the Object Identifier and location(s) of interest (receipts, shipments, pack, unpack, transformation). If no location is specified, all events at all locations will be examined.
1. Order the events by timestamp and group by terminal destination.
1. From each terminal destination follow the shipping and receiving (source/destination) trail back to either the original source (catch or harvest) or the Output of a transformation event.
1. From the transformation event, repeat step 8.1.3 and this step for each Input Object Identifier.
1. The resulting map looks something like this:

![Traceback map](../media/image13.png)

## Traceforward

Traceforward is also a common usage of traceability data. Beginning
with the traceable object of interest, for example the ingredients
used in a specific type of feed.

1. Query the event repository for all events related to the Object Identifier and location(s) of interest (receipts, shipments, pack, unpack, transformation).
2. Order the events by timestamp.
3. From source follow the shipping and receiving (source/destination) trail forward to the Input of a transformation event.
4. From the transformation event, repeat step 8.2.1 for each Output of the transformation event and this step for each new Input Object Identifier found.
5. The resulting map looks something like this:

![Traceforward](../media/image14.png)

**Feed Mill Feed Mill Farm Retailer**

## Aggregation Report for CSRs

Typical commitments are made about the amount of traceable product
sold or produced by an entity. Using the same traceforward or
tracebackward approach shown above, in conjunction with the Quantity
and Units of Measure, one can total the quantity of finished products
or ingredients related to a specific commodity, product, catch
location, farming region or legal entity.

## Mass Balance

Mass balance is a computation of inputs and outputs to establish usage
quantities to verify legal usage. Using the tracebackward and
traceforward methodologies described above for a particular batch/lot
of products one can compute the quantity of inputs consumed based on
the transformation event. If one has access to all transformation
events related to a specific catch, once can compute the total output
produced and verify for reasonableness.

## Chain of Custody

The shipping and receiving events include `owning party` for both
source and destination. This information in conjunction with the
tracebackward and traceforward methods described above can provide
complete chains of custody.
