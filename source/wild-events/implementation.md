---
title: Implementation
description: This document discusses implementing EPCIS and GDST for the wild-caught events during the first-mile and different scenarios.
---

> Before continuing here, please review our resources [here](https://developer.traceability-dialogue.org/resources/).

# EPCIS Rules

In EPCIS there are some rules that must be followed. Some of these rules are discussed throughout the document, and some of these rules are discussed specifically under
each event type (Object / Transformation / Aggregation / etc.) in the Retrospective and Prospective semantics section under the definition for each event type.

> It is highly recommended that you fully read the entire [EPCIS 2.0 Standard](https://ref.gs1.org/standards/epcis/) and [CBV](https://ref.gs1.org/standards/cbv/) prior to doing any implementation. While it is a long read, it will save you much time
throughout your implementation.

I will highlight some of the rules that must be followed:
- Each EPC can only have either a single OBJECT - ADD or a single TRANSFORMATION event in which it is the input. I.E.
the product can not appear in previous events and cannot be created more than once. This is noted by the following retrospective semantics:
    - OBJECT
    	- *(If action is ADD) The EPCs in epcList were commissioned (issued for the first time).*
        - *(If action is ADD) The specified quantities of EPC Class instances in quantityList were created (or an unknown quantity, for each QuantityElement in which the quantity value is omitted).*
		- *(If action is ADD) The objects identified by the instance-level identifiers in epcList may appear in subsequent events.*
        - *(If action is ADD) The objects identified by the class-level identifiers in quantityList may appear in subsequent events*
QuantityElement in which the quantity value is omitted).*
    - TRANSFORMATION 
    	- *The objects identified by the instance-level identifiers in outputEPCList may appear in subsequent events.*
        - *The objects identified by the class-level identifiers in outputQuantityList may appear in subsequent events*

# GDST Rules

In GDST, there are additional rule surrounding the implementation of the of GDST. Some of those rules are:

- Each EPC can only appear in a single `Landing` event. This is because by the definition of the landing business step, a raw material harvested from the ocean can only
reach land a single time in its life span.
    - If a raw material is processed or commingled at sea prior to a `Landing` event, then the final output EPC from the one or more transformation event(s) can appear in a `Landing` event.

- If at anytime one or more EPCs are commingled in the physical world in such a way that they can no longer be distinctly seperated physically, then
a commingling event (TRANSFORAMTION + BIZ STEP = Commingling) shall be recorded and a new EPC will be generated to identify the newly commingled 
products.

# Constructing a GTIN and EPC

Constructing the GTIN and EPC are crucial steps in implementing GDST and EPC. 

> Before continueing, don't forget to check out our video on identifiers at at https://vimeo.com/551525183 , you can access it with the password “IFTGFTC” 

## GTIN
It is important to understand that a GTIN is a unique identifier that references the definition of a product, or 
in other words the "blue print" or "schematics" or a product. This identifier references the master data of the 
product that represents one or more KDEs about the product that does not change from instance to instance of the 
product.

Typically during the first-mile, it is rare for a company to have a GS1 Company Prefix and therefore generate a GS1
GTIN for each product that they fish-up and potentially for products produced during on-vessel or at-sea processing.
In these cases, GDST provides a way to generate a GDST GTIN.

### Constructing a GDST GTIN
Below are some RECOMMENDATIONS for constructing a GDST GTIN for first-mile wild-caught products. These are just recommendations
for best practice, but may not fit your particalar scenario.

The format of the GDST GTIN is:

**urn:gdst:<domain_name>:product:class:<company_prefix>.<item_code>**

> It is important to note that the GDST GTIN is **not case-senstive**.

The `<domain_name>` should be a unique website domain that your solution is in control. This can contain NUMERIC characters, ALPHABETIC characters,
and the characters '.' (dot), '_' (underscore), and '-' (dash).

The `<company_prefix>` should be a unique website domain that your solution is in control. This can contain NUMERIC characters, ALPHABETIC characters,
and the characters '_' (underscore), and '-' (dash).

The `<item_code>` should be a unique website domain that your solution is in control. This can contain NUMERIC characters, ALPHABETIC characters,
and the characters '_' (underscore), and '-' (dash).

> The full URN registration defining the complete format and rules can be found at [https://www.iana.org/assignments/urn-formal/gdst](https://www.iana.org/assignments/urn-formal/gdst)

Typically when choosing the `<domain_name>`, we recommend using the base domain of the website for the traceability solution or company. An example value for
this could be `example.org` or `someseafoodcompany.com` or `sometraceabilitysolution.io`.

Next, when choosing the `<company_prefix>`, we typically recommend using an internal numeric identifier for the vessel, company, or business recording
the traceability data.

Finally, when choosing the `<item_code>`, we recommend you choose a numeric identifier that represents a unique combination of species, product form, and size grade.

You might think of it as:

```
Domain Name + Company ID + Species + Product Form + Size Grade
```

For example, if we have:

```
Domain Name: example.org
Company ID: 123
Species: Yellow Fin Tuna (YFT)
Product Form ID: Whole (002)
Size Grade: 30-40
```

You could build a GTIN that looks like:

`urn:gdst:example.org:product:class:123.YFT-002-30-40`

## EPC

The EPC is a unique identifier for a specific instance of a product. This is assigned to the product when it is either harvested from the ocean or when it
is produced during a transformation step such as commingling or processing.

The EPC can either be a `GTIN + LOT NUMBER (Class Level Identifier)` or a `GTIN + SERIAL NUMBER (Instance Identifier)`.

The primary rule between the two is such that a `GTIN + LOT NUMBER` can exist in multiple places at once and can be partially consumed, disposed, moved, sold, purchased etc.
A `GTIN + SERIAL NUMBER` can only ever exist in a single place at one time and CANNOT be partially consumed, disposed, moved, sold, purchased etc.

Traceability involving only `GTIN + LOT NUMBER` EPCs, is typically referred to as `Lot Level Traceability`. While traceability primarily involving `GTIN + SERIAL NUMBER` EPCs
is typically referred to as `Case Level Traceability`.

### Constructing a GTIN + LOT NUMBER EPC
In order to construct an EPC existing of a `GTIN + Lot Number`, you you need to first construct the GTIN as discussed above.

Like the GTIN, an EPC can be formatted either using a GS1 GTIN or a GDST GTIN. The format of an EPC using a GS1 GTIN is discussed
in the EPCIS 2.0 CBV. For the purpose of this documentation we will focus on the GDST format that does not require a GS1 Company Prefix.
However, regardless of the format, the method for generating a lot number remains the same.

The format for the GDST EPC using a GTIN + Lot Number is:

`urn:gdst:<domain_name>:product:lot:class:<company_prefix>.<item_code>.<lot_number>`

> The full URN registration defining the complete format and rules can be found at [https://www.iana.org/assignments/urn-formal/gdst](https://www.iana.org/assignments/urn-formal/gdst)

The <domain_name>, <company_prefix>, and <item_code> will all remain the same as they are in the GTIN.

After that, it is up to you to assign a Lot Number unique to the situation. We will discuss these situation in detail 
further on in this document, but the most common situations during first-mile wild harvesting are:

- *No Transshipment* - A fishing vessel goes out to sea and returns to offload (landing event) its entire hold without transshipment.
- *Transshipment with Full Offload* - A fishing vessel goes out to sea and during its fishing trip, it will offload its entire hold to a transshipment vessel one or more times.
- *Transshipment with Partial Offload* - A fishing vessel goes out to sea and during its fishing trip, it will partially offload a hold to a transshipment vessel one or more times.

For each situation described a above, there are 2 variations:

- *Single Fishing Event* The vessel only records traceability data when the products are offloaded from the vessel, either at land, or to a transshipment vessel.
- *Multiple Fishing Events* - The vessel records traceability data (fishing activity) every day prior to the offload from the vessel, either at land, or to a transshipment vessel.

> On top of the three situations and two variations, on-vessel processing can occur. For the purpose of this documentation we will not
get into on-vessel processing. We will note that once the processing occurs, standard EPCIS / GDST traceability rules take over. 

Depending on the situation, we typically recommend that a lot number is constructed from the following KDEs:
- Vessel ID
- Vessel Trip Number
- Catch Date
- Hold Number or Identifier

Each situation described above may require that a different combination of KDEs are combined to make the lot number unique enough so that 
you are assigning an EPC correctly within the rules of EPCIS and GDST.

For now, we are going to give an example of assigning a lot number based on the first situation in which a fishing vessel goes out to sea 
and returns to offload (landing event) its entire hold without transshipment with the variation that is only records the traceability 
data when the products are offloaded at land. 

In this particular situation the best recommended combination of KDEs is:
- Vessel ID
- Catch Date

So if we have the following information:
```
Vessel ID: WD0923
Catch Date: 01/22/2023
```

We could build the following Lot Number:
`WD0923-01222023`

Finally when we put that together with our GTIN from above we would have the following `EPC (GTIN + LOT NUMBER)`:

`urn:gdst:example.org:product:class:123.YFT-002-30-40.WD0923-01222023`

# First-Mile Situation
As discussed above, some of the most common situations we have in first-mile seafood wild capture is:

- *No Transshipment* - A fishing vessel goes out to sea and returns to offload (landing event) its entire hold without transshipment.
- *Transshipment with Full Offload* - A fishing vessel goes out to sea and during its fishing trip, it will offload its entire hold to a transshipment vessel one or more times.
- *Transshipment with Partial Offload* - A fishing vessel goes out to sea and during its fishing trip, it will partially offload a hold to a transshipment vessel one or more times.

And for each situation described a above, there are 2 variations:

- *Single Fishing Event* The vessel only records traceability data when the products are offloaded from the vessel, either at land, or to a transshipment vessel.
- *Multiple Fishing Events* - The vessel records traceability data (fishing activity) every day prior to the offload from the vessel, either at land, or to a transshipment vessel.

This part of the documentation will go into each situation and variation and describe how the EPC can be created, and what events would be recorded.

> For the purpose of this documentation we will assume that lot-level traceability is being performed and that we will only be generating
class level EPCs (GTIN + LOT NUMBER). This is because we find this to be the most common traceability performed during the first mile.

> Finally, we will also assume that for each situation, that no on-vessel or at-sea processing is occuring.

## No Transshipment 
A fishing vessel goes out to sea and returns to offload (landing event) its entire hold without transshipment.

### Single Fishing Event
The vessel only records traceability data when the products are offloaded from the vessel, either at land, or to a transshipment vessel. Some
important notes about this scenario are:

- The product may or may not be sorted and frozen on the vessel. However, no on vessel processing is occuring beyond this.
- The fish is being sorted into separate holds based on the species and size grade.
- Once the product is placed into its hold after harvest, they are not moved or commingled with other products other than
newly harvested products of the same GTIN being placed into the hold on subsequent fishing / catch dates.

This situation typically results in the fewest events recorded. The event history will typically look like:

- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date in which the first of the product was harvested from the ocean.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time (optionally: + Hold Identifer)

- Landing Event
    - Type: Object
	- Action: OBSERVE
    - Event Time: Date in which the product was offloaded at land.
	- EPC is the same from the fishing event.

> It is important to notes that for the fishing event and landing event, if there are multiple EPCs, then you can record a single
fishing event and landing event listing each EPC on both.

Based on this situation above, we could end up with the following XML:
``` XML
<INSERT EXAMPLE XML HERE>
```

### Mutliple Fishing Events
The vessel records traceability data (fishing activity) every day prior to the offload from the vessel, either at land, 
or to a transshipment vessel. Some important notes about this scenario are:

- The product may or may not be sorted and frozen on the vessel. However, no on vessel processing is occuring beyond this.
- The fish is being sorted into separate holds based on the species and size grade.
- Once the product is placed into its hold after harvest, they are not moved or commingled with other products other than
newly harvested products of the same GTIN being placed into the hold on subsequent fishing / catch dates.
- This scenario will cover a 3 days of fishing activity occuring with a single fishing event being recorded per day of
fishing activity.

**DAY #1**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the first day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: No output EPC is recorded.

**DAY #2**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the second day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: No output EPC is recorded.

**DAY #3**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the third day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: 
    	- GTIN: Same GTIN as the Input EPC.
		- Lot Number: Vessel ID + Event Time + Hold Identifier

**FINALLY**
- Landing Event
    - Type: Object
	- Action: OBSERVE
    - Event Time: Date in which the product was offloaded at land.
	- EPC is the output EPC from the final commingling event recorded on the third day of the fishing activity.

## Transshipment with Full Offload
A fishing vessel goes out to sea and during its fishing trip, it will offload its entire hold to a transshipment vessel one or more times.

### Single Fishing Event
The vessel only records traceability data when the products are offloaded from the vessel, either at land, or to a transshipment vessel. Some
important notes about this scenario are:

- The product may or may not be sorted and frozen on the vessel. However, no on vessel processing is occuring beyond this.
- The fish is being sorted into separate holds based on the species and size grade.
- Once the product is placed into its hold after harvest, they are not moved or commingled with other product(s) other than
newly harvested product(s) of the same GTIN being placed into the hold on subsequent fishing / catch dates.
- The product(s) are offloaded to a transshipment vessel twice during the course of the fishing trip.
- We will assume that during transshipment, products are not being commingled.

This situation typically results in the fewest events recorded. The event history will typically look like:

**Events recorded prior to the first Transshipment:**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date in which the first of the product was harvested from the wild.
	- EPC(s)
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time (optionally: + Hold Identifer)

- Transshipment Event
    - Type: OBJECT
	- Action: ADD
	- Event Time: Date in which the first of the product was harvested from the wild.
	- EPC(s) is the same from the fishing event.

- Landing Event
    - Type: Object
	- Action: OBSERVE
    - Event Time: Date in which the product was offloaded at land.
	- EPC(s) is the same from the fishing event.

**Events recorded after the first transshipment:**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date in which the first of the product was harvested from the wild **after the previous transshipment**.
	- EPC(s)
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time (optionally: + Hold Identifer)

- Transshipment Event
    - Type: OBJECT
	- Action: ADD
	- Event Time: Date in which the first of the product was harvested from the wild.
	- EPC(s) is the same from the fishing event.

- Landing Event
    - Type: Object
	- Action: OBSERVE
    - Event Time: Date in which the product was offloaded at land.
	- EPC(s) is the same from the fishing event.

> If products of the same GTIN are being placed into seperate holds, then you need to include the holder identifier in the lot number.

> It is important to notes that for the fishing event and landing event, if there are multiple EPCs, then you can record a single
fishing event and landing event listing each EPC on both.

Based on this situation above, we could end up with the following XML:
``` XML
<INSERT EXAMPLE XML HERE>
```

### Mutliple Fishing Events
The vessel records traceability data (fishing activity) every day prior to the offload from the vessel, either at land, 
or to a transshipment vessel. Some important notes about this scenario are:

- The product may or may not be sorted and frozen on the vessel. However, no on vessel processing is occuring beyond this.
- The fish is being sorted into separate holds based on the species and size grade.
- Once the product is placed into its hold after harvest, they are not moved or commingled with other products other than
newly harvested products of the same GTIN being placed into the hold on subsequent fishing / catch dates.
- This scenario will cover a 3 days of fishing activity occuring with a single fishing event being recorded per day of
fishing activity.

**DAY #1**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the first day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: No output EPC is recorded.

**DAY #2**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the second day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: No output EPC is recorded.

**DAY #3**
- Fishing Event
    - Type: Object
	- Action: ADD
    - Event Time: Date of the third day the fishing activity started.
	- EPC
    	- GTIN: Company ID + Species + Size Grade
    	- Lot Number Recommendation: Vessel ID + Event Time

- Commingling Event
    - Type: Transformation
	- Event Time: +1 hour from the Fishing Event recorded.
	- Transformation ID: Company ID + Vessel ID + Vessel Trip Number
	- Input EPC: The same EPC from the Fishing Event recorded.
	- Output EPC: 
    	- GTIN: Same GTIN as the Input EPC.
		- Lot Number: Vessel ID + Event Time + Hold Identifier

**FINALLY**
- Landing Event
    - Type: Object
	- Action: OBSERVE
    - Event Time: Date in which the product was offloaded at land.
	- EPC is the output EPC from the final commingling event recorded on the third day of the fishing activity.