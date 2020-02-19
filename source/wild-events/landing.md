---
title: Landing
description: How to record the Landing events given different scenarios.
---

All products harvested from the wild will have a landing event. This event represents the first time that these wild-harvested products reach land. The Business Step `urn:gdst:bizStep:landing` will be used when recording this event and no disposition is required. The **Location** for the event should be the `GLN` of where the products reached land. Most of the time this will be a port of some kind.

It is important that if there is a change of ownership when the products land, then that change of ownership should be recorded in the `source and destination list` on the event as well as the disposition should be set to `urn:gdst:disposition:entering_commerce` if this is the first time the products changed ownership.

## Master Data
Here is the Master Data that will be used in the scenarios listed below.

```xml
<!-- MASTER DATA -->
<EPCISMasterData>
    <VocabularyList>

        <!-- TRADE ITEMS / PRODUCT DEFINITIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
            <VocabularyElementList>
                
                <!-- YELLOW FIN TUNA -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Yellowfin Tuna</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Thunnus albacares</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">YFT</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">WHL</attribute>
                </VocabularyElement>

                <!-- YELLOW FIN TUNA FILLET -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:product:class:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.YFT-FILLET">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Yellowfin Tuna Fillet</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">Thunnus albacares</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesCode">YFT</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#radeItemConditionCode">FIL</attribute>
                </VocabularyElement>

            </VocabularyElementList>
        </Vocabulary>

        <!-- TRADING PARTNERS / PARTIES / OWNERS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Party">
            <VocabularyElementList>

                <!-- Bing Fishing Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Bing Fishing Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne"/>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"/>
                    <attribute id="urn:epcglobal:cbv:mda#city"/>
                    <attribute id="urn:epcglobal:cbv:mda#state"/>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode"/>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">TW</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact"/>
                    <attribute id="urn:epcglobal:cbv:mda#telephone"/>
                    <attribute id="urn:epcglobal:cbv:mda#email"/>
                    <attribute id="urn:gdst:iftp">1234567890</attribute>
                </VocabularyElement>

                <!-- Jimmy's Processings Co. -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:party:0048000.000001">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Tender Co.</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne"/>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"/>
                    <attribute id="urn:epcglobal:cbv:mda#city"/>
                    <attribute id="urn:epcglobal:cbv:mda#state"/>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode"/>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">TW</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact"/>
                    <attribute id="urn:epcglobal:cbv:mda#telephone"/>
                    <attribute id="urn:epcglobal:cbv:mda#email"/>
                </VocabularyElement>
            </VocabularyElementList>
        </Vocabulary>

        <!-- LOCATIONS -->
        <Vocabulary type="urn:epcglobal:epcis:vtype:Location">
            <VocabularyElementList>

                <!-- BING Ship -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7.47797660-9355-4f8c-8867-c98ee1e8b684">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">BING Ship</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselName">BING Ship</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.9517276</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>
                </VocabularyElement>

                <!-- Jimmy's Tender Vessel -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0048000.JimmysTender001">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#name">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselName">Jimmy's Tender Vessel</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselID">IMO.1234567</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#vesselFlagState">US</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">3165 Pacific Hwy</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92101</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>

                <!-- PORT OF San Diego (Owned By: Jimmy's Processings Co.) -->
                <VocabularyElement id="urn:gdst:traceability-solution.com:location:loc:0048000.SDPORT">
                    <attribute id="urn:epcglobal:cbv:mda#informationProvider">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>
                    <attribute id="urn:epcglobal:cbv:owning_party">urn:gdst:traceability-solution.com:party:0048000.000001</attribute>

                    <!-- Philip: I don't know what the port code is for the San Diego port and couldn't find it online -->
                    <attribute id="urn:epcglobal:cbv:mda#unloadingPort">SDPORT</attribute>

                    <attribute id="urn:epcglobal:cbv:mda#name">Port of San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">3165 Pacific Hwy</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#streetAddressTwo"></attribute>
                    <attribute id="urn:epcglobal:cbv:mda#city">San Diego</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#state">CA</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#postalCode">92101</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#latitude">32.7355</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#longitude">-117.1772</attribute>
                    <attribute id="unr:epcglobal:cbv:mda#contact">Joe Smith</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#telephone">+1.999-999-9999</attribute>
                    <attribute id="urn:epcglobal:cbv:mda#email">joe@triunionsf.com</attribute>
                </VocabularyElement>
        </Vocabulary>
    </VocabularyList>
</EPCISMasterData>
```

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
        <cbvmda:certification>
            <gdst:certificateType>urn:gdst:certType:landing_authorization</gdst:certificateType>
            <cbvmda:certificationStandard>Landing Authority</cbvmda:certificationStandard>
            <cbvmda:certificationAgency>Landing Authority</cbvmda:certificationAgency>
            <cbvmda:certificationValue>LA_123456789</cbvmda:certificationValue>
            <cbvmda:certificationIdentification>LA_123456789</cbvmda:certificationIdentification>
        </cbvmda:certification>
    </gdst:certificationList>

    <!-- Jimmy's Processing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0048000.000001</gdst:productOwner>

    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```