import { InvestmentService } from './../investment.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule], // for ngSubmit
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();

  constructor(private investmentService: InvestmentService) {}

  enteredInititalInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedResult = '5';
  enteredDuration = '10';
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInititalInvestment,
      annualInvestment: +this.enteredAnualInvestment,
      expectedReturn: +this.enteredExpectedResult,
      duration: +this.enteredDuration,
    });
    console.log(this.enteredInititalInvestment);
    console.log(this.enteredAnualInvestment);
    console.log(this.enteredExpectedResult);
    console.log(this.enteredDuration);
    // this.calculate.emit({
    //   initialInvestment: +this.enteredInititalInvestment,
    //   annualInvestment: +this.enteredAnualInvestment,
    //   expectedReturn: +this.enteredExpectedResult,
    //   duration: +this.enteredDuration,
    // });
  }
}
