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
    private readonly baseCurrency = environment.baseCurrency;
    private readonly additionalCurrencies = environment.additionalCurrencies;

    public getCurrencyRates() {
        let currencies = [] as CurrencyRateModel[];
        let currencySymbols = this.currencyArrayToString(this.additionalCurrencies);

        this.getBaseCurrencies(currencySymbols)
            .subscribe(resp => {
                let rates = Object.keys(resp.rates);
                rates.forEach(rateName => {
                    let currencyModel: CurrencyRateModel = {
                        baseCurrency: environment.baseCurrency,
                        targetCurrency: rateName,
                        rate: resp.rates[rateName]
                    }

                    currencies.push(currencyModel);
                });
                console.log(currencies);
                return currencies;
            })
    }

    private getBaseCurrencies(currencySymbols: string) {
        return this.getCurrency(this.baseCurrency, currencySymbols)
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