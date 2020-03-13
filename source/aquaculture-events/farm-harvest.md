---
title: Farm Harvest
---

The `farm harvest` event is used to record the harvested of seafood products from an aquaculture facility. This event is indicated with a *business step* of `urn:gdst:bizStep:farmHarvest` and a *disposition* of `active`. This is a `transformation` `add` type event with the inputs of the event being the products used to stock the aquaculture facility and the feed used. The outputs of the event are products harvested from the aquaculture facility.


## Example #1

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
            <productionMethodForFishAndSeafoodCode>AQUACULTURE</productionMethodForFishAndSeafoodCode>

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