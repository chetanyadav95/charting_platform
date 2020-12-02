import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-buy-sell-trade',
  templateUrl: './buy-sell-trade.component.html',
  styleUrls: ['./buy-sell-trade.component.scss']
})
export class BuySellTradeComponent implements OnInit {
  serverName = '';
  @Input() config: any;

  @Output() callback: EventEmitter<any> = new EventEmitter();

  model;
  stockName: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log(data);
      this.stockName = data.stock;
    });
  }

  onSubmit() {
    // alert(JSON.stringify(this.model));
    this.callback.emit();
  }

  onCancel() {
    this.callback.emit();
  }

  //   onUpdateServerName(event: Event){
  //     this.serverName=(<HTMLInputElement>event.target).value;
  //   }

}
