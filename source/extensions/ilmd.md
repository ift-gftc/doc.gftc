---
title: ILMD
description: This covers how the ILMD attributes have been extended to support the needs to of Seafood Traceability.
---

These are attributes that are extended at the `<ilmd>` level in `Object ADD` and `Transformation ADD`. This not meant to include all the KDEs required by GDST, just the ones that required the `<ilmd>` to be extended.

# GDST KDEs

## Broodstock Source
Broodstock from grow-out farms or taken from the wild.

`Domestic` or `Wild Sources` are valid values.

`<gdst:broodstockSource></gdst:broodstockSource>`

## Farming Method
A combination of type of culture, unit, level of intensity, culture species and scale or size of exploitation as defined by the FAO.  
`Extensive`, `Semi-Intensive`, `Intensive` are valid values.

Please see [http://www.fao.org/3/t8598e/t8598e05.htm](http://www.fao.org/3/t8598e/t8598e05.htm) for more information.

`<gdst:aquacultureMethod></gdst:aquacultureMethod>`

## Fishery Improvement Project
Publicly-listed name of fishery improvement project which the harvest event is subject to. [Standardized Database Maintained by FishChoice](https://fisheryprogress.org)

`<gdst:fisheryImprovementProject></gdst:fisheryImprovementProject>`

## Feed Type
Type of feeds used at each growth stage. Natural, processed, live, GMO, other.

`<gdst:feedType></gdst:feedType>`

## Protein Source
This represents the general source used for the protein in feed.

*  Wild caught fish (straight)
*  Wild caught fish byproduct
*  Insects
*  Soy
*  Other

`<gdst:proteinSource></gdst:proteinSource>`


# Additional KDEs not required by GDST
Sometimes, industry members need to include additional information on events that 
are not required by the GDST. In an effort to improve interoperability, GDST will 
come up a with a common mapping for that industry member to use.

## Processing Type
This defines what kind of processing was done. 

Allowed values are:
- GENERAL
- CLEANING

An example of the XML is:
`<gdst:processingType>GENERAL</gdst:processingType>`
