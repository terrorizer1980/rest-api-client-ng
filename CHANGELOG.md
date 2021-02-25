# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
[markdownlint](https://dlaa.me/markdownlint/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.2.0] - 2021-TBD

- Dependency security updates and bugfixes.

## [2.2.0] - 2020-10-16

the models need to be updated to match the 2.2.0 specification release.
https://github.com/Senzing/senzing-rest-api-specification/releases/tag/2.2.0

- Added `SzNameScoring` to describe name scoring details
- Added `SzSearchFeatureScore` for search feature scores
- Modified `SzBaseRelatedEntity` to remove `fullNameScore` field since it has
not been populated since switch to version 2.0.0 of native Senzing SDK and
never made sense in the "base class" since only `SzAttributeSearchResult` had
this field populated under native Senzing SDK version 1.x.
- Added `bestNameScore` field to `SzAttributeSearchResult` to replace
`fullNameScore` in the place where the name score was previously
used with version 1.x of the native Senzing SDK (i.e.: to sort search results
based on the strength of the name match).
- Modified `SzAttributeSearchResult` to include the `featureScores` field to
provide feature scores without using "raw data"
- Added `nameScoringDetails` field to `SzFeatureScore` class to provide
`SzNameScoring` name scoring details on why operations,
- Updated `com.senzing.api.model.SzFeatureScore` to define its `score` field as 
the most sensible score value from the `nameScoringDetails` for `"NAME"`
features since the `FULL_SCORE` field is not available for names.
- Added the `NOT_SCORED` value for `SzScoringBucket` enum.

## [2.1.0] - 2020-9-20

Maintenance release for framework upgrade to Angular 10: see [https://blog.angular.io/version-10-of-angular-now-available-78960babd41](https://blog.angular.io/version-10-of-angular-now-available-78960babd41)

Major updates to most dependency versions have also been made which should improve file sizes, security, and stability.

The following Senzing projects have also been updated to operate on Angular 10,
see the following links for associated tickets:
- [sdk-components-ng/issues/143](https://github.com/Senzing/sdk-components-ng/issues/143)
- [rest-api-client-ng/issues/39](https://github.com/Senzing/rest-api-client-ng/issues/39)
- [sdk-graph-components/issues/37](https://github.com/Senzing/sdk-graph-components/issues/37)

## 2.0.1 - 2020-9-20

Minor updates to dependency versions. Security patches.


## 2.0.0 - 2020-07-06

### Added to 2.0.0

ConfigService.getDataSources
EntityDataService.reevaluateEntity
EntityDataService.reevaluateRecord
EntityDataService.whyEntityByEntityID
EntityDataService.whyEntityByRecordID
EntityDataService.whyRecords
EntityDataService.deleteRecord

### Removed in 2.0.0

ConfigService.addEntityClasses
ConfigService.getCurrentConfig
ConfigService.getDefaultConfig

### Refactored in 2.0.0

ConfigService.listDataSources: renamed to `ConfigService.getDataSources`
ConfigService.listEntityClasses: renamed to `ConfigService.getEntityClasses`
ConfigService.listEntityTypes: renamed to `ConfigService.getEntityTypes`
ConfigService.listEntityTypesByClass: renamed to `ConfigService.getEntityTypesByClass`

EntityDataService: `withRelated` arg type(s) globally changed from `string: 'NONE' | 'REPRESENTATIVE' | 'WITH_DUPLICATES'` to `SzRelationshipMode: NONE | PARTIAL | FULL as SzRelationshipMode`
EntityDataService.addRecord: `withInfo` and `withRaw` arguments added
EntityDataService.addRecordWithReturnedRecordId: `withInfo` and `withRaw` arguments added
EntityDataService.getDataSourceRecord: renamed to `EntityDataService.getRecord`
EntityDataService.getEntityByEntityId: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.getEntityByEntityId: `forceMinimal` argument added
EntityDataService.getEntityByEntityId: order of args changed from:
    `entityId, featureMode, forceMinimal, withFeatureStats, withDerivedFeatures, withRelated, withRaw, observe, reportProgress`
to:
    `entityId, featureMode, withFeatureStats, withInternalFeatures, forceMinimal, withRelated, withRaw, observe, reportProgress`
EntityDataService.searchByAttributes: order of args changed from:
    `attrs, attr, withRelationships, featureMode, withFeatureStats, withDerivedFeatures, forceMinimal, withRaw, observe, reportProgress`
to:
    `attrs, attr, featureMode, withFeatureStats, withInternalFeatures, forceMinimal, withRelationships, withRaw, observe, reportProgress`
EntityDataService.getEntityByRecordId: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.whyEntityByEntityID: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityDataService.whyEntityByRecordID: `withDerivedFeatures` renamed to `withInternalFeatures`

EntityGraphService.findNetworkByEntityID: renamed to `EntityGraphService.findEntityNetwork`
EntityGraphService.findPathByEntityID: renamed to `EntityGraphService.findEntityPath`
EntityGraphService.findEntityNetwork: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityGraphService.findEntityNetwork: "e" arg type changed from `Array<string|number>` to `Array<SzEntityIdentifier>` which is equal to `Array<number | SzRecordId | string>`
EntityGraphService.findEntityNetwork: "entities" arg type changed from `string` to `SzEntityIdentifiers` which is equal to `Array<number> | Array<SzRecordId | string>`
EntityGraphService.findEntityPath: `withDerivedFeatures` renamed to `withInternalFeatures`
EntityGraphService.findEntityPath: `x` arg type changed from `SzEntityIdentifiers` to `Array<SzEntityIdentifier>` (superficial type change)
EntityGraphService.findEntityPath: `featureMode` arg type changed from `string` to `featureMode` (enum 'NONE' | 'REPRESENTATIVE' | 'WITHDUPLICATES')

## [1.0.2] - 2019-06-05

### Added to 1.0.2

- minor update to projects/rest-api-client-ng/src/lib/model/szEntityPath.ts to support Graph Components.
model was incorrect.
