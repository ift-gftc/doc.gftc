---
title: 5. Data Requirements for Aquaculture
---

This section overviews which data have been identified by the GDST
membership as essential to capture with farmed seafood produced through
aquaculture. These Key Data Elements (KDE) align with others already
defined in the EPCIS structure or are additive. The charts that follow
detail the KDEs in two different manners for implementation, but they
are all derived from the Basic Universal List of KDEs which can be found
in Part 3 (Appendices). This first chart lists all of the KDEs grouped
into different types of data. The right half of the chart indicates at
which Critical Tracking Events (CTE) each KDE must be captured. If a KDE
does not have an ‘X’ under a particular CTE, then it does not make sense
or it is not necessary for that KDE to be captured.

In aquaculture processes, lifecycle stages are represented as
transformation events in EPCIS. Therefore, to account for traceability
of feed in aquaculture, these are not separate CTEs, but are summary
inputs into the transformation inputs. For internal documentation,
feeding timings by feedmeal lot may be necessary, but for traceability
purposes, summarizing feedmeal application by batch/lot as inputs in the
same transformation CTE is sufficient.

<table>
<thead>
<tr class="header">
<th><strong>Aquaculture KDEs</strong></th>
<th><strong>CTE</strong></th>
<th></th>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td></td>
<td><p><strong>Feedmill</strong></p>
<p><strong>(Transform)</strong></p></td>
<td><p><strong>Hatchery</strong></p>
<p><strong>(Hatch)</strong></p></td>
<td><p><strong>Farm</strong></p>
<p><strong>(Harvest)</strong></p></td>
<td><p><strong>Processor</strong></p>
<p><strong>(Process/Pack)</strong></p></td>
<td><strong>Pack/Unpack</strong></td>
<td><strong>Ship/Receive</strong></td>
</tr>
<tr class="even">
<td><strong>LOCATION MASTER DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Organization</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Location name</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Location ID</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Location Address or Geo-Coordinates</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Location Country</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td><strong>CERTIFICATIONS</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Processor License</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Certification</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Certification Chain of Custody</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Aggregator Name</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Aggregator ID/License</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>TRACEABLE OBJECT INFORMATION</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Species</td>
<td></td>
<td>X</td>
<td>X</td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Item / SKU / UPC / GTIN</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Linking KDE (batch, lot, serial number)</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Weight / Quantity</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Units of Measure</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td><strong>TECHNICAL</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Event ID</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Event Date, Time &amp; Time Zone</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Event Read Point (Geo Location)</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td>Product Ownership</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="odd">
<td>Information Provider</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
<td>X</td>
</tr>
<tr class="even">
<td><strong>FEED DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Feed Type</td>
<td>X</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Source of protein</td>
<td>X</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>HATCHERY DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Harvest date per tank</td>
<td></td>
<td>X</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Source of broodstock</td>
<td></td>
<td>X</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td><strong>FARM DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Farming method</td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Date of Harvest</td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td><strong>PROCESSOR DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Product Form</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Production date</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Product Country of Origin</td>
<td></td>
<td></td>
<td></td>
<td>X</td>
<td></td>
<td></td>
</tr>
</tbody>
</table>

The following tables provide verbal definitions of the KDEs to give
business meaning to each. Additionally, a cross reference between GDST
Wild Caught Key Data Elements and GS1 Core Business Vocabulary\[27\]
attributes is listed to inform proper data formatting. These components
are also listed in the Basic Universal List in the appendix.

<table>
<thead>
<tr class="header">
<th><strong>LOCATION MASTER DATA</strong></th>
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
<td>Organization</td>
<td>ID and Text</td>
<td>Legal entity that owns mill, hatchery, farm or processor</td>
<td><p>Party Name and ID</p>
<p>GS1 PGLN, URL or UUID</p></td>
<td></td>
</tr>
<tr class="odd">
<td>Location Name</td>
<td>Text</td>
<td>Name of physical location of interest</td>
<td>Location Name</td>
<td></td>
</tr>
<tr class="even">
<td>Location ID</td>
<td>ID</td>
<td>ID of physical location of interest</td>
<td><p>Location ID</p>
<p>GS1 GLN, URL or UUID</p></td>
<td></td>
</tr>
<tr class="odd">
<td>Location Address or Geo-Coordinates</td>
<td>Mixed</td>
<td>Address or Geo Coordinates of location</td>
<td><p>streetAddressOne</p>
<p>streetAddressTwo</p>
<p>city, state, postalCode</p>
<p>latitude, longitude</p></td>
<td></td>
</tr>
<tr class="even">
<td>Location Country</td>
<td>Code</td>
<td>Country code for location</td>
<td>countryCode</td>
<td></td>
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
<td>Processor License</td>
<td>Mixed</td>
<td></td>
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
<td>Code of Good Practice</td>
<td>Text</td>
<td>Name of best practice/standard certification currently valid for any or all parts of the supply chain covering hatchery, feed and/or farm</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Aggregator Name</td>
<td>Text</td>
<td>The name of the company or person collecting harvest from multiple farms in order to distribute to an entity down the supply chain</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Aggregator ID/License</td>
<td>Text</td>
<td>Unique indicator generated by the authorities in the country of operation that gives the aggregator the license to operate.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td></td>
<td></td>
<td></td>
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
<p>UUIDEPC or EPC Class</p>
<p>geofencePolygon</p>
<p><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS_for_Rail_MRO.pdf#page=25">GS1 Example</a></p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS-Standard-1.2-r-2016-09-29.pdf#page=32">EPCIS What Dimension</a></td>
</tr>
<tr class="even">
<td>Linking KDE (batch, lot or serial number)</td>
<td>Lot or Serial #</td>
<td>Identifier associated with physical product marking a particular instance of seafood material such as a batch/lot number, serial number, or container number.</td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Weight or Quantity</td>
<td>Number</td>
<td>Numerically quantifiable amount of seafood with a standard Unit of Measure.</td>
<td></td>
<td></td>
</tr>
<tr class="even">
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
<th><strong>FEED DATA</strong></th>
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
<td>Feed Ingredients</td>
<td><p>ID</p>
<p>+</p>
<p>Text</p></td>
<td>All ingredients in the feeds.</td>
<td><p>inputEPCList or</p>
<p>inputQuantityList</p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS-Standard-1.2-r-2016-09-29.pdf#page=55">EPCIS Transformation Event</a></td>
</tr>
<tr class="odd">
<td>Feed Type</td>
<td>Text</td>
<td>Type of feeds used at each growth stage. Natural, processed, live, GMO, other.</td>
<td>feedType</td>
<td>GDST Extension</td>
</tr>
<tr class="even">
<td>Source of Protein</td>
<td>Text</td>
<td><p>- Wild caught fish (straight)</p>
<p>- Wild caught fish byproduct</p>
<p>- Insects</p>
<p>- Soy</p>
<p>- Other</p></td>
<td>proteinSource</td>
<td>GDST Extension</td>
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
<td><strong>HATCHERY DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Harvest date per tank</td>
<td>Date</td>
<td>Date on which fingerlings were transferred to the grow out farm/pond</td>
<td><p>harvestStartDate</p>
<p>+</p>
<p>harvestEndDate</p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=6">CBV Information</a></td>
</tr>
<tr class="odd">
<td>Source of broodstock</td>
<td>Text</td>
<td><p>Broodstock from grow-out farms or taken from the wild.</p>
<p>`Domestic` or `Wild Sources`</p></td>
<td>broodstockSource</td>
<td>GDST Extension</td>
</tr>
<tr class="even">
<td><strong>FARM DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="odd">
<td>Farming Method</td>
<td>Code</td>
<td>A combination of type of culture, unit, level of intensity, culture species and scale or size of exploitation as defined by the FAO. `Extensive`, `Semi-Intensive`, `Intensive`</td>
<td>aquacultureMethod</td>
<td><p>GDST Extension</p>
<p><a href="http://www.fao.org/docrep/t8598e/t8598e05.htm">http://www.fao.org/docrep/t8598e/t8598e05.htm</a></p></td>
</tr>
<tr class="even">
<td>Date of Harvest</td>
<td>Date</td>
<td>Calendar date on which the seafood was harvested from the farm/cultivation area</td>
<td><p>harvestStartDate</p>
<p>+</p>
<p>harvestEndDate</p></td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/CBVCN_18-000108_AdditionOfFishAttributes.pdf#page=6">CBV Information</a></td>
</tr>
<tr class="odd">
<td><strong>PROCESSOR DATA</strong></td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="even">
<td>Product Form</td>
<td>Code</td>
<td>Commercial short-hand reference of the degree of transformation of seafood from its original living form.</td>
<td>tradeItemConditionCode</td>
<td><a href="http://apps.gs1.org/GDD/Pages/clDetails.aspx?semanticURN=urn:gs1:gdd:cl:TradeItemConditionCode&amp;release=2">GS1 Code List</a></td>
</tr>
<tr class="odd">
<td>Production Date</td>
<td>Date</td>
<td>Calendar date of last point of processing or packaging.</td>
<td>eventTime of TransformationEvent</td>
<td><a href="https://www.gs1.org/sites/default/files/docs/epc/EPCIS-Standard-1.2-r-2016-09-29.pdf#page=55">EPCIS Transformation Event</a></td>
</tr>
<tr class="even">
<td><p>Product</p>
<p>Country of Origin</p></td>
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