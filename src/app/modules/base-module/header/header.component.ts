import { Component, Input, OnInit } from '@angular/core';
import { CurrencyRateModel } from '../../../models/currency-rate-model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  @Input() currencies = [] as CurrencyRateModel[];

  eurToUahCurrency = {} as string;
  usdToUahCurrency = {} as string;

  ngOnInit(): void {
    this.eurToUahCurrency = this.uahCurrenciesByName('EUR')?.toFixed(2);
    this.usdToUahCurrency = this.uahCurrenciesByName('USD')?.toFixed(2);
  }

  constructor() {}

  private uahCurrenciesByName(baseCurrencyName: string) {
    return this.currencies.filter(c => c.baseCurrency == baseCurrencyName && c.targetCurrency == 'UAH')[0]?.rate;
  }
}
