import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  styleUrls: ['./historical-data.component.scss']
})
export class HistoricalDataComponent implements OnInit {
  candleStickChartConfig;
  showChart = false;
  constructor(private baseService: BaseService,
              private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    const mockUrl = '../../assets/mockdata/highcharts-candlestick-data.json';
    this.baseService.getLocalMockData(mockUrl).subscribe(res => {
      const data = res;
      this.candleStickChartConfig = {

        AllowDrill: false,
        IsStockChart: true,

        rangeSelector: {
            selected: 1
        },

        title: {
            text: 'AAPL Stock Price'
        },

        series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            data: data,
            dataGrouping: {
                units: [
                    [
                        'week', // unit name
                        [1] // allowed multiples
                    ], [
                        'month',
                        [1, 2, 3, 4, 6]
                    ]
                ]
            }
        }]
      };
      this.showChart = true;
      this.cdRef.detectChanges();
    });
  }

}
