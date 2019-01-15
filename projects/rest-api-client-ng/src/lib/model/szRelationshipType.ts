/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.4
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes how an entity is related to another (either a possible match, a discovered possible relationship or a disclosed relationship)
 */
export type SzRelationshipType = 'POSSIBLE_MATCH' | 'POSSIBLE_RELATION' | 'DISCLOSED_RELATION';

export const SzRelationshipType = {
    POSSIBLEMATCH: 'POSSIBLE_MATCH' as SzRelationshipType,
    POSSIBLERELATION: 'POSSIBLE_RELATION' as SzRelationshipType,
    DISCLOSEDRELATION: 'DISCLOSED_RELATION' as SzRelationshipType
};