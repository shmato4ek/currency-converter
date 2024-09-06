import { Component, OnInit } from '@angular/core';
import { CurrencyRate } from '../../../models/currency-rate';
import { Currency } from '../../../models/enums/currency';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent{
  firstCurrency: number;
  currentCurrencies = [] as string[];
  selectedValue = {} as string;
  
  constructor() {
    this.firstCurrency = 0;
    
    this.currentCurrencies.push(Currency[Currency.EUR]);
    this.currentCurrencies.push(Currency[Currency.UAH]);
    this.currentCurrencies.push(Currency[Currency.USD]);
  }

  change() {
    console.log("1111")
  }
  
}
