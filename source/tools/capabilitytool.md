---
title: GDST Capability Tool - Full Chain Compliance
description: This is documentation that covers how to use the capability tool for full-chain compliance.
---

# Registration
In order to register for the GDST Capability Tool, you will need to contact bharris@ift.org for more information.

# Capability Process
The capability process is an automated process that can be executed by a solution provider to determine if a specific version of a traceability solution is GDST Capable.

## Before we get started...
Before we get started make sure that you have registered for the GDST Capability Tool by following the registration steps above. After that you will need:

* the URL to the Capability Tool API
* your API Key for accessing the Capability Tool API
* the exact name of the traceability solution provided during registration
* the version number of the traceability solution you will be accessing

### Variables
During this documentation you will encounter many variables that will be wrapped in curly-braces like so "{CAPABILITY_TOOL_API_URL}". 

Below is a list of these variables and what they mean:

* {CAPABILITY_TOOL_API_URL} - 
* {YOUR_SOLUTION_NAME} - 
* {YOUR_API_KEY} - 
* {VERSION_OF_YOUR_SOLUTION} - 
* {CAPABILITY_TOOL_GENERATED_EPC} -
* {CAPABILITY_PROCESS_UUID} - 

## Step 1: Starting the Process
In order to start the process you will perform the following HTTP Request:

```
HTTP Post 1.1
{CAPABILITY_TOOL_API_URL}/process/start

Accept          application/json
Content-Type    application/json
X-API-Key       {YOUR_API_KEY}

{
    "SolutionName" : "{YOUR_SOLUTION_NAME}",
    "Version" : "{VERSION_OF_YOUR_SOLUTION}"
}
```

This HTTP Request will return the following response:

```
Content-Type    application/json
{
    "SolutionName" : "{YOUR_SOLUTION_NAME}",
    "Version" : "{VERSION_OF_YOUR_SOLUTION}",
    "EPCs" : [
        "{CAPABILITY_TOOL_GENERATED_EPC}"
    ],
    "UUID" : "{CAPABILITY_PROCESS_UUID}"
}
```

## Step 2: Querying for Traceability Data from the Capability Tool
This step will require you to take the {CAPABILITY_TOOL_GENERATED_EPC} and use it to query the traceability data associated with this EPC from the Capability Tool using the communication protocol in the GDST Technical Standard v1.1

A summary of these steps will include:
* Querying the Digital Link Resolver of the Capability Tool to obtain the EPCIS URL
* Querying the EPCIS Query Interface for all events associated with the EPC
* Performing a trace-back by scanning all inputs of any events returned, and querying the EPCIS Query Interface for events associated with those inputs. This step may need to be performed until no more unknown inputs are found.

### Querying the Digital Link Resolver of the Capability Tool to Obtain the EPCIS URL
In order to perform this step you will need to execute the following HTTP Request:

```
HTTP GET 1.1
{CAPABILITY_TOOL_API_URL}/digitallink/sscc/{CAPABILITY_TOOL_GENERATED_EPC}?linkType=gs1:epcis

Accept          application/json
X-API-Key       {YOUR_API_KEY}
```

This HTTP Request will return the following response:

```
[
    {
        "linkType" : "gs1:epcis",
        "link" : "{CAPABILITY_TOOL_API_URL}/epcis",
        "authRequired" : true,
    }
]
```

### Querying the the EPCIS Query Interface for all events associated with the EPC
In order to perform this step, you will need to execute the following HTTP Request:

```
HTTP POST 1.1
{CAPABILITY_TOOL_API_URL}/epcis/queries/SimpleEventQuery

Accept          application/xml
X-API-Key       {YOUR_API_KEY}

{
    "type" : "events",
    "query" : {
        "MATCH_epc" : [ 
            "{CAPABILITY_TOOL_GENERATED_EPC}"
        ]
    }
}
```

This response will contain an EPCIS Document in the 1.2 XML format that conforms to the EPCIS 1.2 XML Schema.

### Performing a Trace-back
