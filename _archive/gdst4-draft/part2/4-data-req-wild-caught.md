---
title: 4. Data Requirements for Wild Caught Seafood
---

This section overviews which data have been identified by the GDST
membership as essential to capture with wild-caught seafood to address
the business cases enumerated in section 1. These Key Data Elements
(KDE) align with others already defined in the EPCIS structure are
additive. The charts that follow detail the KDEs in two different
manners for implementation, but they are all derived from the Basic
Universal List of KDEs which can be found in Part 3 (Appendices). This
first chart lists all of the KDEs grouped into different types of data.
The right half of the chart indicates at which Critical Tracking Events
(CTE) each KDE must be captured. If a KDE does not have an ‘X’ under a
particular CTE, then it does not make sense, or it is not necessary for
that KDE to be captured.

| **Wild Caught KDEs**                              |           | **CTE**                  |                   |             |                 |                  |                |
| ------------------------------------------------- | --------- | ------------------------ | ----------------- | ----------- | --------------- | ---------------- | -------------- |
|                                                   | **Catch** | **On Vessel Processing** | **Transshipment** | **Landing** | **Pack/Unpack** | **Ship/Receive** | **Processing** |
| **VESSEL MASTER DATA**                            |           |                          |                   |             |                 |                  |                |
| Vessel Name                                       | X         | X                        |                   |             |                 |                  |                |
| Vessel Registration                               | X         | X                        |                   |             |                 |                  |                |
| Unique Vessel Identification                      | X         | X                        |                   |             |                 |                  |                |
| Public Vessel Registry Hyperlink                  | X         | X                        |                   |             |                 |                  |                |
| Vessel Flag                                       | X         | X                        |                   |             |                 |                  |                |
| Transshipment Vessel Name                         |           |                          | X                 |             |                 |                  |                |
| Transshipment Vessel Unique Vessel Identification |           |                          | X                 |             |                 |                  |                |
| Transshipment Vessel Flag                         |           |                          | X                 |             |                 |                  |                |
| Transshipment Vessel Registration                 |           |                          | X                 |             |                 |                  |                |
| **CERTIFICATIONS**                                |           |                          |                   |             |                 |                  |                |
| Fishing Authorization                             | X         |                          |                   |             |                 |                  |                |
| Harvest Certification                             | X         |                          |                   |             |                 |                  |                |
| Harvest Certification Chain of Custody            |           | X                        | X                 |             | X               | X                | X              |
| Transshipment Authorization                       |           |                          | X                 |             |                 |                  |                |
| Landing Authorization                             |           |                          |                   | X           |                 |                  |                |
| **TRACEABLE OBJECT INFORMATION**                  |           |                          |                   |             |                 |                  |                |
| Species                                           | X         | X                        | X                 | X           | X               | X                | X              |
| Product Form                                      | X         | X                        | X                 | X           | X               | X                | X              |
| Item / SKU / UPC / GTIN                           | X         | X                        | X                 | X           | X               | X                | X              |
| Linking KDE (batch, lot or serial number)         | X         | X                        | X                 | X           | X               | X                | X              |
| Weight or Quantity                                | X         | X                        | X                 | X           | X               | X                | X              |
| Unit of Measure                                   | X         | X                        | X                 | X           | X               | X                | X              |
| **TECHNICAL**                                     |           |                          |                   |             |                 |                  |                |
| Event ID                                          | X         | X                        | X                 | X           | X               | X                | X              |
| Event Date, Time & Time Zone                      | X         | X                        | X                 | X           | X               | X                | X              |
| Event Read Point (Geo Location)                   | X         | X                        | X                 | X           | X               | X                | X              |
| Product Ownership                                 | X         | X                        | X                 | X           | X               | X                | X              |
| Information Provider                              | X         | X                        | X                 | X           | X               | X                | X              |
| **CATCH DATA**                                    |           |                          |                   |             |                 |                  |                |
| Catch Area                                        | X         |                          |                   |             |                 |                  |                |
| Fishery Improvement Project                       | X         |                          |                   |             |                 |                  |                |
| Vessel Trip Dates                                 | X         |                          |                   |             |                 |                  |                |
| Date(s) of Capture                                | X         |                          |                   |             |                 |                  |                |
| Gear Type                                         | X         |                          |                   |             |                 |                  |                |
| Production Method                                 | X         |                          |                   |             |                 |                  |                |
| **TRANSSHIPMENT DATA**                            |           |                          |                   |             |                 |                  |                |
| Transshipment Location                            |           |                          | X                 |             |                 |                  |                |
| Dates of Transshipment                            |           |                          | X                 |             |                 |                  |                |
| **LANDING DATA**                                  |           |                          |                   |             |                 |                  |                |
| Landing Location                                  |           |                          |                   | X           |                 |                  |                |
| Dates of Landing                                  |           |                          |                   | X           |                 |                  |                |
| **PROCESSING DATA**                               |           |                          |                   |             |                 |                  |                |
| Expiry / Production date                          |           | X                        |                   |             |                 |                  | X              |
| Product Origin                                    |           | X                        |                   |             |                 |                  | X              |

## 

The following tables provide verbal definitions of the KDEs to give
business meaning to each. Additionally, a cross reference between GDST
Wild Caught Key Data Elements and GS1 Core Business Vocabulary\[26\]
attributes is listed to inform proper data formatting. These components
are also listed in the Basic Universal List in the appendix.

<table>
<thead>
<tr class="header">
<th><strong>VESSEL MASTER DATA</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Definition</strong></td>
<td><strong>GS1 CBV Attribute</strong></td>
<td><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></td>
</tr>
<tr class="even">
<td>Vessel Name</td>
<td>Text</td>
<td>Verbal moniker of a fishing vessel for identifying it visually and on vessel registries.</td>
<td>vesselName</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Seafood Attributes</a></td>
</tr>
<tr class="odd">
<td>Vessel Registration</td>
<td>Text</td>
<td>Standardized number or identifier for distinguishing vessels registered under the same flag nation.</td>
<td>vesselID</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Seafood Attributes</a></td>
</tr>
<tr class="even">
<td>Unique Vessel Identification</td>
<td>Number</td>
<td>Identifier associated with a vessel for the duration of its existence that cannot be re-used by any other vessel with a permanent physical marking on the craft.</td>
<td>imoNumber</td>
<td><p>GDST Extension</p>
<p><a href="http://www.imo.org/en/ourwork/msas/pages/imo-identification-number-scheme.aspx">International Maritime Organization</a></p></td>
</tr>
<tr class="odd">
<td>Public Vessel Registry Hyperlink</td>
<td>URL</td>
<td>Website address where the public registry containing the listing of the fishing vessel.</td>
<td>vesselPublicRegistry</td>
<td>GDST Extension</td>
</tr>
<tr class="even">
<td>Vessel Flag</td>
<td>Code</td>
<td>Nation with supervision over safety, fishing operations, and catch reporting.</td>
<td>vesselFlagState</td>
<td><a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a></td>
</tr>
<tr class="odd">
<td>Transshipment Vessel Name</td>
<td>Text</td>
<td>Verbal moniker of a transshipment vessel for identifying it visually and on vessel registries.</td>
<td>vesselName</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Seafood Attributes</a></td>
</tr>
<tr class="even">
<td>Transshipment Vessel Unique Vessel Identification</td>
<td>Number</td>
<td>Identifier associated with a vessel for the duration of its existence that cannot be re-used by any other vessel with a permanent physical marking on the craft.</td>
<td>imoNumber</td>
<td><p>GDST Extension</p>
<p><a href="http://www.imo.org/en/ourwork/msas/pages/imo-identification-number-scheme.aspx">International Maritime Organization</a></p></td>
</tr>
<tr class="odd">
<td>Transshipment Vessel Flag</td>
<td>Code</td>
<td>Nation with supervision over safety, transshipment operations, and catch transfer reporting.</td>
<td>vesselFlagState</td>
<td><a href="https://www.iso.org/iso-3166-country-codes.html">ISO 3166</a></td>
</tr>
<tr class="even">
<td>Transshipment Vessel Registration</td>
<td>Text</td>
<td>Standardized number or identifier for distinguishing vessels registered under the same flag nation.</td>
<td>vesselID</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Seafood Attributes</a></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>CERTIFICATIONS</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Definition</strong></td>
<td><strong>GS1 CBV Attribute</strong></td>
<td><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></td>
</tr>
<tr class="even">
<td>Fishing Authorization</td>
<td>Mixed</td>
<td>Unique number associated with a regulatory document, from the relevant authority, granting permission for wild-capture of seafood by a fisher or fishing vessel.</td>
<td><p>cbvmda:certificationList</p>
<p>certification</p>
<p>certificationStandard</p>
<p>certificationAgency</p>
<p>certificationValue</p>
<p>certificationIdentification</p>
<p>/certification</p>
<p>/cbvmda:certificationList</p>
<p>Or <a href="https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf#page=28">bizTransactionList</a></p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=10">CBV Seafood Attributes</a></td>
</tr>
<tr class="odd">
<td>Harvest Certification</td>
<td>Mixed</td>
<td>Name of harvest standards body which a particular harvest seafood is subject to and the unique identifier associated with the certified entity.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Harvest Certification Chain of Custody</td>
<td>Mixed</td>
<td>Name of chain of custody standards body which particular harvest seafood is subject to and the unique identifier associated with the certified entity.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Transshipment Authorization</td>
<td>Mixed</td>
<td>Unique number associated with a regulatory document, from the relevant authority, granting permission for discharge of wild-capture of seafood from a fishing vessel to a transshipment vessel.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Landing Authorization</td>
<td>Mixed</td>
<td>Unique number associated with a regulatory document, from the relevant authority, granting permission for discharge of wild-capture of seafood to land by a fisher, fishing vessel or transshipment vessel.</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>TRACEABLE OBJECT INFORMATION</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Definition</strong></td>
<td><strong>GS1 CBV Attribute</strong></td>
<td><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></td>
</tr>
<tr class="even">
<td>Species</td>
<td>Code</td>
<td>Scientific (latin) name of the seafood.</td>
<td>speciesForFisheryStatisticsPurposesCode</td>
<td><a href="http://www.fao.org/fishery/collection/asfis/en">FAO Species Code</a></td>
</tr>
<tr class="odd">
<td>Product Form</td>
<td>Code</td>
<td>Commercial short-hand reference of the degree of transformation of seafood from its original living form.</td>
<td>tradeItemConditionCode</td>
<td><a href="http://apps.gs1.org/GDD/Pages/clDetails.aspx?semanticURN=urn:gs1:gdd:cl:TradeItemConditionCode&amp;release=2">GS1 Code List</a></td>
</tr>
<tr class="even">
<td>Item / SKU / UPC / GTIN</td>
<td>ID</td>
<td>Identifier of seafood material to distinguish it within a particular facility, company, or globally.</td>
<td><p><strong>Catch, Ship, Receive, Landing (Object):</strong></p>
<p>epcList quantityList</p>
<p>EPCClass, Qty, UOM</p>
<p><strong>Process (Transform):</strong></p>
<p>inputEpcList, inputQuantityList</p>
<p>outputEpcList</p>
<p>outputQuantityList</p>
<p><strong>Pack/Unpack (Aggregation):</strong></p>
<p>parentID</p>
<p>epcList or quantityList</p>
<p><strong>ID Options:</strong></p>
<p>GS1 LGTIN</p>
<p>GS1 SGTIN</p>
<p>GS1 SSCC</p>
<p>URL</p>
<p>UUID</p>
<p>geofencePolygon</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS_for_Rail_MRO.pdf#page=25">GS1 Example</a></p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS-Standard-1.2-r-2016-09-29.pdf#page=32">EPCIS What Dimension</a></td>
</tr>
<tr class="odd">
<td>Linking KDE (batch, lot or serial number)</td>
<td>Lot or Serial #</td>
<td>Identifier associated with physical product marking a particular instance of seafood material such as a batch/lot number, serial number, or container number.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Weight or Quantity</td>
<td>Number</td>
<td>Numerically quantifiable amount of seafood with a standard Unit of Measure.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Unit of Measure</td>
<td>Code</td>
<td>Standard for measurement of the product</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>TECHNICAL DATA</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Definition</strong></td>
<td><strong>GS1 CBV Attribute</strong></td>
<td><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></td>
</tr>
<tr class="even">
<td>Event ID</td>
<td>UUID</td>
<td>An identifier for this event as specified by the capturing application, globally unique across all events. The Core Business Vocabulary standard [CBV1.2] specifies the use of a UUID URI for this purpose.</td>
<td>eventID</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf#page=45">UUID for Event IDs</a></td>
</tr>
<tr class="odd">
<td>Event Date, Time &amp; Time Zone</td>
<td><p>Date</p>
<p>Time</p>
<p>Zone</p></td>
<td>The date and time at which the EPCIS Capturing Applications asserts the event occurred. The time zone offset in effect at the time and place the event occurred, expressed as an offset from UTC.</td>
<td><p>eventTime</p>
<p>eventTimeZoneOffset</p></td>
<td><a href="https://en.wikipedia.org/wiki/ISO_8601#Coordinated_Universal_Time_(UTC)">ISO-8601 Timestamp</a></td>
</tr>
<tr class="even">
<td><p>Event Read Point</p>
<p>(Geo Location)</p></td>
<td>Location</td>
<td>The geographic or business location at which the event took place.</td>
<td><p>readPoint</p>
<p>`geo: {lat}, {lon}` or GLN</p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf#page=37">Location CBV Info</a></td>
</tr>
<tr class="odd">
<td>Product Ownership</td>
<td>Party</td>
<td><p>The party who owns the object.</p>
<p>For chain of custody during ownership transfer, capture source and destination owning parties.</p></td>
<td><p>productOwner</p>
<p><strong>Ship/Receive Events:</strong></p>
<p>sourceList, destinationList</p>
<p>owning_party</p>
<p>IDs: pgln, urn or url</p></td>
<td><p>GDST Extension</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/CBV-Standard-1-2-2-r-2017-10-12.pdf#page=29">Source, Destination Documentation</a></p></td>
</tr>
<tr class="even">
<td>Information Provider</td>
<td>Party</td>
<td>The original party who provided the event information. This is important as the event may be re-shared downstream.</td>
<td>informationProvider</td>
<td><a href="http://apps.gs1.org/GDD/bms/Version2_8/Pages/bieDetails.aspx?semanticURN=urn:gs1:gdd:bie:InformationProvider.informationProvider.PartyIdentification">Data Dictionary</a></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>CATCH DATA</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>Name</strong></td>
<td><strong>Type</strong></td>
<td><strong>Definition</strong></td>
<td><strong>GS1 CBV Attribute</strong></td>
<td><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></td>
</tr>
<tr class="even">
<td>Catch Area</td>
<td>Code</td>
<td>Location(s) where capture of seafood occurred.</td>
<td>catchArea (repeating)</td>
<td><a href="http://www.fao.org/cwp-on-fishery-statistics/handbook/general-concepts/fishing-areas-for-statistical-purposes/en/">FAO Catch Area</a></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td>economicZone (repeating)</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=8">EEZ</a></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td>rfmoArea</td>
<td><p>GDST Extension</p>
<p><a href="http://www.fao.org/fishery/rfb/search/en">FAO Fisheries</a></p></td>
</tr>
<tr class="odd">
<td>Fishery Improvement Project</td>
<td>Text</td>
<td>Publicly-listed name of fishery improvement project which the harvest event is subject to.</td>
<td>fisheryImprovementProject</td>
<td><p>GDST Extension</p>
<p><a href="https://fisheryprogress.org/">Fishery Progress</a></p></td>
</tr>
<tr class="even">
<td>Vessel Trip Dates</td>
<td>Date</td>
<td>Calendar start and end dates of a fishing vessel's voyage between the last point the fishing hold was empty and seafood is discharged.</td>
<td><p>harvestStartDate</p>
<p>+</p>
<p>harvestEndDate</p></td>
<td><p>YYYY-MM-DD</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=6">CBV Info</a></p></td>
</tr>
<tr class="odd">
<td>Date(s) of Capture</td>
<td>Date</td>
<td>Calendar date(s) when seafood was extracted for capture, irrespective of the fishing vessel's voyage at sea.</td>
<td><p>harvestStartDate</p>
<p>+</p>
<p>harvestEndDate</p></td>
<td><p>YYYY-MM-DD</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=6">CBV Info</a></p></td>
</tr>
<tr class="even">
<td>Gear Type</td>
<td>Code</td>
<td>Equipment used to extract seafood from water for capture.</td>
<td>fishingGearTypeCode</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Info</a></td>
</tr>
<tr class="odd">
<td>Production Method</td>
<td>Code</td>
<td>Categorization, on the spectrum of wild-capture to captive-culture, of the general seafood harvest method.</td>
<td>productionMethodForFishAndSeafoodCode</td>
<td><a href="http://apps.gs1.org/GDD/Pages/clDetails.aspx?semanticURN=urn:gs1:gdd:cl:ProductionMethodForFishAndSeafoodCode&amp;release=1">GDD Code List</a></td>
</tr>
</tbody>
</table>

<table>
<thead>
<tr class="header">
<th><strong>Name</strong></th>
<th><strong>Type</strong></th>
<th><strong>Definition</strong></th>
<th><strong>GS1 CBV Attribute</strong></th>
<th><p><strong>Link for</strong></p>
<p><strong>More Info</strong></p></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><strong>TRANSSHIPMENT DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Transshipment Location</td>
<td>Location</td>
<td>Geographic rendezvous where seafood is discharged from a fishing vessel to a transshipment vessel.</td>
<td>In-Port: unloadingPort</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Info</a></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td>At-Sea: Geo Coordinates</td>
<td><a href="https://www.gs1.org/docs/epc/EPCIS_Guideline.pdf#page=36">CBV Info</a></td>
</tr>
<tr class="even">
<td>Dates of Transshipment</td>
<td>Date</td>
<td>Calendar start and end dates of a rendezvous to discharge seafood from a fishing vessel to transshipment vessel.</td>
<td><p>transshipStartDate</p>
<p>+</p>
<p>transshipEndDate</p></td>
<td><p>YYYY-MM-DD</p>
<p>GDST Extension</p></td>
</tr>
<tr class="odd">
<td><strong>LANDING DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Landing Location</td>
<td>Location</td>
<td>Where seafood was first discharged to land.</td>
<td>In-port: unloadingPort</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=7">CBV Info</a></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
<td>Non-port: Geo Coordinates</td>
<td><a href="https://www.gs1.org/docs/epc/EPCIS_Guideline.pdf#page=36">CBV Info</a></td>
</tr>
<tr class="even">
<td>Dates of Landing</td>
<td>Date</td>
<td>Calendar start and end dates when seafood is discharged to a landing location.</td>
<td><p>landingStartDate</p>
<p>+</p>
<p>landingEndDate</p></td>
<td><p>YYYY-MM-DD</p>
<p>GDST Extension</p></td>
</tr>
<tr class="odd">
<td><strong>PROCESSING DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><p>Expiry /</p>
<p>Production date</p></td>
<td>Date</td>
<td>Calendar date associated with a particular instance of a product seafood indicating the key date in its life cycle.</td>
<td>itemExpirationDate</td>
<td><p>YYYY-MM-DD</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=6">CBV Info</a></p></td>
</tr>
<tr class="odd">
<td>Product Origin</td>
<td>Code</td>
<td>Country where seafood underwent the last substantial transformation.</td>
<td><p>countryOfOrigin</p>
<p>(repeating)</p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=3">CBV Info</a></td>
</tr>
</tbody>
</table>

Capturing and sharing data with common semantic and syntactical
formatting is fundamental to interoperable data sharing. It also is the
start of achieving the data quality aspirations which business users
ultimately want from the outputs of the Global Dialogue on Seafood
Traceability. Another data quality aspiration is the trustworthiness of
the data. For this, Authoritative Data Sources have been identified for
each KDE which indicate the authoritative origin of each data point. The
Authoritative Data Sources can be found in the Basic Universal List
included in the Appendix.
