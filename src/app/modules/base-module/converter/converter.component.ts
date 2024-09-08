import { Component, Input, OnInit } from '@angular/core';
import { CurrencyService } from '../../../services/currency.service';
import { CurrencyRateModel } from '../../../models/currency-rate-model';
import { environment } from '../../../../environments/environment';
import { ValidationHelper } from '../../../helpers/validation-helper';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})

export class ConverterComponent implements OnInit{
  @Input() currencies = [] as CurrencyRateModel[];

  baseAmount = {} as number;
  targetAmount = {} as number;
  currentCurrency = {} as number;

  currentCurrenciesNames = [] as string[];

  selectedBaseCurrency = {} as string;
  selectedTargetCurrency = {} as string;

  isActiveErrorMessage = false;
  errorMessage = '';

  ngOnInit(): void {
    this.currentCurrenciesNames = environment.currencies;

    this.currencies = this.currencyService.getCurrencyRates();

    this.selectedBaseCurrency = 'UAH';
    this.selectedTargetCurrency = 'USD';

    this.currentCurrency = this.getCurrencyByName(this.selectedBaseCurrency, this.selectedTargetCurrency);

    this.baseAmount = 1;
    this.targetAmount = this.baseAmount * this.currentCurrency;
  }
  
  constructor(private currencyService: CurrencyService,
              private validationHelper: ValidationHelper
  ) {}

  private getCurrencyByName(baseCurrency: string, targetCurrency: string)
  {
      return this.currencies.filter(c => c.baseCurrency == baseCurrency &&
                                          c.targetCurrency == targetCurrency)[0]?.rate;
  }

  updateCurrentCurrency() {
    if(this.selectedBaseCurrency == this.selectedTargetCurrency) {
      this.currentCurrency = 1;
    } else {
      this.currentCurrency = this.getCurrencyByName(this.selectedBaseCurrency, this.selectedTargetCurrency);
    }

    this.onAmountChange('base');
  }
  
  swapCurrencies() {
    const newBaseCurrency = this.selectedTargetCurrency;
    this.selectedTargetCurrency = this.selectedBaseCurrency;
    this.selectedBaseCurrency = newBaseCurrency;

    this.updateCurrentCurrency();
  }

  onAmountChange(type: string) {
    if(type == 'base') {
      this.targetAmount = this.baseAmount * this.currentCurrency;
    } else {
      this.baseAmount = this.targetAmount / this.currentCurrency;
    }
  }

  onKeyInput(event: any) {
    let k = event.charCode;
    let isValid = this.validationHelper.inputValidation(k);

    if(!isValid) {
      this.isActiveErrorMessage = true;
      this.errorMessage = 'Only digits can be inputed!';
    } else {
      this.isActiveErrorMessage = false;
      this.errorMessage = '';
    }

    return isValid;
  }
}
