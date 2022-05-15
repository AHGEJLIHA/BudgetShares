import { HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { map, skipWhile, takeUntil } from 'rxjs/operators';
import { ContentType } from '../enums';
import { RequestResponseType } from '../enums';
import { IRequestOptions } from '../interfaces/request-options.interface';

@Injectable()
export class HttpService {

    private _takeUntil: Subject<void> = new Subject<void>();

    constructor(protected http: HttpClient) { }

    public unsubscribeAll(): void {
        this._takeUntil.next();
    }

    public request<T, F = null>(requestParams: IRequestOptions<F>): Observable<HttpResponse<T>> {

        const httpOptions: {
            headers?: HttpHeaders;
            reportProgress?: boolean;
            responseType?: RequestResponseType;
            withCredentials?: boolean;
        } = {
            headers: requestParams.headers || new HttpHeaders(),
            reportProgress: false,
            responseType: requestParams.responseType,
            withCredentials: requestParams.withCredentials
        };

        if (!requestParams.contentType) {
            requestParams.contentType = ContentType.json;
        }

        if (httpOptions.headers && !httpOptions.headers.has('Content-Type') && requestParams.contentType !== ContentType.multipartFormData && requestParams.contentType !== ContentType.textXml) {
            httpOptions.headers = httpOptions.headers.set('Content-Type', HttpService.convertContentType(requestParams.contentType));
        }

        if (!requestParams.method) {
            throw new Error('The request method is not specified');
        }

        if (!requestParams.body) {
            requestParams.body = null;
        }

        const request: HttpRequest<F> = new HttpRequest<F>(requestParams.method, requestParams.url, requestParams.body, httpOptions);

        return (this.http.request<T>(request) as Observable<HttpResponse<T>>)
            .pipe(
                skipWhile((event: HttpResponse<T>) => event.type !== HttpEventType.Response),
                map((value: HttpResponse<T>) => {

                    if (isDevMode()) {
                        const log: any = {};
                        if (requestParams.method) {
                            log[requestParams.method.toLowerCase()] = requestParams.url;
                        }
                        log['request'] = { requestParams, httpOptions };
                        log['response'] = value;
                        console.log(log);
                    }

                    return value;
                }),
                takeUntil(requestParams.unsubscriber ? merge(this._takeUntil, requestParams.unsubscriber) : this._takeUntil)
            );
    }

    private static convertContentType(contentType: ContentType): string {
        const m: Map<ContentType, string> = new Map<ContentType, string>([
            [ContentType.raw, ''],
            [ContentType.json, 'application/json'],
            [ContentType.formUrlEncoded, 'application/x-www-form-urlencoded'],
            [ContentType.multipartFormData, 'multipart/form-data'],
            [ContentType.text, 'text'],
            [ContentType.blob, 'application/octet-stream'],
            [ContentType.imageSvg, 'image/svg+xml'],
        ]);

        return m.get(contentType)!;
    }
}
