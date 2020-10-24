import { HostListener, Directive, Input, Output, EventEmitter,
  ElementRef, Renderer2, Injectable, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import * as Stockcharts from 'highcharts/highstock';
declare var require: any;
require('highcharts/modules/heatmap')(Highcharts);
require('highcharts/modules/treemap')(Highcharts);
require('highcharts/highcharts-more')(Highcharts);

@Directive({
  selector: '[chartWidget]',
})
export class ChartWidgetDirective implements OnInit {
  @Input() config: any;
  @Output() eventHandler: EventEmitter<any> = new EventEmitter<any>();
  private _chart: any;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    Highcharts.setOptions({
      lang: {
        decimalPoint: '.',
        thousandsSep: ',',
      },
    });
    this.config.chartAPI = {};
    this.config.chartAPI.updateChart = this.updateChart.bind(this);
    this.config.chartAPI.reflowChart = this.reflowChart.bind(this);
    this.renderGraph();
  }

  renderGraph() {
    if (this.config.IsStockChart) {
      this._chart = Stockcharts.stockChart(
        this.element.nativeElement,
        this.getStockChartJson()
      );
    } else {
      this._chart = Highcharts.chart(
        this.element.nativeElement,
        this.getChartJson()
      );
    }
    this.eventHandler.emit({ eventType: 'render' });
  }

  getTreemapChartJson() {
    const thisRef = this;
    return {
      credits: {
        enabled: false,
      },
      colorAxis: {
        stops: [
          [0, '#4179b0'],
          [0.1, '#5ac6be'],
          [0.3, '#abe2b3'],
          [0.5, '#fee77b'],
          [0.7, '#ebd555'],
          [0.9, '#c31f1f'],
        ],
      },
      series: [
        {
          type: thisRef.config.seriesData.type,
          layoutAlgorithm: thisRef.config.seriesData.layoutAlgorithm,
          tooltip: thisRef.config.seriesData.tooltip,
          data: thisRef.config.seriesData.data,
          cursor: thisRef.config.seriesData.cursor,
          turboThreshold: 0,
          events: {
            /** for future use */
            // dblclick: function (event) {
            //     thisRef.eventHandler.emit({ event: event, eventType: 'doubleClick', data: {} });
            // },
            click: (event) => {
              thisRef.eventHandler.emit({
                event: event,
                eventType: 'click',
                data: {},
              });
            },
            contextmenu: (event) => {
              thisRef.eventHandler.emit({
                event: event,
                eventType: 'contextMenu',
                data: {},
              });
            },
          },
        },
      ],
      title: {
        align: 'left',
        verticalAlign: 'bottom',
        style: {
          fontSize: '12px',
        },
        text: (() => {
          const data = thisRef.config.graphTitle;
          return data;
        })(),
      },
    };
  }
  getStockChartJson() {
    const thisRef = this;
    const standardFontSize = '12px';
    const standardFontFamily = 'Noto Sans, sans-serif';
    const standardColor = '#5c5c5c';
    const chartObj = {
        chart: {
          style: {
            fontSize: standardFontSize,
            fontFamily: standardFontFamily,
            color: standardColor,
          },
        },
        colors: [
          '#2196f3',
          '#f44336',
          '#ff9800',
          '#4caf50',
          '#9c27b0',
          '#3f51b5',
          '#00bcd4',
          '#e91e63',
          '#8bc34a',
          '#c62828',
          '#ef6c00',
          '#795548',
          '#9e9e9e',
          '#607d8b',
          '#1565c0',
          '#ad1457',
          '#4527a0',
          '#00838f',
          '#4e342e',
          '#37474f',
        ],

        series: (() => {
          if (thisRef.config.series && thisRef.config.series.length > 0) {
            thisRef.config.series[0].turboThreshold = 0;
          }
          thisRef.bindEventsOnseries(thisRef.config.series);
          return thisRef.config.series;
        })(),
      };
    return chartObj;
  }

  getChartJson() {
    const thisRef = this;
    const standardFontSize = '12px';
    const standardFontFamily = 'Noto Sans, sans-serif';
    const standardColor = '#5c5c5c';
    const chartObj = {
        chart: {
          style: {
            fontSize: standardFontSize,
            fontFamily: standardFontFamily,
            color: standardColor,
          },
          type: this.config.chart.type,
          zoomType: this.config.chart.zoomType,
        },
        credits: {
          enabled: false,
        },
        colors: [
          '#2196f3',
          '#f44336',
          '#ff9800',
          '#4caf50',
          '#9c27b0',
          '#3f51b5',
          '#00bcd4',
          '#e91e63',
          '#8bc34a',
          '#c62828',
          '#ef6c00',
          '#795548',
          '#9e9e9e',
          '#607d8b',
          '#1565c0',
          '#ad1457',
          '#4527a0',
          '#00838f',
          '#4e342e',
          '#37474f',
        ],
        xAxis: (() => {
          return thisRef.config.xAxis;
        })(),
        yAxis: (() => {
          return thisRef.config.yAxis;
        })(),
        plotOptions: thisRef.config.plotOptions || {},
        tooltip: thisRef.config.tooltip || {},
        title: {
          align: 'left',
          verticalAlign: 'bottom',
          style: {
            fontSize: '12px',
          },
          text: (() => {
            const data = thisRef.config.graphTitle;
            return data;
          })(),
        },
        init: false,
        legend: {
          align: 'center',
          maxHeight: 40,
          symbolRadius: 0,
          itemWidth: thisRef.config.legendWidth || 120,
          navigation: {
            arrowSize: 9,
            style: {
              fontWeight: 'bold',
              color: '#333',
              fontSize: '12px',
            },
          },
        },
        series: (() => {
          if (thisRef.config.series && thisRef.config.series.length > 0) {
            thisRef.config.series[0].turboThreshold = 0;
          }
          thisRef.bindEventsOnseries(thisRef.config.series);
          return thisRef.config.series;
        })(),
      };
    return chartObj;
  }

  bindEventsOnseries(series) {
    if (series.length > 0) {
      let thisRef = this,
        events = {
          /** for future use */
          // dblclick: function (event) {
          //     thisRef.eventHandler.emit({ event: event, eventType: 'doubleClick', data: { category: this, series: series } });
          // },
          click: function (event) {
            thisRef.eventHandler.emit({
              event: event,
              eventType: 'click',
              data: { category: this, series: series },
            });
          },
          contextmenu: function (event) {
            thisRef.eventHandler.emit({
              event: event,
              eventType: 'contextMenu',
              data: { category: this, series: series },
            });
          },
        };
      series.forEach((data, index) => {
        data.events = Object.assign(events);
      });
    } else {
      return;
    }
  }

  updateChart() {
    for (let i = this._chart.series.length - 1; i > -1; i--) {
      this._chart.series[i].remove();
    }

    for (const iterator of this.config.series) {
      this._chart.addSeries(iterator);
    }

    this._chart.update(this.getChartJson());
    this.eventHandler.emit({ eventType: 'update' });
  }

  reflowChart() {
    this._chart.reflow();
    this.eventHandler.emit({ eventType: 'reflow' });
  }
}
