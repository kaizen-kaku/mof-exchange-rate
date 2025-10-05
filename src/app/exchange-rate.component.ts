import { Component } from '@angular/core';
import { ExchangeRateService } from './exchange-rate.service';

@Component({
    selector: 'app-exchange-rate',
    templateUrl: './exchange-rate.component.html',
    styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {
    date: string = '';
    rateData: any = null;
    error: string = '';
    loading: boolean = false;

    constructor(private exchangeRateService: ExchangeRateService) { }

    fetchRate() {
        if (!this.date) {
            this.error = '有効な日付を入力してください。';
            return;
        }

        this.loading = true;
        this.error = '';
        this.rateData = null;

        this.exchangeRateService.getExchangeRate(this.date).subscribe({
            next: (data) => {
                this.rateData = data;
                this.loading = false;
            },
            error: (err) => {
                this.error = err.error?.error || '為替レートの取得に失敗しました';
                this.loading = false;
            }
        });
    }
}
