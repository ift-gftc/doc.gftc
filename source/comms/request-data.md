---
title: Requesting Traceability Data
description: This is documentation that is meant to cover requesting traceability data from another solution provider.
---

# Requirements
Before you can request traceability data from another traceability solution provider, you will need the following information:

* Digital Link URL
* API Key (optional, but recommended)
* One or more EPCs 
    - For each EPC, you will repeat steps 1 - 3 below.

For the example below, we will use the following information:

Digital Link URL: https://example.org/digitallink

API Key: 288CF12B-95CA-4B04-84F6-6310447EBE95

EPC: urn:gdst:example.org:product:lot:class:company01.itemcode01.lot01

# Step 1: Getting the EPCIS Query Interface URL
In this step you will use the GS1 Digital Link Resolver to get the EPCIS Query Interface for the EPC.

*NOTE: the EPC provided is a class-level EPC, meaning it is a GTIN + Lot Number, that means when we query the Digital Link Resolver we need to break it into it's GTIN and Lot Number.*

***HTTP Request***
```
HTTP GET 1.1
https://example.org/digitallink/gtin/urn:gdst:example.org:product:class:company01.itemcode01/lot/lot01?linkType=gs1:epcis

Accept		    application/json
X-API-Key		288CF12B-95CA-4B04-84F6-6310447EBE95
```

***HTTP Response***
```
Content-Type    application/json

[
    {
        "linkType" : "gs1:epcis",
        "link" : "https://example.org/epcis",
        "title" : "EPCIS 1.2.2 Query Interface",
        "authRequired" : true,
    }
]
```

# Step #2: Querying the EPCIS Query Interface for the EPCIS Events
We will use the EPCIS Query Interface URL returned in step 1 to query for all events pertaining to the EPC.

***HTTP Request***
```
HTTP POST 1.1
https://example.org/epcis/queries/SimpleEventQuery

Accept			        application/xml
Content-Type		    application/json
X-API-Key 			    288CF12B-95CA-4B04-84F6-6310447EBE95
GS1-EPCIS-Version		1.2
GS1-EPCIS-Min		    1.2
GS1-EPCIS-Max		    1.2
GS1-CBV-Version		    1.2
GS1-EPC-Version		    ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

{
    "type" : "events",
    "query" : {
        "MATCH_anyEPCClass" : [ 
            "urn:gdst:example.org:product:lot:class:company01.itemcode01.lot01"
        ]
    }
}
```

***HTTP Response***
```
Content-Type	        application/xml
GS1-EPCIS-Version	    1.2
GS1-EPCIS-Min	        1.2
GS1-EPCIS-Max	        1.2
GS1-CBV-Version	        1.2
GS1-EPC-Version	        ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

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

# Step #3: Performing Trace-Back
The final step is the trace-back step. The event-data returned in step 2 may contain transformation events with inputs that were used to create the EPC. 

*NOTE: For more information, please look at our documentation on trace-backs. This provides a more detailed explination on what a trace-back is and how to perform a trace-back using the EPCIS Query Interface.*

This step will be repeated until there are no more unknown input EPCs left throughout all of the EPCIS events gathered in step 2 and step 3.

***HTTP Request***
```
HTTP POST 1.1
https://example.org/epcis/queries/SimpleEventQuery

Accept			        application/xml
Content-Type		    application/json
X-API-Key 			    288CF12B-95CA-4B04-84F6-6310447EBE95
GS1-EPCIS-Version		1.2
GS1-EPCIS-Min		    1.2
GS1-EPCIS-Max		    1.2
GS1-CBV-Version		    1.2
GS1-EPC-Version		    ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

{
    "type" : "events",
    "query" : {
        "MATCH_anyEPCClass" : [ 
            "urn:gdst:example.org:product:lot:class:company01.itemcode02.lot02"
        ],
        "MATCH_anyEPC" : [
            "urn:gdst:example.org:product:serial:obj:company01.itemcode04.serial01"
        ]
    }
}
```

***HTTP Response***
```
Content-Type	        application/xml
GS1-EPCIS-Version	    1.2
GS1-EPCIS-Min	        1.2
GS1-EPCIS-Max	        1.2
GS1-CBV-Version	        1.2
GS1-EPC-Version	        ALWAYS_EPC_URN
GS1-CBV-XML-Format	    ALWAYS_URN

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
