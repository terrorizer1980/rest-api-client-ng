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
 */import { SzEntityData } from './szEntityData';
import { SzEntityPath } from './szEntityPath';


/**
 * Describes a path between two entities using the entity IDs of the entities in the path and includes the data from the actual entities on the path.
 */
export interface SzEntityPathData { 
    entityPath?: SzEntityPath;
    /**
     * The array of EntityData objects describing the entities on the path.  This will include partial information on the first-degree related entities to the entity.
     */
    entities?: Array<SzEntityData>;
}