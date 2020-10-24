import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter,
    Input, OnInit, Output, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-chart-wrapper',
  templateUrl: './chart-wrapper.component.html',
  styleUrls: ['./chart-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChartWrapperComponent implements OnInit {
  static componentId = 'ChartWrapperComponent';
  @Input() config;
  @Output() drillDownChart = new EventEmitter();
  clicks = 0;
  constructor(private renderer: Renderer2, private element: ElementRef) {}

  ngOnInit() {
    this.config.subject = new Subject();
    this.config.actionObserver$ = this.config.subject.asObservable();
    this.config.actionObserver$.subscribe((event) => {
      // this.renderer.setStyle(this.element.nativeElement.querySelector('[chartwidget]'),'height',event.event.target.offsetHeight + 'px');
      setTimeout(() => {
        this.config.chartAPI.reflowChart();
      }, 500);
    });
    setTimeout(() => {
      this.config.chartAPI.reflowChart();
    }, 300);
  }

  findAncestor(el, cls) {
    while ((el = el.parentElement) && !el.classList.contains(cls));
    return el;
  }

  eventHandler(event) {
    if (event.eventType === 'render') {
      setTimeout(() => {
        //this.positioning()
      });
    }
    if (this.config.apis) {
      event.eventType == 'click' &&
        this.config.apis.drillDownCall &&
        this.config.apis.drillDownCall({
          eventObj: event,
          chartConfig: this.config,
        });
      this.clicks++;
      setTimeout(() => {
        if (this.clicks === 1) {
          // functionality on single click
        }
        if (this.clicks === 2) {
          this.drillDownChart.emit({
            eventObj: event,
            chartConfig: this.config,
          }); // drill down on double click
        }
        this.clicks = 0;
      }, 300);
    }
    // this.config.subscriptions.next({ actionId: event.eventType, cardId: this.config.cardId, event: event });
  }
}
