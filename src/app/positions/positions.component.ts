import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.scss']
})
export class PositionsComponent implements OnInit {

  constructor() { }

  positionList = [];
  headers: any;
  dataList: any;
  ngOnInit() {
    this.setPositionList();
    this.getData('Ongoing');
  }

  setPositionList() {
    this.positionList = ['Ongoing', 'Pending', 'Completed']
  }

  getTableHeaders() {
    this.headers = ['Instrument', 'Qty.', 'Price', 'SL'];
  }

  getData(position) {
    switch (position) {
      case 'Ongoing':
        this.dataList = [
          { 'instrument': 'Reliance', 'qty': '2000', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '74657', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '77', 'price': '45', 'sl': '1245' }
        ]
        break;
      case 'Pending':
        this.dataList = [
          { 'instrument': 'Reliance', 'qty': '3464', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '7364657', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '77', 'price': '45', 'sl': '1245' }
        ]
        break;
      case 'Completed':
        this.dataList = [
          { 'instrument': 'Reliance', 'qty': '554455', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '74657', 'price': '2351', 'sl': '1245' },
          { 'instrument': 'Reliance', 'qty': '77', 'price': '45', 'sl': '1245' }
        ]
        break;
    }
  }
}

