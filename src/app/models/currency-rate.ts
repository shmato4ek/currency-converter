import { Currency } from "./enums/currency";

export interface CurrencyRate {
    currency: Currency,
    rate: number
}