/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.5.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */import { SzRecordId } from './szRecordId';


/**
 * Identifies an entity by either its entity ID or by the data source code and record ID of one of its constituent records.
 */
export interface SzEntityIdentifier { 
    /**
     * The data source code that uniquely identifies the data source associated with the record.
     */
    src?: string;
    /**
     * The record ID that uniquely identifies a record within the respective data source.
     */
    id?: string;
}