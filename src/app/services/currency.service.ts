import { Injectable } from "@angular/core";
import { ResourceService } from "./resource.service";
import { CurrencyRatesResponse } from "../models/currency-rates-response";
import { environment } from "../../environments/environment";
import { map } from "rxjs/operators"
import { CurrencyRateModel } from "../models/currency-rate-model";

@Injectable({
    providedIn: 'root'
})

export class CurrencyService extends ResourceService<CurrencyRatesResponse> {
    private allCurrencies = [] as CurrencyRateModel[];

    public getCurrencyRates() {
        const currentCurrencies = environment.currencies;

        currentCurrencies.forEach(currency => {
            const targetCurrencies = currentCurrencies.filter(c => c != currency);
            const currencySymbols = this.currencyArrayToString(targetCurrencies);

            this.getCurrencies(currency, currencySymbols)
                .subscribe(resp => {
                    let rates = Object.keys(resp.rates);
                    rates.forEach(rateName => {
                        let currencyModel: CurrencyRateModel = {
                            baseCurrency: currency,
                            targetCurrency: rateName,
                            rate: resp.rates[rateName]
                        }

                        this.allCurrencies.push(currencyModel);
                    });
                });
        });

        return this.allCurrencies;
    }

    private getCurrencies(baseCurrency: string, targetCurrencies: string) {
        return this.getCurrency(baseCurrency, targetCurrencies)
            .pipe(
                map((resp) => {
                    return resp.body as CurrencyRatesResponse;
                })
            );
    }

    private currencyArrayToString(currencyArray: string[]) {
        let currencySymbols = '';
        let count = 0;
        
        currencyArray.forEach(currency => {
            if(count != 0) {
                currencySymbols += `,${currency}`
            } else {
                currencySymbols += currency
            }
            
            count++;
        });

        return currencySymbols;
    }
}