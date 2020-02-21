---
title: Broodstock / Hatching
---

Larvae producted at a hatchery that will be used to stock aquaculture facilities are traced using an `object` `add` event to indicate the Hatchery they were procuded at and then used in the traceability of full-grown harvested products from aquaculture facilities. For larvae produced in an hatchery, we will use the *business step* `urn:gdst:bizStep:hatching` with the disposition `active`. This event is not used for tracing larvae harvested from the wild.


## Example #1

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