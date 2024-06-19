import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  // standalone: true,
  // imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  // @Input() results?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  // user service
  constructor(private investmentService: InvestmentService) {}

  get results() {
    return this.investmentService.resultData;
  }
}
