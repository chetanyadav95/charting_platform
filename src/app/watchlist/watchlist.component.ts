import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchlistComponent implements OnInit {
  stock = '';
  item = 0;
  stocks = [];
  constructor() {}

  ngOnInit(): void {}
  createstock(event: Event) {
    this.stock = (event.target as HTMLInputElement).value;
    // this.stocks.push(this.stock);
  }
  addstock() {
    this.stocks.push(this.stock);

  }
  deletestock(item) {
    this.stocks.splice(item, 1);
  }
}
