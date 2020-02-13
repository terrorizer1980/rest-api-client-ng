export interface ConfigurationParameters {
    apiKeys?: {[ key: string ]: string};
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;
}

export class Configuration {
    apiKeys?: {[ key: string ]: string};
    username?: string;
    password?: string;
    accessToken?: string | (() => string);
    basePath?: string;
    withCredentials?: boolean;

    constructor(configurationParameters: ConfigurationParameters = {}) {
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }

    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param contentTypes - the array of content types that are available for selection
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    public selectHeaderContentType (contentTypes: string[], body?: string | Blob | File | Array<{ [key: string]: any; }>): string | undefined {
        if (body) {
            return this.getMimeTypeFromBody(body);
        }
        if (contentTypes.length == 0) {
            return undefined;
        }

        let type = contentTypes.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    }

    /**
     * Attempts to return the valid mime-type based on the type of content detected from the body param.
     * @param body - the content to try and detect mime-type from
     * @returns the mime-type of the content to return or undefined if it could not be detected.
     */
    getMimeTypeFromBody(body?: string | Blob | File | Array<{ [key: string]: any; }>): string | undefined {
        if (body) {
            if((body as File).type || (body as File).name) {
                // is file
                let retVal = (body as File).type !== '' ? (body as File).type : 'text/plain';
                switch( retVal ) {
                    case 'application/vnd.ms-excel':
                        if( (body as File).name && (body as File).name.toUpperCase().indexOf('.CSV') > 1) {
                            // force text/csv since windows is dumb
                            retVal = 'text/csv';
                        }
                        break;
                    case 'application/vnd.ms-excel charset=UTF-8':
                        if( (body as File).name && (body as File).name.toUpperCase().indexOf('.CSV') > 1) {
                            // force text/csv since windows is dumb
                            retVal = 'text/csv charset=UTF-8';
                        }
                        break;
                    case 'application/json':
                        break;
                    case 'x-jsonlines':
                        break;
                    default:
                        if((body as File).type === '' && (body as File).name !== '' && (body as File).name.indexOf('.') > 0) {
                            // has extenstion
                            const fExt = (body as File).name.substring( (body as File).name.indexOf('.')+1 ).toUpperCase();
                            switch(fExt) {
                                case 'JSONL':
                                    retVal = 'application/x-jsonlines';
                                    break;
                                case 'CSV':
                                    retVal = 'text/csv';
                                    break;
                                case 'XLS':
                                    retVal = 'application/vnd.ms-excel';
                                    break;
                            }
                        }
                        break;
                }
                return retVal;
            } else if(typeof (body as string) === 'string') {
                // probably json
                try{
                    const isValidJSON = JSON.parse((body as string));
                    if(isValidJSON && isValidJSON.length >= 1 && isValidJSON.forEach) {
                        // probably json lines
                        return 'application/x-jsonlines';
                    }
                    return 'application/json';
                } catch(err) {
                    // maybe csv plain text
                    return 'text/csv';
                }
            }
        }
    }

    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param accepts - the array of content types that are available for selection.
     * @returns the selected content-type or <code>undefined</code> if no selection could be made.
     */
    public selectHeaderAccept(accepts: string[], body?: string | Blob | File | Array<{ [key: string]: any; }>): string | undefined {
        if (body) {
            return this.getMimeTypeFromBody(body);
        }
        if (accepts.length == 0) {
            return undefined;
        }

        let type = accepts.find(x => this.isJsonMime(x));
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    }

    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param mime - MIME (Multipurpose Internet Mail Extensions)
     * @return True if the given MIME is JSON, false otherwise.
     */
    public isJsonMime(mime: string): boolean {
        const jsonMime: RegExp = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    }
}
