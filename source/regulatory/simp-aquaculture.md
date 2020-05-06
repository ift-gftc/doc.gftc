---
title: SIMP - Aquaculture
---

In this scenario we will cover a single Farm with a single Farm Harvest. We will be building a [PGA Record](https://www.cbp.gov/sites/default/files/assets/documents/2017-Oct/Implementation%20Guide%20for%20NMFS%20SIM%209-28-17_v2.pdf) based off the Events below. The Master Data for these events can be found above in the Master Data section.

> Personsally Identifying Data is not required to fill out a SIMP report. It is GDST's recommendation that non-personally identifying contact information is provided for the farm such as a general position at the farm company to communicate with, a general email for the farm, and the phone number for the farm company that is not a personal phone number.

## Required KDEs

In order to fill out a SIMP report for a Aquaculture scenario we will need the following KDEs:
* *PG05.ScientificSpeciesCode* - **Scientific Name** - Pulled from Master Data
* *PG06.CountryCode & PG06.GeographicLocation* - **Farming Country** - Pulled from the Country of Origin in the ILMD data of the Fishing Event
* *PG06.ProcessingStartDate* - **Harvest Date** - Pulled from the Event Time of the Offload Event.
* *PG14.LPCONumber* - **IFTP Number** - Pulled from the Master Data of the Vessel / Party. In this example we will pull it from the Master Data of the Vessel Owning Party.
* *PG19.EntityName* - **Farm Name** - Pulled from the Master Data for Owning Party of the BizLocation of event with the disposition of "entering_commerce".
* *PG19 & PG20* - **Farm Address** - Pulled from the Master Data for the BizLocation of event with the disposition of "entering_commerce".
* *PG21.IndividualName* - **Farm Contact Name** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* *PG21.IndividualTelephone* - **Farm Contact Email** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* *PG21.IndividualEmail* - **Farm Contact Phone** - Pulled from the Master Data for the BizLocation of the event with the disposition of "entering_commerce".
* *PG29.CommodityNetQuantity* - **Product Net Weight** - Pulled from the Net Weight recorded for the Product in the Offload Event
* *PG06.ProcessingDescription* - **Product Form** - Pulled from the Product Form of the Master Data of the Offloaded product.that occurs.

## Recommended Additonal EPCIS Attributes
There are attributes required by SIMP that are not part of the GDST guidance. Here are recommendations on how these attributes could be recorded in EPCIS in order to meet SIMP requirements.

* **IFTP Number** - This can be recorded as an additional attribute either in the Party or Location master data. The recommended CBV attribute is "urn:gdst:iftp".

## Master Data
In order to not repeat the master data used with each example, I would like to provide the master data used in the examples below. 
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
                    <attribute id="urn:epcglobal:cbv:mda#name">Jim's Feedmill</attribute>
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
                    <attribute id="urn:epcglobal:cbv:mda#name">Per's Salmon Farm</attribute>
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
                    <attribute id="urn:epcglobal:cbv:mda#name">Fresh Fish Processing Plant</attribute>
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

## Example Aquaculture SIMP Report
Now that we have the EPCIS xml, the PGA Record(s) will look like:
```
PG01001NMFSIMY
PG02
PG05                                                              SAL
PG06HBAUS                    01282020             NRD
PG142NM40987654321
PG19AQF                  Per's Salmon Farm               456 Walnut Blvd
PG20                                     Verona               CA US92111       
PG21BY Joe Smith              +1.999-999-9999joe@triunionsf.com
PG29KG 1000
```