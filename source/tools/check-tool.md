---
title: Check XML
description: This documents a API method that solution providers can use to check an EPCIS XML document for schema validation and GDST CTE/KDE completeness.
---

In order to help developers implementing the CTE/KDE completeness

## Registration
You will need to be registered for the GDST Capability Tool before you get started. In order to register for the GDST Capability Tool, you will need to contact bharris@ift.org for more information.

## Before we get started...
Before we get started make sure that you have registered for the GDST Capability Tool by following the registration steps above. After that you will need:

* the URL to the Capability Tool API
* your API Key for accessing the Capability Tool API
* the exact name of the traceability solution provided during registration
* the version number of the traceability solution you will be accessing

### Variables
During this documentation you will encounter many variables that will be wrapped in curly-braces like so "{CAPABILITY-TOOL-API-URL}". 

Below is a list of these variables and what they mean:

* {CAPABILITY-TOOL-API-URL} - the base url to the capability tool
* {YOUR-SOLUTION-NAME} - the name of your registered solution
* {YOUR-API-KEY} - this is the api key generaed by the capability tool and given to you to access the capability process api, digital link resolver, and epcis query interface of the capability tool.
* {VERSION-OF-YOUR-SOLUTION} - the version of the traceability solution you are testing

## Checking the XML
In order to start the process you will perform the following HTTP Request:

```
HTTP Post 1.1
{CAPABILITY-TOOL-API-URL}/process/check/{YOUR-SOLUTION-NAME}/{VERSION-OF-YOUR-SOLUTION}

Accept          application/json
Content-Type    application/xml
X-API-Key       {YOUR-API-KEY}

<epcis:EPCISDocument xmlns:epcis="urn:epcglobal:epcis:xsd:1"
                     xmlns:cbvmda="urn:epcglobal:cbv:mda" 
                     xmlns:gdst="https://traceability-dialogue.org/epcis" 
                     xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader" 
                     schemaVersion="1.2" 
                     creationDate="2022-01-01T00:00:00.000Z">
    <EPCISHeader>
        <sbdh:StandardBusinessDocumentHeader>    
            <!-- Standard Business Document Header -->
        </sbdh:StandardBusinessDocumentHeader>
        <extension>
            <EPCISMasterData>
                <VocabularyList>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
                        <!-- Trade Items / Product Definitions -->
                    </Vocabulary>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:Location">
                        <!-- Locations -->
                    </Vocabulary>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:Party">
                        <!-- Trading Parties -->
                    </Vocabulary>
                </VocabularyList>
            </EPCISMasterData>
        </extension>
    </EPCISHeader>
    <EPCISBody>
        <EventList>
            <!-- EPCIS Events -->
        </EventList>
    </EPCISBody>
</epcis:EPCISDocument>
```

This HTTP Request will return the following response:

```
Content-Type: text/plain

** Compliance Process Generated Data Errors - CTE/KDE Completeness Check **

    --- Fishing Event

        EVENT ID: 13fbfa98-3df5-49bc-b98b-588b0631363f
            - has no satellite tracking authority specified on the vessel catch information


    --- Landing Event

        EVENT ID: dc90494c-971b-4ba8-9e98-abe5699926c9
            - requires a certificate with type set to 'urn:gdst:certType:humanPolicy'

    --- Receive Event

        EVENT ID: f45a9866-e66f-4dfd-90fe-55035b7cd57b
            - requires a certificate with type set to 'urn:gdst:certType:harvestCoC'

        EVENT ID: 621c73b5-c3f6-499e-b466-b964800cc4f7
            - requires a certificate with type set to 'urn:gdst:certType:harvestCoC'

    --- Farm Harvest Event

        EVENT ID: 7f9490a8-54ea-4f3a-8beb-3928affd9b6c
            - no aquaculture method set
            - requires a certificate with type set to 'urn:gdst:certType:harvestCoC'



** Compliance Process Generated Data Errors - Equality Check

    EVENT ID: 607985c0-93af-4b98-b102-495fcc84d419
        - the disposition values did not match. the source value was "urn:epcglobal:cbv:disp:active" and the target value was "<null>"

    EVENT ID: f45a9866-e66f-4dfd-90fe-55035b7cd57b
        - the disposition values did not match. the source value was "urn:epcglobal:cbv:disp:active" and the target value was "<null>"
        - the source event has a certificate with type urn:gdst:certType:harvestCoC but found no certificate on the target with the same certificate type


    EVENT ID: 13fbfa98-3df5-49bc-b98b-588b0631363f
        - the vessel information - GearType values did not match. the source value was "1" and the target value was "<null>"
        - the vessel information - SatelliteTrackingAuthority values did not match. the source value was "test" and the target value was "<null>"
        - the vessel information - VesselPublicRegistry values did not match. the source value was "test" and the target value was "<null>"

    EVENT ID: 621c73b5-c3f6-499e-b466-b964800cc4f7
        - the disposition values did not match. the source value was "urn:epcglobal:cbv:disp:active" and the target value was "<null>"
        - the source event has a source list item with type urn:epcglobal:cbv:sdt:owning_party and value urn:gdst:example.org:party:Fisherman01.1 that was not found on the target event
        - the source event has a certificate with type urn:gdst:certType:harvestCoC but found no certificate on the target with the same certificate type
        - the source event with event ID 66455272-eb6a-4538-ab36-a27d180dc2ab was not found on the target epcis document
        - the source event with event ID dd824bb5-2aef-4d3a-bc87-91d6c92ecb1a was not found on the target epcis document

    EVENT ID: e5b260a8-4db5-45e3-9ff8-8da095825b62
        - the action values did not match. the source value was "DELETE" and the target value was "ADD"
        - the disposition values did not match. the source value was "" and the target value was "<null>"
        - the kde cbvmda:certificationList is on the source event extension, but not on the target event extension



** Traceability Solution Generated Data Errors - CTE/KDE Completeness Check **

    - none of the product definitions have a product form set, at least one shave have the product form set

    --- Landing Event

        EVENT ID: 42f45aae-6bba-4e94-95f7-c0f27726a46e
            - requires a certificate with type set to 'urn:gdst:certType:humanPolicy'

    --- Processing Event

        EVENT ID: 9553669b-2942-42a2-8c10-400968fd056a
            - has no expiration date set on the ILMD
            - has no country of origin set or the value was invalid

        EVENT ID: 442a7cab-cf87-4269-8a65-8913f9431316
            - has no expiration date set on the ILMD
            - has no country of origin set or the value was invalid

    --- Aggregate Event
            * Failed to find event with type Aggregation, action ADD, and business step urn:epcglobal:cbv:bizstep:packing
```

> If no errors are detected, it will return an empty body.