import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Money } from '../money';
import { GoogleChartComponent } from 'angular-google-charts';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  title = 'Money';
  type = 'LineChart';
  data = [['',0]];
  columnNames = ['value', 'valor'];
  options = {
  };
  width = 550;
  height = 400;
  newMoney: Money;
  moneys: Money[];
  @ViewChild('chart', { static: false }) chart: GoogleChartComponent;

  constructor() { }

  ngOnInit() {
    this.newMoney = new Money();
    this.moneys = [];
    this.data = [['',0]]
  }

  save() {
    this.moneys.push(this.newMoney);
    this.data.push([this.newMoney.date.toString(), this.newMoney.value])
    this.data = Object.assign( [], this.data );
    this.newMoney = new Money();
  }
}
