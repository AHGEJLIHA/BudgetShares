import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Currency} from "../../../enum/currency";

@Component({
  selector: 'other-currency',
  templateUrl: './other-currency.component.html',
  styleUrls: ['./other-currency.styles/other-currency.component.css']
})
export class OtherCurrencyComponent {
  public inputCurrency: FormControl = new FormControl();
  public exportCurrency: FormControl = new FormControl();
  public chosenCurrency: string = '$';
  public converterCurrency = {
    '$': "61.61",
    '€': "62.74",
    '₸': "0.1441",
    '₴': "2.08",
    '¥': "9.41"
  }
  public currencyEnum: string[] = Object.keys(Currency);

  constructor() {

    this.inputCurrency.valueChanges.subscribe(() => {
      this.exportCurrency.setValue(this.inputCurrency.value / this.converterCurrency[this.chosenCurrency]);
    })

    this.exportCurrency.valueChanges.subscribe(() => {
      this.inputCurrency.setValue(this.exportCurrency.value * this.converterCurrency[this.chosenCurrency]);
    })
  }
}