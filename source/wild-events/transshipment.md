---
title: TransShipment
description: How to record the Landing events given different scenarios.
---

Sometimes after products are harvested from the wild they are transferred to other ships before they are offloaded at shore. When this happens, we refer to these events as Transshipment Events. There are many different names throughout the world for these "middle-men" ships, TransShipment Vessel, Tender, etc. Regardless of the local vocabulary used to describe the ship, or the size of the ship, anytime products harvested from the wild are transferred to another ship prior to reaching land is considered a Transshipment event.

It is important that if there is a change of ownership during the transfer of the products, then that change of ownership should be recorded in the `source and destination list` on the event as well as the disposition should be set to `urn:gdst:disposition:entering_commerce` if this is the first time the products changed ownership.


## Example #1

In this case, a Transshipment event is recorded. Here we are going to build on the previous scenario where a Vessel with Multiple Harvests and Multiple Fishing Events transshipped all 4 catches to a Transshipment Vessel. In this scenario, the Transshipment Vessel, **Jimmy's Tender Vessel** owned by **Jimmy's Tender Co.**, is purchasing the Tuna from the Fishing Vessel, so these products are changing ownership and entering commerce for the first time.

```xml
<!-- WARNING: This is not a complete EPCIS Document, this is a partial of an EPCIS Document for demonstration purposes only. -->
<ObjectEvent>
    <eventTime>2019-01-28T00:00:00.000-06:00</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>EEC77B23-E1BF-484D-BE2C-7CBC4EBB4F9A</eventID>
    </baseExtension>
    <epcList/>
    <action>OBSERVE</action>
    <bizStep>urn:gdst:bizStep:transshipment</bizStep>
    <disposition>urn:gdst:entering_commerce</disposition>

    <!-- Transshipment Location -->
    <readPoint>
        <id>geo:37.860236,-123.144697</id>
    </readPoint>

    <!-- Jimmy's Tender Vessel -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.019283"</id>
    </bizLocation>
    
    <extension>
        <!-- YELLOW FIN TUNA -->
        <quantityList>
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT-FILLET.LOT20203015</epcClass>
                <quantity>5000</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <!-- SELLER: Bing Fishing Co.-->
        <sourceList>
            <source type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</source>
        </sourceList>

        <!-- BUYER: Jimmy's Processing Co. -->
        <destinationList>
            <destination type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</destination>
        </destinationList>
    </extension>

    <!-- Certificates (Harvest CoC, Human Policy, and TransShipment Authorization) -->
    <gdst:certificationList>

        <!-- This is a made up Certificate. This is just an example. -->
        <certification>
            <gdst:certificationType>urn:gdst:certType:transshipment</gdst:certificationType>
            <certificationStandard>Transshipment Authority</certificationStandard>
            <certificationAgency>Transshipment Authority</certificationAgency>
            <certificationValue>TA_123456789</certificationValue>
            <certificationIdentification>TA_123456789</certificationIdentification>
        </certification>

        <!-- This is a made up Certificate. This is just an example. -->
        <certification>
            <gdst:certificationType>urn:gdst:certType:harvestCoC</gdst:certificationType>
            <certificationStandard>MSC Chain of Custody</certificationStandard>
            <certificationAgency>MSC</certificationAgency>
            <certificationValue>MSC_COC_1234567890</certificationValue>
            <certificationIdentification>MSC_COC_1234567890</certificationIdentification>
        </certification>

        <!-- This is a made up Certificate. This is just an example. -->
        <certification>
            <gdst:certificationType>urn:gdst:certType:humanyPolicy</gdst:certificationType>
            <certificationStandard>WHO Human Decency Policy</certificationStandard>
            <certificationAgency>WHO</certificationAgency>
            <certificationValue>1234567890</certificationValue>
            <certificationIdentification>0987654321</certificationIdentification>
        </certification>
    </gdst:certificationList>

    <!-- Transshipment Start / End Date -->
    <gdst:transshipStartDate>2019-01-28T00:00:00.000-06:00</gdst:transshipStartDate>
    <gdst:transshipEndDate>2019-01-28T00:00:00.000-06:00</gdst:transshipEndDate>

    <!-- Unloading Port -->
    <!-- This is not filled in here because this was an At-Sea TransShipment. Just including an example of where this attribute goes. -->
    <cbvmda:unloadingPort></cbvmda:unloadingPort>
    
    <!-- Human Welfare Policy -->
    <gdst:humanWelfarePolicy>WHO Human Decency Policy</gdst:humanWelfarePolicy>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>
    
    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```