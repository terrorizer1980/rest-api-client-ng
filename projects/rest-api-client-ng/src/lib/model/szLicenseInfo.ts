/**
 * Senzing REST API
 * This is the Senzing REST API.  It describes the REST interface to Senzing API functions available via REST.  It leverages the Senzing native API which is documented at [https://docs.senzing.com](https://docs.senzing.com)
 *
 * OpenAPI spec version: 1.7.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

/**
 * Describes the Senzing product license.
 */
export interface SzLicenseInfo { 
    /**
     * The customer information associated with the license.
     */
    customer?: string;
    /**
     * The contract information associated with the license.
     */
    contract?: string;
    /**
     * The description of the type of license.
     */
    licenseType?: string;
    /**
     * The description of the license level.
     */
    licenseLevel?: string;
    /**
     * The billing information associated with the license
     */
    billing?: string;
    /**
     * The issuance date for the license.
     */
    issuanceDate?: Date;
    /**
     * The expiration date for the license.
     */
    expirationDate?: Date;
    /**
     * The record limit associated with the license.
     */
    recordLimit?: number;
}