---
title: Broodstock / Hatching
---

Larvae grown at a hatchery to be stocked in aquaculture facilities are commissioned using an `object` `add` event. These objects (i.e. larvae or other immature progeny) along with feed inputs begin the aquaculture traceability towards full-grown harvested products. For larvae produced in a hatchery, we will use the *business step* `urn:gdst:bizStep:hatching` with the disposition `active`. 

Note: This event is not used for tracing larvae harvested from the wild.

``` xml
<ObjectEvent>
    <eventTime>2020-01-27T00:00:00.000-06:00</eventTime>
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
            <!-- SALMON FRY -->
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
            <cbvmda:harvestStartDate>2020-01-27T00:00:00.000-06:00</cbvmda:harvestStartDate>
            <cbvmda:harvestEndDate>2020-01-27T00:00:00.000-06:00</cbvmda:harvestEndDate>

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
    </extension>
    <!-- Human Welfare Policy -->
    <gdst:humanWelfarePolicy>WHO Human Decency Policy</gdst:humanWelfarePolicy>
    <!-- Bob's Hatchery Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</gdst:productOwner>
    <!-- Bob's Hatchery Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:DFA01B63-AAAA-4454-B13C-C53D6BDFAB43</cbvmda:informationProvider>
</ObjectEvent>
```