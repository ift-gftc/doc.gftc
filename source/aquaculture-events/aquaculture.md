---
title: Aquaculture Events
description: This covers how different events should be recorded for Aqua Culture scenarios.
---
Here we are going to cover the different events that need to be recorded in Aqua Culture scenarios. These events include how the Feed is c

*We are not going to cover any Aggregated Farm Harvest scenarios here. We will assume that each Farm Harvest will be recorded. This is because GDST does not support Aggregated Farm Harvests in order to be SIMP compliant.*

## Master Data
This is the master data that will be used through the events in this aquaculture scenario.

```xml
<!-- MASTER DATA -->
<EPCISMasterData>
    <VocabularyList>

        <!-- TRADE ITEMS / PRODUCT DEFINITIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
            <VocabularyElementList>
                
                <!-- VEGETABLES -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.VEGETABLES">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Vegetables</attribute>
                </VocabularyElement>

                <!-- VEGETERIAN FEED -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEED01">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Vegetarian Salmon Feed</attribute>
                </VocabularyElement>

                <!-- SALMON FRY -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.SAL-FRY">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Antlatnci Salmon Fry</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Salmo salar</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">SAL</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">FIL</attribute>
                </VocabularyElement>

                <!-- SALMON -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.SAL-WHOLE">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Antlantic Salmon</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Salmo salar</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">SAL</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">WHL</attribute>
                </VocabularyElement>

                <!-- SALMON FILLET -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:30BAD813-7FB9-43BE-8CAA-7E0876552EAA.SAL-FILLET">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Antlantic Salmon Fillet</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Salmo salar</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">SAL</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">WHL</attribute>
                </VocabularyElement>

            </VocabularyElementList>
        </Vocabulary>

        <!-- TRADING PARTNERS / PARTIES / OWNERS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Party">
            <VocabularyElementList>

                <!-- Bob's Hatchery Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bob's Hatchery Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="urn:gdst:iftp">1234567890</attribute>
                </VocabularyElement>

                <!-- Jim's Feeding Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jim's Feeding Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                </VocabularyElement>

                <!-- Per's Salmon Farm Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Per's Salmon Farm Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="urn:gdst:iftp">0987654321</attribute>
                </VocabularyElement>

                <!-- Fresh Fish Processing Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Fresh Fish Processing Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                </VocabularyElement>
            </VocabularyElementList>
        </Vocabulary>

        <!-- LOCATIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Location">
            <VocabularyElementList>

                <!-- Bob's Hatchery -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.HATCHERY">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bob's Hatchery</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">123 US Highyway 96</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92122</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>

                <!-- Jim's Feedmill -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEEDMILL">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bob's Hatchery</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">981 Main St.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">Small Town</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92321</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>

                <!-- Per's Salmon Farm -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.FARM">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bob's Hatchery</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">456 Walnut Blvd</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">Verona</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92111</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>

                <!-- Fresh Fish Processing Plant -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:30BAD813-7FB9-43BE-8CAA-7E0876552EAA.PROCESSINGPLANT">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bob's Hatchery</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">123 Main St.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92101</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>
        </Vocabulary>
    </VocabularyList>
</EPCISMasterData>
```

## Feed Transformation Event
This event covers how the Feed is created and the ingredients that go into making the feed.

```xml
<TransformationEvent>
    <eventTime>2020-01-27T20:00:00Z</eventTime>
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
    <extension>
        <ilmd>

            <!-- Feed Type -->
            <gdst:feedType>Processed</gdst:feedType>

            <!-- Protein Source -->
            <gdst:proteinSource>Soy</gdst:proteinSource>

            
            <cbvmda:certificationList>

                <!-- Chain of Custody Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
                    <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Code of Good Practice Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:good_practice</gdst:certificateType>
                    <cbvmda:certificationStandard>Good Practice Standard Body</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>GP Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>GP_0987654321</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>GP_0987654321</cbvmda:certificationIdentification>
                </cbvmda:certification>
            </cbvmda:certificationList>
        </ilmd>
    </extension>

    <!-- Jim's Feeding Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</gdst:productOwner>

    <!-- Jim's Feeding Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</cbvmda:informationProvider>

</TransformationEvent>
```

## Hatchery / Broodstock Event
This event covers the creation of the Broodstock that will be used for stocking a pond at an aquaculture facility.

``` xml
<!-- HATCHING EVENT -->
<ObjectEvent>
    <eventTime>2020-01-27T2:00:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>19C618C1-1585-4369-92D2-FACC58E90A8F</eventID>
    </baseExtension>
    <epcList/>
    <action>ADD</action>
    <bizStep>urn:gdst:bizStep:hatching</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- Bob's Hatchery -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.HATCHERY</id>
    </bizLocation>

    <extension>
        <quantityList>

            <!-- YELLOW FIN TUNA -->
            <quantityElement>
                <epcClass>urn:gdst:traceability-solution.com:product:class:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.SAL-FRY.LOT01272020</epcClass>
                <quantity>250.0</quantity>
                <uom>KGM</uom>
            </quantityElement>
        </quantityList>

        <ilmd>

            <!-- Source of Broodstock -->
            <gdst:broodstockSources>Domestic</gdst:broodstockSources>

            <!-- Harvest Date -->
            <cbvmda:harvestStartDate>2020-01-27T2:00:00Z</cbvmda:harvestStartDate>

            <cbvmda:certificationList>

                <!-- Chain of Custody Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
                    <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Code of Good Practice Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:good_practice</gdst:certificateType>
                    <cbvmda:certificationStandard>Good Practice Standard Body</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>GP Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>GP_0987654321</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>GP_0987654321</cbvmda:certificationIdentification>
                </cbvmda:certification>
            </cbvmda:certificationList>
        </ilmd>
    </extension>

    <!-- Bob's Hatchery Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</gdst:productOwner>

    <!-- Bob's Hatchery Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</cbvmda:informationProvider>
</ObjectEvent>
```

## Farm Harvest Events
This event covers the harvesting of a product from a pond at an aquaculture event. This is a transformation event where the input is the Broodstock and Feed and the output is the harvested product.

```xml
<TransformationEvent>
    <eventTime>2020-01-28T20:00:00Z</eventTime>
    <baseExtension>
        <eventID>8130DCF8-3F63-4E40-A895-E4BA9FF66FDD</eventID>
    </baseExtension>
    
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- Per's Salmon Farm -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.FARM</id>
    </bizLocation>

    <!-- INPUT: Vegetarian Feed + Antlantic Salmon Fry -->
    <inputQuantityList>

        <!-- ANTLANTIC SALMON FRY -->
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.SAL-FRY.LOT01272020</epcClass>
            <quantity>250</quantity>
            <uom>KGM</uom>
        </quantityElement>

        <!-- VEGETARIAN FEED -->
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEED01.LOT01272020</epcClass>
            <quantity>2000</quantity>
            <uom>KGM</uom>
        </quantityElement>

    </inputQuantityList>

    <!-- OUTPUT: Antlantic Salmon -->
    <outputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.SAL-WHOLE.LOT01282020</epcClass>
            <quantity>1000</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </outputQuantityList>

    <!-- LOT DATA -->
    <extension>
        <ilmd>

            <!-- FARM HARVEST -->
            <cbvmmda:productionMethodCode>AQUACULTURE</cbvmda:productionMethodCode>

            <!-- Harvest Date -->
            <cbvmmda:harvestStartDate>Processed</cbvmmda:harvestStartDate>

            <!-- Aquaculture Method -->
            <gdst:aquacultureMethod>Soy</gdst:aquacultureMethod>

            
            <cbvmda:certificationList>

                <!-- Chain of Custody Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
                    <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Code of Good Practice Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:good_practice</gdst:certificateType>
                    <cbvmda:certificationStandard>Good Practice Standard Body</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>GP Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>GP_0987654321</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>GP_0987654321</cbvmda:certificationIdentification>
                </cbvmda:certification>
            </cbvmda:certificationList>
        </ilmd>
    </extension>

    <!-- Per's Salmon Farm Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</gdst:productOwner>

    <!-- Per's Salmon Farm Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</cbvmda:informationProvider>

</TransformationEvent>
```

## Processing Event
This event covers the change of ownership from the Farm to the Processor and the Transformation from the whole Salmon to the Salmon Fillets. This is also when the Salmon entered into commerce. For a more detailed event history, a receiving event would be recorded, but for the sake of simplicity we will not do that.

```xml
<TransformationEvent>
    <eventTime>2020-01-29T20:00:00Z</eventTime>
    <baseExtension>
        <eventID>8130DCF8-3F63-4E40-A895-E4BA9FF66FDD</eventID>
    </baseExtension>
    
    <bizStep>urn:epcglobal:cbv:bizstep:commissioning</bizStep>
    <disposition>urn:epcglobal:cbv:disp:active</disposition>

    <!-- Fresh Fish Processing Plant-->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:30BAD813-7FB9-43BE-8CAA-7E0876552EAA.PROCESSINGPLANT</id>
    </bizLocation>

    <!-- INPUT: Antlantic Salmon -->
    <inputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.SAL-WHOLE.LOT01282020</epcClass>
            <quantity>1000</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </inputQuantityList>

    <!-- OUTPUT: Antlantic Salmon Fillet -->
    <outputQuantityList>
        <quantityElement>
            <epcClass>urn:gdst:traceability-solution.com:product:lot:class:30BAD813-7FB9-43BE-8CAA-7E0876552EAA.SAL-FILLET.LOT01292020</epcClass>
            <quantity>500</quantity>
            <uom>KGM</uom>
        </quantityElement>
    </outputQuantityList>

    <!-- SELLER: Per's Salmon Farm Co. -->
    <sourceList>
        <source type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</source>
    </sourceList>

    <!-- BUYER: Fresh Fish Processing Co. -->
    <destinationList>
        <destination type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</destination>
    </destinationList>

    <!-- LOT DATA -->
    <extension>
        <ilmd>

            <!-- Country of Origin -->
            <cbvmmda:countryOfOrigin>US</cbvmmda:countryOfOrigin>
            
            <cbvmda:certificationList>

                <!-- Processor License -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:processing_license</gdst:certificateType>
                    <cbvmda:certificationStandard>US Processing License</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>US Processing License Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>USP_82736182</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>USP_82736182</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Chain of Custody Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
                    <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Code of Good Practice Certificate -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:good_practice</gdst:certificateType>
                    <cbvmda:certificationStandard>Good Practice Standard Body</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>GP Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>GP_0987654321</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>GP_0987654321</cbvmda:certificationIdentification>
                </cbvmda:certification>

                <!-- Aggregator License -->
                <cbvmda:certification>
                    <gdst:certificateType>urn:gdst:certType:aggregator_license</gdst:certificateType>
                    <cbvmda:certificationStandard>Aggregator License</cbvmda:certificationStandard>
                    <cbvmda:certificationAgency>Aggregator License Agency</cbvmda:certificationAgency>
                    <cbvmda:certificationValue>AL_928374545</cbvmda:certificationValue>
                    <cbvmda:certificationIdentification>AL_928374545</cbvmda:certificationIdentification>
                </cbvmda:certification>

            </cbvmda:certificationList>
        </ilmd>
    </extension>

    <!-- Fresh Fish Processor Co.-->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</gdst:productOwner>

    <!-- Fresh Fish Processor Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</cbvmda:informationProvider>

</TransformationEvent>
```
