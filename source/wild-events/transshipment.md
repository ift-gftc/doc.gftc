---
title: TransShipment
description: How to record the Landing events given different scenarios.
---

Sometimes after products are harvested from the wild they are transferred to other ships before they are offloaded at shore. When this happens, we refer to these events as Transshipment Events. There are many different names throughout the world for these "middle-men" ships, TransShipment Vessel, Tender, etc. Regardless of the local vocabulary used to describe the ship, or the size of the ship, anytime products harvested from the wild are transferred to another ship prior to reaching land is considered a Transshipment event.

It is important that if there is a change of ownership during the transfer of the products, then that change of ownership should be recorded in the `source and destination list` on the event as well as the disposition should be set to `urn:gdst:disposition:entering_commerce` if this is the first time the products changed ownership.

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

In this case, a Transshipment event is recorded. Here we are going to build on the previous scenario where a Vessel with Multiple Harvests and Multiple Fishing Events transshipped all 4 catches to a Transshipment Vessel. In this scenario, the Transshipment Vessel, **Jimmy's Tender Vessel** owned by **Jimmy's Tender Co.**, is purchasing the Tuna from the Fishing Vessel, so these products are changing ownership and entering commerce for the first time.

```xml
<!-- TRANSSHIPMENT EVENT -->
<ObjectEvent>
    <eventTime>2019-01-28T18:12:00Z</eventTime>
    <eventTimeZoneOffset>+00:00</eventTimeZoneOffset>
    <baseExtension>
        <eventID>EEC77B23-E1BF-484D-BE2C-7CBC4EBB4F9A</eventID>
    </baseExtension>
    <epcList/>
    <action>OBSERVE</action>
    <bizStep>urn:gdst:bizStep:transshipment</bizStep>
    <disposition>urn:gdst:entering_commerce</disposition>
    

    <!-- Jimmy's Tender Vessel -->
    <bizLocation>
        <id>urn:gdst:traceability-solution.com:location:loc:0048000.019283"</id>
    </bizLocation>

    <!-- Transshipment Location -->
    <readPoint>
        <id>geo:37.860236,-123.144697</id>
    </readPoint>

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

    
    <gdst:certificationList>

        <!-- Transshipment Authorization -->
        <cbvmda:certification>
            <gdst:certificateType>urn:gdst:certType:transshipment_authorization</gdst:certificateType>
            <cbvmda:certificationStandard>Transshipment Authority</cbvmda:certificationStandard>
            <cbvmda:certificationAgency>Transshipment Authority</cbvmda:certificationAgency>
            <cbvmda:certificationValue>TA_123456789</cbvmda:certificationValue>
            <cbvmda:certificationIdentification>TA_123456789</cbvmda:certificationIdentification>
        </cbvmda:certification>

        <!-- Chain of Custody -->
        <cbvmda:certification>
            <gdst:certificateType>urn:gdst:certType:chain_custody</gdst:certificateType>
            <cbvmda:certificationStandard>MSC Chain of Custody</cbvmda:certificationStandard>
            <cbvmda:certificationAgency>MSC</cbvmda:certificationAgency>
            <cbvmda:certificationValue>MSC_COC_1234567890</cbvmda:certificationValue>
            <cbvmda:certificationIdentification>MSC_COC_1234567890</cbvmda:certificationIdentification>
        </cbvmda:certification>

    </gdst:certificationList>

    <!-- Bing Fishing Co. -->
    <gdst:productOwner>urn:gdst:traceability-solution.com:party:0b4e59bb-29ba-4edd-8e51-7e8d1a96dce7</gdst:productOwner>

    <!-- Jimmy's Processing Co. -->
    <cbvmda:informationProvider>urn:gdst:traceability-solution.com:party:0048000.000001</cbvmda:informationProvider>
</ObjectEvent>
```