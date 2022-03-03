---
title: Feeding
description: Covers event data that is recorded around the feeding of products while they are being grown at an aquaculture facility.
---

Feeding in aquaculture have at least two processes: feed transformation and feed input into lifecycle events. The **Feed Tranformation** step is critical to tracing the feed ingredients especially if there are wild-caught origins to the protein source. Feed is then input into lifcycle events as a transformation stp.

## Feed Transformation Event
This step is critical in connecting feed ingredients to harvested products from a seafood facility. Here we will define a transformation event that connects the feed ingredients to the actual feed used. The *business step* will be `commissioning` and the *dispoition* will be `active` from the standard **CBV 1.2**.

```xml
<TransformationEvent>
    <eventTime>2020-01-27T00:00:00.000-06:00</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>2D02A33E-DAE2-4B27-9B34-7D1351AC0429</eventID>
    </baseExtension>
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>
    
    <!-- Jim's Feedmill -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEEDMILL</id>
    </bizLocation>

    <!-- INPUT: Vegetables -->
    <inputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.VEGETABLES.LOT12232019</epcClass>
            <quantity>2500</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </inputQuantityList>

    <!-- OUTPUT: Vegetarian Salmon Feed -->
    <outputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEED01.LOT01272020</epcClass>
            <quantity>2000</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </outputQuantityList>

    <!-- LOT DATA -->
    <ilmd>

        <!-- Protein Source -->
        <gdst:proteinSource>Soy</gdst:proteinSource>

        <cbvmda:certificationList>

            <!-- This is a made up Certificate. This is just an example. -->
            <certification>
                <gdst:certificationType>urn:gdst:certType:harvestCert</gdst:certificationType>
                <certificationStandard>Feed Certificate Standard</certificationStandard>
                <certificationAgency>Feed Certificate Authority</certificationAgency>
                <certificationValue>SIMP.LPCO.2</certificationValue>
                <certificationIdentification>10161781</certificationIdentification>
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
        </cbvmda:certificationList>
    </ilmd>

    <!-- Human Welfare Policy -->
    <gdst:humanWelfarePolicy>WHO Human Decency Policy</gdst:humanWelfarePolicy>

    <!-- Jim's Feeding Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</gdst:productOwner>

    <!-- Jim's Feeding Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</cbvmda:informationProvider>
</TransformationEvent>
```


## Feeding Event
Generally the feed is connected to the harvested product in the `farm harvest` event which lists the feed as inputs to the harvested products listed as outputs. However, in some cases, traceability data will need to be able to express the timing of the feeding and not just connecting the feed to the harvested products. In this case, there is a special `transformation` event that will use the *business step* called `urn:gdst:bizStep:feeding` with no *disposition*. The inputs of the event will be the feed, and the outputs of the event will either be the products used to stock the aquaculture facility or the products harvested from the aquaculture facility.

For example, if we stocked a pond with some `salmon fry` and harvested `mature salmon` from the pond. We can either tie the feed to the `salmon fry` by listing them as the ouputs to the feeding event, or we can tie the feed to the harvested `mature salmon` by listing them as the outputs to the feeding event. Either way, when the `trace back` is performed, the feed will be listed in the `trace back` tree and the timing of the `feeding` will be available for analysis.