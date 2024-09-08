import { Component } from '@angular/core';
import { CurrencyService } from '../../../services/currency.service';
import { CurrencyRateModel } from '../../../models/currency-rate-model';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})

export class BaseComponent {
  currencies = [] as CurrencyRateModel[];

  constructor(currencyService: CurrencyService) {
    this.currencies = currencyService.getCurrencyRates();
  }
}
