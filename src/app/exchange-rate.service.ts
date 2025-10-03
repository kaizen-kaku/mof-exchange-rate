import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ExchangeRateResponse {
    rate_date: string;
    ttm: string;
    tts: string;
}

@Injectable({
    providedIn: 'root'
})
export class ExchangeRateService {
    private apiUrl = 'https://www.kaizenkaku.co.jp/api/exchange-rates';

    constructor(private http: HttpClient) { }

    getExchangeRate(date: string): Observable<ExchangeRateResponse> {
        return this.http.post<ExchangeRateResponse>(this.apiUrl, { date }).pipe(
        );
    }
}
