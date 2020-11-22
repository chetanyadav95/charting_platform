import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  name = 'John Doe';
  balance = '100K';
  profitAndLoss = '20K';

  constructor() {}

  ngOnInit() {}
}
