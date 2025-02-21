---
title: Full Chain Test
description: This is documentation that covers how to use the capability tool for full-chain capability.
---

# Registration
Please reach out to info@traceability-dialogue.org to register.

# Capability Process
The capability process is an automated process that can be executed by a solution provider to determine if a specific version of a traceability solution is GDST Capable.

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
* {CAPABILITY-TOOL-API-KEY} - this is the api key that the capability tool will use to access your digital link resolver and epcis query interface.
* {VERSION-OF-YOUR-SOLUTION} - the version of the traceability solution you are testing
* {CAPABILITY-TOOL-GENERATED-EPC} - one or more epcs for product instances generated by the capability tool
* {SOLUTION-PROVIDER-GENERATED-EPC} - one or more epcs for product instances generated by the solution provider
* {CAPABILITY-PROCESS-UUID} - the UUID of the capability process generated and returned to you when you start the capability process
* {SOLUTION-PROVIDER-URL} - This is the GS1 Resolver URL provided to the Capability Tool by the solution provider.
* {SOLUTION-PROVIDER-EPCIS-URL} - This is the EPCIS Query Interface URL returned from the Solution Provider's GS1 Resolver.

## Step 1: Starting the Process
In order to start the process you will perform the following HTTP Request:

```
HTTP Post 1.1
{CAPABILITY-TOOL-API-URL}/process/start

Accept          application/json
Content-Type    application/json
X-API-Key       {YOUR-API-KEY}

{
    "SolutionName" : "{YOUR-SOLUTION-NAME}",
    "Version" : "{VERSION-OF-YOUR-SOLUTION}"
}
```

This HTTP Request will return the following response:

```
Content-Type    application/json
{
    "SolutionName" : "{YOUR-SOLUTION-NAME}",
    "Version" : "{VERSION-OF-YOUR-SOLUTION}",
    "EPCs" : [
        "{CAPABILITY-TOOL-GENERATED-EPC}"
    ],
    "UUID" : "{CAPABILITY-PROCESS-UUID}"
}
```

## Step 2: Querying for Traceability Data from the Capability Tool
This step will require you to take the {CAPABILITY-TOOL-GENERATED-EPC} and use it to query the traceability data associated with this EPC from the Capability Tool using the communication protocol in the GDST Technical Standard v1.1

A summary of these steps will include:
* Querying the Digital Link Resolver of the Capability Tool to obtain the EPCIS URL
* Querying the EPCIS Query Interface for all events associated with the EPC
* Performing a trace-back by scanning all inputs of any events returned, and querying the EPCIS Query Interface for events associated with those inputs. This step may need to be performed until no more unknown inputs are found.

### Querying the Digital Link Resolver of the Capability Tool to Obtain the EPCIS URL
In order to perform this step you will need to execute the following HTTP Request:

```
HTTP GET 1.1
{CAPABILITY-TOOL-API-URL}/digitallink/sscc/{CAPABILITY-TOOL-GENERATED-EPC}?linkType=gs1:epcis

Accept                      application/json
X-API-Key                   {YOUR-API-KEY}
X-Capability-Process-UUID   {CAPABILITY-PROCESS-UUID}
```

This HTTP Request will return the following response:

```
[
    {
        "linkType" : "gs1:epcis",
        "link" : "{CAPABILITY-TOOL-API-URL}/epcis",
        "authRequired" : true,
    }
]
```

### Querying the the EPCIS Query Interface for all events associated with the EPC
In order to perform this step, you will need to execute the following HTTP Request:

```
HTTP POST 1.1
{CAPABILITY-TOOL-API-URL}/epcis/queries/SimpleEventQuery

Accept                      application/xml
X-API-Key                   {YOUR-API-KEY}
X-Capability-Process-UUID   {CAPABILITY-PROCESS-UUID}

{
    "type" : "events",
    "query" : {
        "MATCH_anyEPC" : [ 
            "{CAPABILITY-TOOL-GENERATED-EPC}"
        ]
    }
}
```
*HTTP Response*
```
Content-Type	        application/xml
GS1-EPCIS-Version	    1.2
GS1-EPCIS-Min	        1.2
GS1-EPCIS-Max	        1.2
GS1-CBV-Version	        1.2
GS1-EPC-Version	        ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

<epcisq:EPCISQueryDocument 
                     xmlns:epcis="urn:epcglobal:epcis:xsd:1"
                     xmlns:cbvmda="urn:epcglobal:cbv:mda"
                     xmlns:gdst="https://traceability-dialogue.org/epcis"
                     xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader"
                     xmlns:epcisq="urn:epcglobal:epcis-query:xsd:1" 
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
        <epcisq:QueryResults>
            <queryName>SimpleEventQuery</queryName>
            <resultsBody>
                <EventList>
                    <!-- Events Here -->
                </EventList>
            </resultsBody>
        </epcisq:QueryResults>
    </EPCISBody>
</epcisq:EPCISQueryDocument>
```

> You will also need to perform a trace-back. This is covered in our Communication Protocol / Trace-back article.

## Step 3: Moving the Capability Process to the next stage.
Step 3 involves you moving the capability process to the next stage, which tells the Capability Tool that you have pulled across the traceability data from step 2, and have saved it into your system. 

```
HTTP Post 1.1
{CAPABILITY-TOOL-API-URL}/process/next

Accept                      application/json
Content-Type                application/json
X-API-Key                   {YOUR-API-KEY}
X-Capability-Process-UUID   {CAPABILITY-PROCESS-UUID}

{
    "SolutionName" : "{YOUR-SOLUTION-NAME}",
    "Version" : "{VERSION-OF-YOUR-SOLUTION}"
    "EPCs" : ["{SOLUTION-PROVIDER-GENERATED-EPC}"]
}
```

There will be no body in the response.

> For the this call you need to make sure to include the ***X-Capability-Process-UUID*** header in the request call including the UUID for the capability process you started.

## Step 4: Capability Tool requests it's data back from you
At this point the Capability Tool is going to use the same communication protocols from step 2 to request the same data back from you. However, there is a minor difference here. This step will use the Internal System-to-System communication protocols to pull the data.

> NOTE: This step will use the GE_recordTime and LE_recordTime.

> NOTE: this step will not provide an EPC when querying for the EPCIS Query Interface URL from the GS1 Digital Link Resolver.

### Querying the Digital Link Resolver of the Capability Tool to Obtain the EPCIS URL
In order to perform this step the capability tool will execute the following HTTP Request:

```
HTTP GET 1.1
{SOLUTION-PROVIDER-URL}?linkType=gs1:epcis

Accept          application/json
X-API-Key       {CAPABILITY-TOOL-API-KEY}
```

This HTTP Request will return the following response:

```
[
    {
        "linkType" : "gs1:epcis",
        "link" : "{SOLUTION-PROVIDER-EPCIS-URL}",
        "authRequired" : true,
    }
]
```

> NOTE: This example assumes that the 

### Querying the the EPCIS Query Interface for all events associated with the EPC
In order to perform this step, the capability tool will execute the following HTTP Request:

```
HTTP POST 1.1
{SOLUTION-PROVIDER-EPCIS-URL}/queries/SimpleEventQuery

Accept          application/xml
X-API-Key       {CAPABILITY-TOOL-API-KEY}

{
    "type" : "events",
    "query" : {
        "GE_recordTime" : {START-OF-CAPABILITY-PROCESS},
        "LE_recordTime" : {CURRENT-UTC-DATETIME}
    }
}
```
*HTTP Response*
```
Content-Type	        application/xml
GS1-EPCIS-Version	    1.2
GS1-EPCIS-Min	        1.2
GS1-EPCIS-Max	        1.2
GS1-CBV-Version	        1.2
GS1-EPC-Version	        ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

<epcisq:EPCISQueryDocument 
                     xmlns:epcis="urn:epcglobal:epcis:xsd:1"
                     xmlns:cbvmda="urn:epcglobal:cbv:mda"
                     xmlns:gdst="https://traceability-dialogue.org/epcis"
                     xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader"
                     xmlns:epcisq="urn:epcglobal:epcis-query:xsd:1" 
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
        <epcisq:QueryResults>
            <queryName>SimpleEventQuery</queryName>
            <resultsBody>
                <EventList>
                    <!-- Events Here -->
                </EventList>
            </resultsBody>
        </epcisq:QueryResults>
    </EPCISBody>
</epcisq:EPCISQueryDocument>
```

> No trace-back is required here.

## Step 5: Capability tool requests traceability data for the solution provider generated data
During step 3, you provided one or more EPCs to the Capability Tool. This step will repeat what is in step 4, except starting with the {SOLUTION-PROVIDER-GENERATED-EPC}

At this point the Capability Tool is going to use the same communication protocols from step 2 to request the same data back from you.

### Querying the Digital Link Resolver of the Capability Tool to Obtain the EPCIS URL
In order to perform this step the capability tool will execute the following HTTP Request:

```
HTTP GET 1.1
{SOLUTION-PROVIDER-URL}/sscc/{CAPABILITY-TOOL-GENERATED-EPC}?linkType=gs1:epcis

Accept          application/json
X-API-Key       {CAPABILITY-TOOL-API-KEY}
```

This HTTP Request will return the following response:

```
[
    {
        "linkType" : "gs1:epcis",
        "link" : "{SOLUTION-PROVIDER-EPCIS-URL}",
        "authRequired" : true,
    }
]
```

### Querying the the EPCIS Query Interface for all events associated with the EPC
In order to perform this step, the capability tool will execute the following HTTP Request:

```
HTTP POST 1.1
{SOLUTION-PROVIDER-EPCIS-URL}/queries/SimpleEventQuery

Accept          application/xml
X-API-Key       {CAPABILITY-TOOL-API-KEY}

{
    "type" : "events",
    "query" : {
        "MATCH_anyEPC" : [ 
            "{SOLUTION-PROVIDER-GENERATED-EPC}"
        ]
    }
}
```
*HTTP Response*
```
Content-Type	        application/xml
GS1-EPCIS-Version	    1.2
GS1-EPCIS-Min	        1.2
GS1-EPCIS-Max	        1.2
GS1-CBV-Version	        1.2
GS1-EPC-Version	        ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

<epcisq:EPCISQueryDocument 
                     xmlns:epcis="urn:epcglobal:epcis:xsd:1"
                     xmlns:cbvmda="urn:epcglobal:cbv:mda"
                     xmlns:gdst="https://traceability-dialogue.org/epcis"
                     xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader"
                     xmlns:epcisq="urn:epcglobal:epcis-query:xsd:1" 
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
        <epcisq:QueryResults>
            <queryName>SimpleEventQuery</queryName>
            <resultsBody>
                <EventList>
                    <!-- Events Here -->
                </EventList>
            </resultsBody>
        </epcisq:QueryResults>
    </EPCISBody>
</epcisq:EPCISQueryDocument>
```

> The Capability Tool will also perform a trace-back. This is covered in our Communication Protocol / Trace-back article.

# Step 6: Request the Report
At any point during the capability process you can request a report about the capability process. You can use this method to poll for the status until steps 4 and 5 are complete.

Once completed, you can see if you passed or fail and a list of errors about what failed, if anything.

```
HTTP Get 1.1
{CAPABILITY-TOOL-API-URL}/process/report

Accept                      application/json
Content-Type                application/json
X-API-Key                   {YOUR-API-KEY}
X-Compliance-Process-UUID   {CAPABILITY-PROCESS-UUID}
```

This would respond with: 

```
{
    "solutionName" : "Test Solution",
    "complianceProcessUUID" : "9ed4c7e6-a37c-4597-b650-c0cf73d58b82",
    "status" : 0,
    "stage" : 3,
    "errors" : []
}
```

> For the this call you need to make sure to include the ***X-Capability-Process-UUID*** header in the request call including the UUID for the capability process you started.

Statuses: 
* 0 = unknown
* 1 = full-chain stage #1
* 2 = full-chain stage #2
* 3 = first mile stage #1
* 4 = finished

Stages:
* 0 = started
* 10 = failed - indicates you completed the capability process with errors
* 11 = passed - indicates you completed the capability process with no errors
* 12 = approved - a gdst team member as reviewed your passed capability process and approved it
* 13 = timed out - automatically set to this if not passed or failed within 2 hours

## Understanding the Errors
Potential when you get the report, it might contain errors. The report also provides a text formatted copy of the report for human reading. It also contains an array of each error.

Using the error report, you can have errors from three categories:

* Found an error when checking the capability process generated data for CTE/KDE completeness errors. This is the data that the capability tool generated, you requested from the capability tool, and then the capability tool then requested back from you.

* Found an error when checking the capabilty process generated data for equality errors. The data that was generated by the capability tool, requested by you, and then requested back by the capability tool needs to be the same as the original generated data.

* Found an error when checking the data you generated for CTE/KDE completeness errors.

The human-readable version might look something like this:

```
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

