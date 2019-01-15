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
 */import { SzEntityData } from './szEntityData';
import { SzEntityPath } from './szEntityPath';


/**
 * Describes a network of paths between entities using the entity IDs of the entities in the path and includes the data from the actual entities in the network.
 */
export interface SzEntityNetworkData { 
    /**
     * The array of EntityPath objects describing the paths that make up the entity network (including island networks).
     */
    entityPaths?: Array<SzEntityPath>;
    /**
     * The array of EntityData objects describing the entities on the path.  This may only include partial information on the entities at the edge of the network.
     */
    entities?: Array<SzEntityData>;
}