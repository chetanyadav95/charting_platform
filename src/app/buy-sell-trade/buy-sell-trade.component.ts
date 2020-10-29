import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buy-sell-trade',
  templateUrl: './buy-sell-trade.component.html',
  styleUrls: ['./buy-sell-trade.component.scss']
})
export class BuySellTradeComponent implements OnInit {

  @Input() config: any;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  model;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // alert(JSON.stringify(this.model));
    this.callback.emit();
  }

  onCancel() {
    this.callback.emit();
  }

}
