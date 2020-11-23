import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-trading-wrapper',
  templateUrl: './demo-trading-wrapper.component.html',
  styleUrls: ['./demo-trading-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoTradingWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
