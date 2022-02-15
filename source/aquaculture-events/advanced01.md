---
title: Advanced Scenario - Hatchery and Salmon Farm (w/ Feeding and Treatments)
description: This scenario covers if you have traceability back to the Hatchery the Hatchery. It also includes examples of how to record long running transformations, feeding, and treatments.
---

![Built-in request link](./ac_scenario_01.png)

# Details
A couple of details about this scenario:
* This scenario uses a "Long Transformation" to record when the ponds are stocked. The reason you might do this is to know when the ponds were stocked. 
    - If you didn't care about when the ponds were stocked, then you would simply record a single Transformation event (Hatching / Farm Harvest) and list everything as inputs on that one event.
* "Long Transformations" are connected via the `transformationID` on the various transformation events.
* This scenario assumes that the Hatchery does not have traceability back to the broodstock facility.
* This scenario assumes that the there is no traceability back to the feed mill. This will assume that the Hatchery and Salmon Farm will just use create event to bring the feed into their inventory.

# Master Data
In order to model this scenario we will need the following master data:
* Product Definitions
    - Broodstock
    - Fryling
    - Raw Antlantic Salmon
    - Vegetarian Fish Food
* Locations
    - Hatchery
    - Salmon Farm
* Trading Parties
    - Hatchery Company
    - Sweet Fresh Salmon Farm

    
# XML
```
<?xml version="1.0" encoding="UTF-8"?>
<epcis:EPCISDocument
    xmlns:epcis="urn:epcglobal:epcis:xsd:1"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:sbdh="http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader"
    xmlns:cbvmda="urn:epcglobal:cbv:mda"
    xmlns:gdst="https://traceability-dialogue.org" schemaVersion="0" creationDate="2001-12-17T09:30:47Z" xsi:schemaLocation="urn:epcglobal:epcis:xsd:1  http://www.gs1si.org/BMS/epcis/1_2/EPCglobal-epcis-1_2.xsd">
    <EPCISHeader>
        <sbdh:StandardBusinessDocumentHeader>
            <sbdh:HeaderVersion>1.0</sbdh:HeaderVersion>
            <sbdh:Sender>
                <sbdh:Identifier>test</sbdh:Identifier>
                <sbdh:ContactInformation>
                    <sbdh:Contact>test</sbdh:Contact>
                    <sbdh:EmailAddress>test@test.com</sbdh:EmailAddress>
                </sbdh:ContactInformation>
            </sbdh:Sender>
            <sbdh:Receiver>
                <sbdh:Identifier>test</sbdh:Identifier>
                <sbdh:ContactInformation>
                    <sbdh:Contact>test</sbdh:Contact>
                    <sbdh:EmailAddress>test@test.com</sbdh:EmailAddress>
                </sbdh:ContactInformation>
            </sbdh:Receiver>
            <sbdh:DocumentIdentification>
                <sbdh:Standard>GS1</sbdh:Standard>
                <sbdh:TypeVersion>3.0</sbdh:TypeVersion>
                <sbdh:InstanceIdentifier>9999</sbdh:InstanceIdentifier>
                <sbdh:Type>Seafood Traceability</sbdh:Type>
                <sbdh:MultipleType>false</sbdh:MultipleType>
                <sbdh:CreationDateAndTime>2021-10-05T06:55:07.912-03:00</sbdh:CreationDateAndTime>
            </sbdh:DocumentIdentification>
        </sbdh:StandardBusinessDocumentHeader>
        <extension>
            <EPCISMasterData>
                <VocabularyList>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:EPCClass">
                        <VocabularyElementList>
                            <VocabularyElement id="urn:gdst:example.org:product:class:hatchery.2">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Broodstock</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">salmo salar</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:gdst:example.org:product:class:hatchery.3">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Salmon Fingerling</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">salmo salar</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:epc:idpat:sgtin:08600031303.00">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Raw Antlantic Salmon</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#speciesForFisheryStatisticsPurposesName">salmo salar</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:gdst:example.org:product:class:sweetsalmonfarm.1">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Adult Fish Feed </attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:gdst:example.org:product:class:hatchery.5">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Broodstock Fish Feed</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:gdst:example.org:product:class:hatchery.100">
                                <attribute id="urn:epcglobal:cbv:mda#descriptionShort">Fish Treatment</attribute>
                            </VocabularyElement>
                        </VocabularyElementList>
                    </Vocabulary>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:Location">
                        <VocabularyElementList>
                            <VocabularyElement id="urn:gdst:example.org:location:loc:hatchery.9">
                                <attribute id="urn:epcglobal:cbv:mda#name">Hatchery</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#streetAddressOne">4924 268th St E</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#city">Spanaway</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#state">WA</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:epc:id:sgln:08600031303.5.0">
                                <attribute id="urn:epcglobal:cbv:mda#name">Sweet Salmon Farm</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#city">Union Gap</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#state">WA</attribute>
                                <attribute id="urn:epcglobal:cbv:mda#countryCode">US</attribute>
                            </VocabularyElement>
                        </VocabularyElementList>
                    </Vocabulary>
                    <Vocabulary type="urn:epcglobal:epcis:vtype:TradingParty">
                        <VocabularyElementList>
                            <VocabularyElement id="urn:gdst:example.org:party:hatchery.1">
                                <attribute id="urn:epcglobal:cbv:mda#name">Hatchery Company</attribute>
                            </VocabularyElement>
                            <VocabularyElement id="urn:epc:id:sgln:08600031303.1.0">
                                <attribute id="urn:epcglobal:cbv:mda#name">Sweet Salmon Farm</attribute>
                            </VocabularyElement>
                        </VocabularyElementList>
                    </Vocabulary>
                </VocabularyList>
            </EPCISMasterData>
        </extension>
    </EPCISHeader>
    <EPCISBody>
        <EventList>
            <ObjectEvent>
                <eventTime>2021-08-23T20:01:59.999Z</eventTime>
                <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                <baseExtension>
                    <eventID>221dfc3b-50d4-4948-acb7-335427e9b4a2</eventID>
                </baseExtension>
                <epcList/>
                <action>OBSERVE</action>
                <bizStep>urn:epcglobal:cbv:bizstep:shipping</bizStep>
                <disposition>urn:epcglobal:cbv:disp:active</disposition>
                <readPoint>
                    <id/>
                </readPoint>
                <bizLocation>
                    <id>urn:gdst:example.org:location:loc:hatchery.9</id>
                </bizLocation>
                <extension>
                    <quantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.3.SF-08212021</epcClass>
                            <quantity>10000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </quantityList>
                    <sourceList>
                        <source type="urn:epcglobal:cbv:sdt:owning_party">urn:gdst:example.org:party:hatchery.1</source>
                    </sourceList>
                    <destinationList>
                        <destination type="urn:epcglobal:cbv:sdt:owning_party">urn:epc:id:sgln:08600031303.1.0</destination>
                    </destinationList>
                </extension>
                <cbvmda:certificationList>
                    <certification>
                        <gdst:certificateType>urn:gdst:certType:harvestCoC</gdst:certificateType>
                        <certificationStandard/>
                        <certificationAgency/>
                        <certificationValue/>
                        <certificationIdentification/>
                    </certification>
                </cbvmda:certificationList>
                <gdst:productOwner>urn:epc:id:sgln:08600031303.1.0</gdst:productOwner>
                <cbvmda:informationProvider>urn:gdst:example.org:party:hatchery.1</cbvmda:informationProvider>
            </ObjectEvent>
            <ObjectEvent>
                <eventTime>2021-08-25T20:02:35.231Z</eventTime>
                <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                <baseExtension>
                    <eventID>3ab19d1c-e578-4f07-84c1-ec0a06fb5311</eventID>
                </baseExtension>
                <epcList/>
                <action>OBSERVE</action>
                <bizStep>urn:epcglobal:cbv:bizstep:receiving</bizStep>
                <disposition>urn:epcglobal:cbv:disp:active</disposition>
                <readPoint>
                    <id/>
                </readPoint>
                <bizLocation>
                    <id>urn:epc:id:sgln:08600031303.5.0</id>
                </bizLocation>
                <extension>
                    <quantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.3.SF-08212021</epcClass>
                            <quantity>10000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </quantityList>
                </extension>
                <cbvmda:certificationList>
                    <certification>
                        <gdst:certificateType>urn:gdst:certType:harvestCoC</gdst:certificateType>
                        <certificationStandard/>
                        <certificationAgency/>
                        <certificationValue/>
                        <certificationIdentification/>
                    </certification>
                </cbvmda:certificationList>
                <gdst:productOwner>urn:epc:id:sgln:08600031303.1.0</gdst:productOwner>
                <cbvmda:informationProvider>urn:epc:id:sgln:08600031303.1.0</cbvmda:informationProvider>
            </ObjectEvent>
            <extension>
                <TransformationEvent>
                    <eventTime>2021-08-01T13:00:00.000Z</eventTime>
                    <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                    <baseExtension>
                        <eventID>c0bbba77-95cf-4961-806c-d751825eefe0</eventID>
                    </baseExtension>
                    <bizStep>urn:gdst:bizstep:farmStocking</bizStep>
                    <transformationID>hatching_08012021</transformationID>
                    <disposition>urn:epcglobal:cbv:disp:active</disposition>
                    <readPoint>
                        <id/>
                    </readPoint>
                    <bizLocation>
                        <id>urn:gdst:example.org:location:loc:hatchery.9</id>
                    </bizLocation>
                    <inputQuantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.2.BS-06012021</epcClass>
                            <quantity>10000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </inputQuantityList>
                    <gdst:humanWelfarePolicy/>
                    <gdst:productOwner>urn:gdst:example.org:party:hatchery.1</gdst:productOwner>
                    <cbvmda:informationProvider>urn:gdst:example.org:party:hatchery.1</cbvmda:informationProvider>
                </TransformationEvent>
            </extension>
            <extension>
                <TransformationEvent>
                    <eventTime>2021-08-21T19:39:32.646Z</eventTime>
                    <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                    <baseExtension>
                        <eventID>0f021f8a-48d3-407c-9233-d14d784c07d7</eventID>
                    </baseExtension>
                    <bizStep>urn:gdst:bizStep:hatching</bizStep>
                    <transformationID>hatching_08012021</transformationID>
                    <disposition>urn:epcglobal:cbv:disp:active</disposition>
                    <readPoint>
                        <id/>
                    </readPoint>
                    <bizLocation>
                        <id>urn:gdst:example.org:location:loc:hatchery.9</id>
                    </bizLocation>
                    <inputQuantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.5.BFF-03012021</epcClass>
                            <quantity>100</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.100.BST-02012021</epcClass>
                            <quantity>1</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.5.BFF-01012021</epcClass>
                            <quantity>5</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </inputQuantityList>
                    <outputQuantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.3.SF-08212021</epcClass>
                            <quantity>10000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </outputQuantityList>
                    <ilmd>
                        <cbvmda:certificationList>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:harvestCert</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:harvestCoC</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:humanPolicy</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                        </cbvmda:certificationList>
                    </ilmd>
                    <gdst:humanWelfarePolicy/>
                    <gdst:productOwner>urn:gdst:example.org:party:hatchery.1</gdst:productOwner>
                    <cbvmda:informationProvider>urn:gdst:example.org:party:hatchery.1</cbvmda:informationProvider>
                </TransformationEvent>
            </extension>
            <extension>
                <TransformationEvent>
                    <eventTime>2021-09-01T20:03:14.798Z</eventTime>
                    <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                    <baseExtension>
                        <eventID>757f070b-989e-4ce2-b00b-cb9bed828e89</eventID>
                    </baseExtension>
                    <bizStep>urn:gdst:bizstep:farmStocking</bizStep>
                    <transformationID>salmon_pond2_09012021</transformationID>
                    <disposition>urn:epcglobal:cbv:disp:active</disposition>
                    <readPoint>
                        <id/>
                    </readPoint>
                    <bizLocation>
                        <id>urn:epc:id:sgln:08600031303.5.0</id>
                    </bizLocation>
                    <inputQuantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.3.SF-08212021</epcClass>
                            <quantity>1000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </inputQuantityList>
                    <gdst:humanWelfarePolicy/>
                    <gdst:productOwner>urn:epc:id:sgln:08600031303.1.0</gdst:productOwner>
                    <cbvmda:informationProvider>urn:epc:id:sgln:08600031303.1.0</cbvmda:informationProvider>
                </TransformationEvent>
            </extension>
            <extension>
                <TransformationEvent>
                    <eventTime>2021-09-29T20:06:42.622Z</eventTime>
                    <eventTimeZoneOffset>-00:00</eventTimeZoneOffset>
                    <baseExtension>
                        <eventID>937e608a-cbb7-40b8-832a-bf9e787d743e</eventID>
                    </baseExtension>
                    <bizStep>urn:gdst:bizStep:farmHarvest</bizStep>
                    <transformationID>salmon_pond2_09012021</transformationID>
                    <disposition>urn:epcglobal:cbv:disp:active</disposition>
                    <readPoint>
                        <id/>
                    </readPoint>
                    <bizLocation>
                        <id>urn:epc:id:sgln:08600031303.5.0</id>
                    </bizLocation>
                    <inputQuantityList>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:hatchery.100.FTSS-04012021</epcClass>
                            <quantity>1</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                        <quantityElement>
                            <epcClass>urn:gdst:example.org:product:lot:class:sweetsalmonfarm.1.AVFF-08272021</epcClass>
                            <quantity>10</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </inputQuantityList>
                    <outputQuantityList>
                        <quantityElement>
                            <epcClass>.RAS-SS-09292021-02</epcClass>
                            <quantity>10000</quantity>
                            <uom>KGM</uom>
                        </quantityElement>
                    </outputQuantityList>
                    <ilmd>
                        <cbvmda:harvestStartDate>2021-09-29T03:00:00.000Z</cbvmda:harvestStartDate>
                        <cbvmda:harvestEndDate>2021-09-29T03:00:00.000Z</cbvmda:harvestEndDate>
                        <cbvmda:certificationList>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:harvestCert</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:harvestCoC</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                            <certification>
                                <gdst:certificateType>urn:gdst:certType:humanPolicy</gdst:certificateType>
                                <certificationStandard/>
                                <certificationAgency/>
                                <certificationValue/>
                                <certificationIdentification/>
                            </certification>
                        </cbvmda:certificationList>
                    </ilmd>
                    <gdst:humanWelfarePolicy/>
                    <gdst:productOwner>urn:epc:id:sgln:08600031303.1.0</gdst:productOwner>
                    <cbvmda:informationProvider>urn:epc:id:sgln:08600031303.1.0</cbvmda:informationProvider>
                </TransformationEvent>
            </extension>
        </EventList>
    </EPCISBody>
</epcis:EPCISDocument>
```


