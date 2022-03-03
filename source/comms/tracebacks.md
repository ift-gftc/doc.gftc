---
title: Trace-backs
description: This is documentation that discusses how to do a trace-back using the communication protocols and what a trace-back is.
---

Performing trace-backs and trace-forwards is important in traceability.

![Built-in request link](./cod-example.png)

> For the purpose of this explination, ***EPC 1*** in the illustration above will be *urn:gdst:example.org:product:lot:class:company01.itemcode01.lot01*

# Trace-backs
A trace-back involves tracing a product to it's source-products. This can be done by analyzing the transformation events in which a product was an output, collecting a list of the inputs, and then querying the EPCIS Query Interface for events relating to the inputs.

## Step 1
We will start with ***EPC 1*** in this scenario. The first step will to be to query the EPCIS Query Interface for all events pertaining to ***EPC 1***.

## Step 2
Scan for all transformation events returned in step 1. Make a list of all unknown inputs. Then query the EPCIS Query Interface for all events pertaining to each input.

> In this exercise, this would be ***EPC 5*** and ***EPC 6***

## Step 3
Repeat step 2 until no unknown inputs are left in the gathered event set.

> In this exercise, this would be repeated one time for ***EPC 2***, ***EPC 3***, and ***EPC 4***

# Trace-forwards
A trace-forward involves tracing a product to it's parent products. This can be done by analyzing the transformation events in which a product was an input, collecting a list of the outputs, and then querying the EPCIS Query Interface for events relating to the outputs.

## Step 1
We will start with ***EPC 4*** in this scenario. The first step will to be to query the EPCIS Query Interface for all events pertaining to ***EPC 4***.

## Step 2
Scan for all transformation events returned in step 1. Make a list of all unknown inputs. Then query the EPCIS Query Interface for all events pertaining to each input.

> In this exercise, this would be ***EPC 6***

## Step 3
Repeat step 2 until no unknown inputs are left in the gathered event set.

> In this exercise, this would be ***EPC 1***