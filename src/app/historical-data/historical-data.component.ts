import { ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { BaseService } from '../services/base.service';
import * as Highcharts from "highcharts/highstock";
import HIndicatorsAll from "highcharts/indicators/indicators-all";
import HDragPanes from "highcharts/modules/drag-panes";
import HAnnotationsAdvanced from "highcharts/modules/annotations-advanced";
import HPriceIndicator from "highcharts/modules/price-indicator";
import HFullScreen from "highcharts/modules/full-screen";
import HStockTools from "highcharts/modules/stock-tools";
import { bindCallback } from 'rxjs';

HIndicatorsAll(Highcharts);
HDragPanes(Highcharts);
HAnnotationsAdvanced(Highcharts);
HPriceIndicator(Highcharts);
HFullScreen(Highcharts);
HStockTools(Highcharts);
@Component({
  selector: 'app-historical-data',
  templateUrl: './historical-data.component.html',
  styleUrls: ['./historical-data.component.scss']
})
export class HistoricalDataComponent implements OnInit {

  @ViewChild('popupContainer', { read: ViewContainerRef, static: true }) popupContainerRef: ViewContainerRef;
  @ViewChild('popupTemplate', { read: TemplateRef, static: true }) popupTemplateRef: TemplateRef<any>;

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
        stockTools: {
          gui: {
            enabled: true
          }
        },
        tooltip: {
          borderColor: 'black'
        },
        series: [{
            type: 'candlestick',
            name: 'AAPL Stock Price',
            upColor: 'red',
            color: 'green',
            lineColor: 'green',
            upLineColor: 'red',
            shadow: true,
            animation: {
              duration: 2000
            },
            //colorByPoint: true,
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

  openPopup(e: MouseEvent) {
    this.popupContainerRef.clear();
    this.popupContainerRef.createEmbeddedView(this.popupTemplateRef);
  }

  closePopup() {
    this.popupContainerRef.clear();
  }
}

