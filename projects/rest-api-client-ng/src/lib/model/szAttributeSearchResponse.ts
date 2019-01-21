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
 */
//import { ModelObject } from './modelObject';
import { SzAttributeSearchResponseData } from './szAttributeSearchResponseData';
import { SzResponseWithRawData } from './szResponseWithRawData';


export interface SzAttributeSearchResponse extends SzResponseWithRawData { 
    data?: SzAttributeSearchResponseData;
}