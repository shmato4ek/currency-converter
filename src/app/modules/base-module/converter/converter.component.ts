import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../../../models/currency-rate';
import { Currency } from '../../../models/enums/currency';
import { CurrencyRatesResponse } from '../../../models/currency-rates-response';
import { CurrencyService } from '../../../services/currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent implements OnInit{
  firstCurrency: number;
  currentCurrencies = [] as string[];
  currencies = [] as CurrencyRatesResponse[];

  firstValue = 0;
  secondValue = 0;

  ngOnInit(): void {
    console.log(this.currencyService.getCurrencyRates())
  }
  
  constructor(private currencyService: CurrencyService) {
    this.firstCurrency = 0;
    
    this.currentCurrencies.push(Currency[Currency.EUR]);
    this.currentCurrencies.push(Currency[Currency.UAH]);
    this.currentCurrencies.push(Currency[Currency.USD]);
  }

  private getCurrencies()
  {

  }
  
}
