---
title: Landing
description: How to record the Landing events given different scenarios.
---

All products harvested from the wild will have a landing event. This event represents the first time that these wild-harvested products reach land. The Business Step `urn:gdst:bizStep:landing` will be used when recording this event and no disposition is required. The **Location** for the event should be the `GLN` of where the products reached land. Most of the time this will be a port of some kind.

It is important that if there is a change of ownership when the products land, then that change of ownership should be recorded in the `source and destination list` on the event as well as the disposition should be set to `urn:gdst:disposition:entering_commerce` if this is the first time the products changed ownership.


## Example #1
When products are harvested in the wild, an offload event is recorded for the first time that they reach land.

```xml
<!-- OFFLOADING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T18:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>CC2BB7E8-0E81-4915-81EB-386BFD15B39C</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:gdst:bizStep:landing</bizStep>

    <!-- Port of San Diego -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.SDPORT</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:lot:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT-FILLET.LOT20203015</epcClass>
                <quantity>5000.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>
    </extension>

    <!-- Landing Authorization -->
    <!-- This is a just an example Certificate for Transshipment Authorization and does not represnt a real Certificate -->
    <gdst:certificationList>

        <!-- This is a made up Certificate. This is just an example. -->
        <cbvmda:certification>
            <gdst:certificateType>urn:gdst:certType:landingAuth</gdst:certificateType>
            <cbvmda:certificationStandard>Landing Authority</cbvmda:certificationStandard>
            <cbvmda:certificationAgency>Landing Authority</cbvmda:certificationAgency>
            <cbvmda:certificationValue>LA_123456789</cbvmda:certificationValue>
            <cbvmda:certificationIdentification>LA_123456789</cbvmda:certificationIdentification>
        </cbvmda:certification>

        <!-- This is a made up Certificate. This is just an example. -->
        <cbvmda:certification>
            <gdst:certificateType>urn:gdst:certType:humanyPolicy</gdst:certificateType>
            <cbvmda:certificationStandard>WHO Human Decency Policy</cbvmda:certificationStandard>
            <cbvmda:certificationAgency>WHO</cbvmda:certificationAgency>
            <cbvmda:certificationValue>1234567890</cbvmda:certificationValue>
            <cbvmda:certificationIdentification>0987654321</cbvmda:certificationIdentification>
        </cbvmda:certification>
    </gdst:certificationList>

    <!-- Unloading Port -->
    <!-- Techinically if you look in the Master Data for the location, you can find this there. I included it here for demonstration purposes. -->
    <gdst:unloadingPort>SDPORT</gdst:unloadingPort>

    <!-- Human Welfare Policy -->
    <gdst:humanWelfarePolicy>WHO Human Decency Policy</gdst:humanWelfarePolicy>

    <!-- Jimmy's Processing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0048000.000001</gdst:productOwner>

    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```