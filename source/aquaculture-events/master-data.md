---
title: Master Data
description: This page contains example master data that is used in events recorded for products harvested from the wild.
---

Master data on objects, locations, and entities are data that tend not to grow with trade volume. Given the similarities across CTEs and to reduce redundancy, GDST has documented Aquaculture Master Data here and parcels individual pages based on commodity or life cycle events.


## Master Data
This is the master data that will be used through the events in aquaculture scenarios.

```xml
<!-- MASTER DATA -->
<EPCISMasterData>
    <VocabularyList>

        <!-- TRADE ITEMS / PRODUCT DEFINITIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
            <VocabularyElementList>
                
                <!-- SOY BASE -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.SOY">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Soy</attribute>
                </VocabularyElement>

                <!-- VEGETERIAN FEED -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:7D90C2CD-A801-4E22-ACEE-82BF27A4844D.FEED01">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:7D90C2CD-A801-4E22-ACEE-82BF27A4844D</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Soy-based Salmon Feed</attribute>
                </VocabularyElement>

                <!-- SALMON FRY -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43.SAL-FRY">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Atlantic Salmon Fry</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Salmo salar</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">SAL</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">FIL</attribute>
                </VocabularyElement>

                <!-- SALMON -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3.SAL-WHOLE">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:D8F9F0B4-A03D-41A3-AA60-B2BE0FD9C2F3</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Atlantic Salmon</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Salmo salar</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">SAL</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">WHL</attribute>
                </VocabularyElement>

                <!-- SALMON FILLET -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:30BAD813-7FB9-43BE-8CAA-7E0876552EAA.SAL-FILLET">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:30BAD813-7FB9-43BE-8CAA-7E0876552EAA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Atlantic Salmon Fillet</attribute>
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
