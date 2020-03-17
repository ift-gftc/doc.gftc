---
title: EU Catch Certificate
---

Our goal here is to demystify the requirements of the EU Catch Certificate and show how GDST compliant event data can be used to meet the requirements for the EU Catch Certficiate. To start with, we are going to reference the [GS1 Foundation for Fish Seafood Aquaculture Traceability Guideline](https://www.gs1.org/sites/default/files/docs/traceability/GS1_Foundation_for_Fish_Seafood_Aquaculture_Traceability_Guideline.pdf) when it comes to the required KDEs for meeting the EU Catch Certificate guidelines. This is because they have already done a wonderful job for laying out the specific required KDEs and mapped each one to statements in the EU guidelines that establishes the KDE requirement. I have recreated the table below as a reference point here in this documentation and then tied it to the attribute in the EPCIS xml. To see how each KDE ties to the EU regulations, please see page 53 in the GS1 documentation linked above.

*EU Regulations define the ability to specify a number of vessels when the vessels are small enough. GDST compliance requires each Vessel's information and does not allow this so these scenarios will not be covered here.*

## Recommended ILMD Extensions

`<gdst:fishQualityGrade>` - The Quality Grade of the product. This attribute can optionally be specified in the `<ilmd>` data or in the Master Data.
 
`<gdst:fishSizeGrade>` - The Size Grade of the the product. This attribute can optionally be specified in the `<ilmd>` data or in the Master Data.


## Recommended Master Data Extensions

`<attribute id="urn:gdst:fishQualityGrade">` - The Quality Grade of the product. This attribute can optionally be specified in the `<ilmd>` data or in the Master Data.
 
`<attribute id="urn:gdst:fishSizeGrade">` - The Size Grade of the the product. This attribute can optionally be specified in the `<ilmd>` data or in the Master Data.


## Required KDEs

KDE | Description
------------ | -------------
GTIN | This can be derived from the EPC of the Product Instance.
Lot | When a GTIN.LotNumber is being used for the EPC, this is easily derivable from the EPC. Otherwise you will need to perform a Trace Back on the EPC until you find the Processing Event where the GTIN.LotNumber is being defined. Generally a Processing (Transformation) will have outputs defined with GTIN.LotNumber that are later packaged into GTIN.SerialNumber EPCs. 
Quantity Net Weight | This can be calculated using the `<quantity>` and `<uom>` elements in the `<quantityElement>`s found throughout the EPCIS events. If the `<epcList>` is used with cases, then you look up the case weight either in the `<ilmd>` data or the Master Data associated with the `GTIN` of the `EPC`.
Expiration Date / Best Before Date | This can be found in the `<ilmd>` data of the `TRANSFORMATION ADD` or `OBJECT ADD` event that created the product. The `<cbv:itemExpirationDate>` attribute is used to specify this information.
Fishing Vessel GLN | This is the `GLN` from the `<bizLocation>` on the event with the business step `urn:gdst:bizStep:fishingEvent`.
Fishing Vessel Name | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data under the element `<cbvmda:vesselName>` on the event with the business step `urn:gdst:bizStep:fishingEvent`. This can also be found in the Master Data of the Fishing Vessel with the attribute id `urn:epcglobal:cbv:mda#vesselName` that can be looked up using the `GLN` from the `<bizLocation>` on the event with the business step `urn:gdst:bizStep:fishingEvent`.  
Flag State of the Vessel | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data under the element `<cbvmda:vesselFlagState>` on the event with the business step `urn:gdst:bizStep:fishingEvent`. This can also be found in the Master Data of the Fishing Vessel with the attribute id `urn:epcglobal:cbv:mda#vesselFlagState` that can be looked up using the `GLN` from the `<bizLocation>` on the event with the business step `urn:gdst:bizStep:fishingEvent`. 
Production Unit GLN | This is suppoed to be the GLN of the Fishing Vessel that caught the original fish or the GLN of the Aquaculture Facility where the original fish was produced. In the case of wild-caught, this is the `GLN` of the `<bizLocation>` found on the event with the business step `urn:gdst:bizStep:fishingEvent`. In the case of farmed, this is the `GLN` of the `<bizLocation>` found on the event with the business step `urn:gdst:bizStep:farmEvent`. 
Production Unit Name | This is supposed to be either the name of the Fishing Vessel or the Aquaculture Facility where the product was produced, depending on farmed or wild-caught. In the case of wild-caught, you take the `GLN` of the `<bizLocation>` on the event with a business step `urn:gdst:bizStep:fishingEvent` and look up the `urn:epcglobal:cbv:mda#vesselName` or `urn:epcglobal:cbv:mda#name` on the Master Data associated with that `GLN`. In the case of farmed, you take the `GLN` of the `<bizLocation>` on the event with a business step `urn:gdst:bizStep:farmEvent` and look up the `urn:epcglobal:cbv:mda#name` on the Master Data associated with that `GLN`.
Fish Species | This can be found in the Master Data of the Product. This Master Data can be located using the GTIN of the Product. In the EPCIS Master Data, this attribute would be `speciesForFisheryStatisticsPurposesCode`
Scientific Name | This can found in the Master Data of the Product. This Master Data can be located using the GTIN of the Product. In the EPCIS Master Data, this attribute would be `speciesForFisheryStatisticsPurposesName`.
Commercial Designation | This can found in the Master Data of the Product. This Master Data can be located using the GTIN of the Product. In the EPCIS Master Data, this attribute would be `urn:epcglobal:cbv:mda:tradeItemDescription`.
Catch Area | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data on the event with the business step `urn:gdst:bizStep:fishingEvent`. This is found in the `<cbvmda:catchArea>` attribute.
Catch Certificate ID | This can be found on the certificate with the type `urn:gdst:certType:catch_certificate` on the on the event with the business step `urn:gdst:bizStep:fishingEvent`. In the certificate, the Catch Certificate ID is recorded using the `<cbvmda:certificationIdentification>` element.
Catch Date(s) | This can be found by doing a Trace Back on the product and looking at the `<eventTime>` on each event with the business step `urn:gdst:bizStep:fishingEvent`.
External Vessel ID | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data under the element `<cbvmda:vesselID>` on the event with the business step `urn:gdst:bizStep:fishingEvent`. This can also be found in the Master Data of the Fishing Vessel with the attribute id `urn:epcglobal:cbv:mda#vesselID` that can be looked up using the `GLN` from the `<bizLocation>` on the event with the business step `urn:gdst:bizStep:fishingEvent`.  
Supplier GLN | The supplier would be the Trading Partner supplying the products to the EU. In this case you are looking for the `PGLN` (party GLN) of the supplier of the products to the EU.
Supplier Name | Given the Supplier (P)GLN, you need to look up the Master Data associated with that `PGLN` and provide the name. In EPCIS Master Data this would be the `urn:epcglobal:cbv:mda#name` attribute.
Supplier Address | Given the Supplier (P)GLN, you need to look up the Master Data associated with that `PGLN` and provide the address. In EPCIS Master Data this would be the following attributes: `urn:epcglobal:cbv:mda#streetAddressOne`, `urn:epcglobal:cbv:mda#streetAddressTwo`, `urn:epcglobal:cbv:mda#city`, `urn:epcglobal:cbv:mda#state`, `urn:epcglobal:cbv:mda#postalCode`, `urn:epcglobal:cbv:mda#countryCode`
Production Method | This must either be `caught`, `caught in freshwater`, or `farmed`. This can be indicated through the <productionMethodForFishAndSeafoodCode> in the `<vesselCatchInformation>` on the event with the business step `urn:gdst:bizStep:fishingEvent`.
First Freeze Date | This can be indicated in multiple ways. The first way is that on the `<ilmd>` data there is a possible attribute that can be expressed called `<cbvmda:firstFreezeDate>` that can be used to indicate this. The next way is that the first event with the business step `urn:gdst:bizStep:freezing` in the product's direct history, meaning only CTEs that directly occured to this product following its `OBJECT ADD` or `TRANSFORMATION ADD` event.
Storage State Code | This indicates if the product has previously been frozen or not. This can be determined by looking if there is a **First Freeze Date**. To look for this please see the above KDE.
Fishing Gear Type | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data on the event with the business step `urn:gdst:bizStep:fishingEvent`. This is found in the `<cbvmda:catchArea>` attribute.
Fish Quality Grade | This can be found in the `<ilmd>` data of the product under the extended element `<gdst:fishQualityGrade>`.
Fish Size | This can be found in the `<ilmd>` data of the product under the extended element `<gdst:fishSizeGrade>`.
Fish Presentation Form | This can found in the Master Data of the Product. This Master Data can be located using the GTIN of the Product. In the EPCIS Master Data, this attribute would be `urn:epcglobal:cbv:mda:tradeItemConditionCode`. Note: The values need to be from the EU codelist [http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404](http://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404) annex I - table 1. *A list of the codes from the EU regulations document 32011R0404 is listed below.*
VAT Number | This information can be found by first finding the `PGLN` of the `destination type="urn:epcglobal:cbv:sdt:owning_party"` on the event with the disposition `urn:gdst:disposition:entering_commerce`. Using this `PGLN`, you can look up the Master Data for the PGLN, and locate the **VAT Number** in the additional Party IDs. It would be represented as a child elemnt like so `<additionalPartyID partyIDTypeCode="EU_VAT_IDENTIFICATION_NUMBER">` in the attribute element `<attribute id="urn:epcglobal:cbv:mda:additionalPartyID">`.
National Tax Identification | This information can be found by first finding the `PGLN` of the `destination type="urn:epcglobal:cbv:sdt:owning_party"` on the event with the disposition `urn:gdst:disposition:entering_commerce`. Using this `PGLN`, you can look up the Master Data for the PGLN, and locate the **National Tax Identification** in the additional Party IDs. It would be represented as a child elemnt like so `<additionalPartyID partyIDTypeCode="NATIONAL_TAX_IDENTIFICATION_NUMBER">` in the attribute element `<attribute id="urn:epcglobal:cbv:mda:additionalPartyID">`.
Conservation Reference Size | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data on the event with the business step `urn:gdst:bizStep:fishingEvent`. This is found in the `<cbvmda:fishConservationReferenceSizeCode>` attribute.
Fish Preservation State | This can found in the Master Data of the Product. This Master Data can be located using the GTIN of the Product. In the EPCIS Master Data, this attribute would be `urn:epcglobal:cbv:mda:preservationTechniqueCode`. *A list of the codes from the EU regulations document 32011R0404 is listed below.*
Country of Export | This can be found in the `<ilmd>` data of the product under the `<cbv:countryOfExport>` element. When multiple countries of export are included, the dominant country of export SHALL be included as the first element. 
Economic Zone | This can be found in the in the `<vesselCatchInformation>` of the `<ilmd>` data on the event with the business step `urn:gdst:bizStep:fishingEvent`. This is found in the `<cbvmda:economicZone>` attribute. *When multiple economic zones are included, the dominant economic zone SHALL be included as the first element.*
Certification | This can be found on the certificate with the type `urn:gdst:certType:catch_certificate` on the on the event with the business step `urn:gdst:bizStep:fishingEvent`.

## Fish Presentation Codes

These codes were found in Table 1 from the EU Regulations document found here [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404#ntr4-L_2011112EN.01006601-E0004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404#ntr4-L_2011112EN.01006601-E0004).

3-Alpha product presentation code | Presentation | Description
----------------------------------|--------------|------------
CBF | Cod butterfly (escalado) | HEA with skin on, spine on, tail on
CLA | Claws | Claws only
DWT | ICCAT code | Gilled, gutted, part of head off, fins off
FIL | Filleted | HEA+GUT+TLD+bones off, each fish originates two fillets not joined by any par
FIS | Filleted and skinned fillets | FIL+SKI Each fish originates two fillets not joined by any part
FSB | Filleted with skin and bones | Filleted with skin and bones on
FSP | Filleted skinned with pinbone on | Filleted with skin removed and pinbone on
GHT | Gutted headed and tailed | GUH+TLD
GUG | Gutted and gilled | Guts and gills removed
GUH | Gutted and headed | Guts and head removed
GUL | Gutted liver in | GUT without removing liver parts
GUS | Gutted headed and skinned | GUH+SKI
GUT | Gutted | All guts removed
HEA | Headed | Heads off
JAP | Japanese cut | Transversal cut removing all parts from head to belly
JAT | Tailed Japanese cut | Japanese cut with tail removed
LAP | Lappen | Double fillet, HEA, skin+tails+fins ON
LVR | Liver | Liver only, In case of collective presentation use code LVR-C
OTH | Other | Any other presentation (1)
ROE | Roe (s) | Roe(s) only in case of collective presentation use code ROE-C
SAD | Salted dry | Headed with skin on, spine on, tail on and salted directly
SAL | Salted wet light | CBF+salted
SGH | Salted, gutted and headed | GUH+salted
SGT | Salted gutted | GUT+salted
SKI | Skinned | Skin off
SUR | Surimi | Surimi
TAL | Tail | Tails only
TLD | Tailed | Tail off
TNG | Tongue | Tongue only. In case of collective presentation use code TNG-C
TUB | Tube only | Tube only (Squid)
WHL | Whole | No processing
WNG | Wings | Wings only

## Preservation State Codes

These codes were found in Table 2 from the EU Regulations document found here [https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404#ntr4-L_2011112EN.01006601-E0004](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32011R0404#ntr4-L_2011112EN.01006601-E0004).

CODE | STATE
-----|------
ALI | Alive
BOI | Boiled
DRI | Dried
FRE | Fresh
FRO | Frozen
SAL | salted

