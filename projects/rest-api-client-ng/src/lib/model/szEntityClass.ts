/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.8.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes an entity class.
 */
export interface SzEntityClass { 
    /**
     * The entity class code.
     */
    entityClassCode?: string;
    /**
     * The entity class ID.  The value can be null when used for input in  creating an entity class to indicate that the entity class ID  should be auto-generated.
     */
    entityClassId?: number;
    /**
     * Whether or not entities having entity types belong to this entity class will resolve with each other.  This is `true` if they will resolve and `false` if they will not.
     */
    resolving?: boolean;
}