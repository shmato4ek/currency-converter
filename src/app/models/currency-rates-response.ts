import { CurrencyRate } from "./currency-rate";

export interface CurrencyRatesResponse {
    date: Date,
    base: string,
    rates: {[name: string] : number}
}