import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient, HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export abstract class ResourceService<T> {
    private readonly apiUrl = environment.currencyRatesApiUrl;
    private readonly apiKey = environment.currencyRatesApiKey;

    constructor(protected httpClient: HttpClient) {}

    getCurrency(base: string, symbols: string) : Observable<HttpResponse<T>> {
        return this.httpClient
            .get<T>(`${this.apiUrl}?api_key=${this.apiKey}&symbols=${symbols}&base=${base}`, { observe: 'response' })
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(() => error);
    }
}