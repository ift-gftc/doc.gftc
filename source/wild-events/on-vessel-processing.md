---
title: On Vessel Processing
description: This page covers information about capturing events in regards to On-Vessel Processing.
---

Sometimes products harvested from the wild are initially processed on-board the vessel before reaching land. This is commonly referred to as **On Vessel Processing**. These are standard Processing / Transformation events with a Business Step of `commisioning` and a disposition of `active` from the standard CBV 1.2. The location for the **On Vessel Processing** should be the `GLN` of the vessel that performed the processing.

Below we have an example event with accompanying Master Data to go with that event.

```xml
<TransformationEvent>
    <eventTime>2020-01-27T00:00:00.000-06:00</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
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
    <ilmd>

        <!-- Vessel Information -->
        <cbvmda:vesselCatchInformationList>
            <cbvmda:vesselCatchInformation>

                <!-- Vessel Name -->
                <cbvmda:vesselName>BING Ship</cbvmda:vesselName>

                <!-- Vessel ID -->
                <cbvmda:vesselID>USA</cbvmda:vesselID>

                <!-- Unique Vessel Registration -->
                <gdst:imoNumber>IMO.1234567890</gdst:imoNumber>

                <!-- Vessel Flag -->
                <cbvmda:vesselFlagState>US</cbvmda:vesselFlagState>

                <!-- Vessel Public Registry Link -->
                <gdst:vesselPublicRegistry>https://www.register-my-vessel.fake.com</gdst:vesselPublicRegistry>
            </cbvmda:vesselCatchInformation>
        </cbvmda:vesselCatchInformationList>

        <!-- Certificates -->
        <cbvmda:certificationList>

            <!-- This is a made up Certificate. This is just an example. -->
            <certification>
                <gdst:certificateType>urn:gdst:certType:harvestCoC</gdst:certificateType>
                <certificationStandard>MSC Chain of Custody</certificationStandard>
                <certificationAgency>MSC</certificationAgency>
                <certificationValue>MSC_COC_1234567890</certificationValue>
                <certificationIdentification>MSC_COC_1234567890</certificationIdentification>
            </certification>

            <!-- This is a made up Certificate. This is just an example. -->
            <certification>
                <gdst:certificateType>urn:gdst:certType:humanyPolicy</gdst:certificateType>
                <certificationStandard>WHO Human Decency Policy</certificationStandard>
                <certificationAgency>WHO</certificationAgency>
                <certificationValue>1234567890</certificationValue>
                <certificationIdentification>0987654321</certificationIdentification>
            </certification>
        </cbvmda:certificationList>
        <!-- Expiration Date -->
        <cbvmda:itemExpirationDate>2020-03-15T00:00:00.000-06:00</cbvmda:itemExpirationDate>

        <!-- Product Origin -->
        <cbvmda:countryOfOrigin>US</cbvmda:countryOfOrigin>
    </ilmd>

    <!-- Human Welfare Policy -->
    <gdst:humanWelfarePolicy>WHO Human Decency Policy</gdst:humanWelfarePolicy>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Bing Fishing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</cbvmda:informationProvider>
</TransformationEvent>
```