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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { SzEntityIdentifier } from '../model/szEntityIdentifier';
import { SzEntityIdentifiers } from '../model/szEntityIdentifiers';
import { SzEntityNetworkResponse } from '../model/szEntityNetworkResponse';
import { SzEntityPathResponse } from '../model/szEntityPathResponse';
import { SzErrorResponse } from '../model/szErrorResponse';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class EntityGraphService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Finds the entity network around one or more entities identified by their entity IDs or by the data source codes and record ID&#x27;s of their constituent records.  This attempts to find paths between the specified entities.  If no paths exist, then island networks are returned with each island network containing up to a specified number of related entities.
     * 
     * @param e The multi-valued query parameter where each value is formatted as an EntityIdentifier which may be 64-bit integer entity IDs or JSON-encoded RecordId for the constituent records.  The format for all of the provided identifiers must be the same  (i.e.: all entity IDs or all data-source / record-id combos).
     * @param maxDegrees The maximum number of degrees to look for a path between the specified entities.
     * @param buildOut The maximum number of degrees to build out around each of the specified entities regardless of those entities being on the path between entities.
     * @param maxEntities The maximum number of entities to return to prevent responses that are too large.
     * @param withRaw Whether or not to include the raw JSON response from the underlying native API.  This raw response may include additional details but lack some of the abstraction the standard response provides.  If true, then the &#x27;rawData&#x27; field in the response will be a non-null value and contain the additional details.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findNetworkByEntityID(e: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, withRaw?: boolean, observe?: 'body', reportProgress?: boolean): Observable<SzEntityNetworkResponse>;
    public findNetworkByEntityID(e: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, withRaw?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SzEntityNetworkResponse>>;
    public findNetworkByEntityID(e: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, withRaw?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SzEntityNetworkResponse>>;
    public findNetworkByEntityID(e: SzEntityIdentifiers, maxDegrees?: number, buildOut?: number, maxEntities?: number, withRaw?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (e === null || e === undefined) {
            throw new Error('Required parameter e was null or undefined when calling findNetworkByEntityID.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (e !== undefined && e !== null) {
            queryParameters = queryParameters.set('e', <any>e);
        }
        if (maxDegrees !== undefined && maxDegrees !== null) {
            queryParameters = queryParameters.set('maxDegrees', <any>maxDegrees);
        }
        if (buildOut !== undefined && buildOut !== null) {
            queryParameters = queryParameters.set('buildOut', <any>buildOut);
        }
        if (maxEntities !== undefined && maxEntities !== null) {
            queryParameters = queryParameters.set('maxEntities', <any>maxEntities);
        }
        if (withRaw !== undefined && withRaw !== null) {
            queryParameters = queryParameters.set('withRaw', <any>withRaw);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/entity-networks`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Finds a path between two entities identified by entity ID or by data sources and record IDs of constituent records.  You may provide entity IDs or data source and record IDs to identify the from/to entities in the path, but you may not mix and match.
     * 
     * @param from The EntityIdentifier for the first entity for the path either as an entity ID or a JSON-encoded RecordId for the constituent record. Whatever format is used for the \&quot;from\&quot; parameter must match the format of the \&quot;to\&quot; parameter.
     * @param to The EntityIdentifier for the last entity for the path either as an entity ID or a JSON-encoded record ID for the constituent record. Whatever format is used for the \&quot;to\&quot; parameter must match the format of the \&quot;from\&quot; parameter.
     * @param maxDegrees The maximum number of degrees to look for a path from the first entity to the last entity.
     * @param x Multi-valued query parameter containing EntityIdentifier definitions that identify entities to be avoided or forbidden from the path (depending on the forbidAvoided parameter).  The entity identifiers are either all 64-bit long integers representing entity IDs or they are all RecordId instances identifying records that are part of the resolved entities to avoid.  If this parameter is not provided, then the default is to NOT exclude any entities.
     * @param forbidAvoided If the avoidEntities parameter is provided then this flag is used to control whether or not to forbid the avoided entities rather than include them in the path as a \&quot;last resort\&quot;.
     * @param s The multi-valued query parameter where each value is a data source code identifying data sources for which one must be included in the entities for the path.  If not provided, then the default is to NOT require any specific data sources.
     * @param withRaw Whether or not to include the raw JSON response from the underlying native API.  This raw response may include additional details but lack some of the abstraction the standard response provides.  If true, then the &#x27;rawData&#x27; field in the response will be a non-null value and contain the additional details.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findPathByEntityID(from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, withRaw?: boolean, observe?: 'body', reportProgress?: boolean): Observable<SzEntityPathResponse>;
    public findPathByEntityID(from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, withRaw?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<SzEntityPathResponse>>;
    public findPathByEntityID(from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, withRaw?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<SzEntityPathResponse>>;
    public findPathByEntityID(from: SzEntityIdentifier, to: SzEntityIdentifier, maxDegrees?: number, x?: SzEntityIdentifiers, forbidAvoided?: boolean, s?: Array<string>, withRaw?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {
        if (from === null || from === undefined) {
            throw new Error('Required parameter from was null or undefined when calling findPathByEntityID.');
        }
        if (to === null || to === undefined) {
            throw new Error('Required parameter to was null or undefined when calling findPathByEntityID.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (from !== undefined && from !== null) {
            queryParameters = queryParameters.set('from', <any>from);
        }
        if (to !== undefined && to !== null) {
            queryParameters = queryParameters.set('to', <any>to);
        }
        if (maxDegrees !== undefined && maxDegrees !== null) {
            queryParameters = queryParameters.set('maxDegrees', <any>maxDegrees);
        }
        if (x !== undefined && x !== null) {
            queryParameters = queryParameters.set('x', <any>x);
        }
        if (forbidAvoided !== undefined && forbidAvoided !== null) {
            queryParameters = queryParameters.set('forbidAvoided', <any>forbidAvoided);
        }
        if (s) {
            queryParameters = queryParameters.set('s', s.join(COLLECTION_FORMATS['csv']));
        }
        if (withRaw !== undefined && withRaw !== null) {
            queryParameters = queryParameters.set('withRaw', <any>withRaw);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json; charset=UTF-8',
            'application/json',
            'default'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get(`${this.basePath}/entity-paths`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }
}
