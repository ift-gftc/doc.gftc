---
title: On Vessel Processing
description: This page covers information about capturing events in regards to On-Vessel Processing.
---

Sometimes products harvested from the wild are initially processed on-board the vessel before reaching land. This is commonly referred to as **On Vessel Processing**. These are standard Processing / Transformation events with a Business Step of `commisioning` and a disposition of `active` from the standard CBV 1.2. The location for the **On Vessel Processing** should be the `GLN` of the vessel that performed the processing.

Below we have an example event with accompanying Master Data to go with that event.


## Example #1
Sometimes products are initially processedd on the Vessel that catches them. In this case, a Transformation event is recorded to represent this initial processing step.

```xml
<TransformationEvent>
    <eventTime>2020-01-27T20:00:00Z</eventTime>
    <baseExtension>
        <eventID>6926712e-599f-4c4e-b6e9-8dd888c906bd</eventID>
    </baseExtension>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- BING Fishing Vessel -->
    <bizLocation>
        <id>urn:epc:id:sgln:0614141.00888.0</id>
    </bizLocation>

    <!-- INPUT: Yellow Fin Tuna -->
    <inputQuantityList>
        <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT1111</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT2222</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT3333</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT.LOT4444</epcClass>
                <quantity>2500</quantity>
                <uom>KGM</uom>
            </quantityElement>
    </inputQuantityList>

    <!-- OUTPUT: Yellow Fin Tuna Fillet -->
    <outputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT-FILLET.LOT20203015</epcClass>
            <quantity>5000</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </outputQuantityList>

    <!-- LOT DATA -->
    <extension>
        <ilmd>

            <!-- Chain of Custody Certificate -->
            <cbvmda:certificationList>
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
                    <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
                </cbvmda:certification>
            </cbvmda:certificationList>

            <!-- Expiration Date -->
            <cbvmda:itemExpirationDate>2020-03-15</cbvmda:itemExpirationDate>

            <!-- Product Origin -->
            <cbvmda:countryOfOrigin>US</cbvmda:sellByDate>
        </ilmd>
    </extension>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Bing Fishing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</cbvmda:informationProvider>

</TransformationEvent>
```