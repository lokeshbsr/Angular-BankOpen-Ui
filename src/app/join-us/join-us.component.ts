import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css']
})

export class JoinUsComponent implements OnInit {
  monthlyIncome = 0;
  monthlyExpense = 0;
  loanAmount= 0.00
  max = 300000;
  min = 100000;
  maxValue: string;
  minValue: string;
  updatedMonthlyIncome: string;
  monthlyExpenseString: string;
  tensureOptions: { value: number; label: string; }[];
  color: string;
  constructor() { }

  ngOnInit() {
    this.maxValue = this.max.toFixed(0).toString()
    .replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.minValue = this.min.toFixed(0).toString()
    .replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    this.monthlyExpense=50000;
    this.color='primary';
    this.tensureOptions = [
      {
        value: 0,
        label:"3 Months",
      },
      {
        value: 1,
        label:"6 Months",
      }
    ]
  }

  update(type: any, event: any) {
    let x = event.value.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    switch(type){
      case 'expense':
        this.monthlyExpenseString = res
        break;
      case 'income':
          this.updatedMonthlyIncome = res
          .toLocaleString();
        break;
    }
  }

}
