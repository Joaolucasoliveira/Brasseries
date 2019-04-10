import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BrasserieDataService } from './brasserie-data.service';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { IBrasserie } from './IBrasserie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  brasseries: IBrasserie[] = [];
  filteredBrasseries: IBrasserie[];
  _filter: string;
  searchTerm$: Subject<string>;

  get filter(): string {
    return this._filter;
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredBrasseries = this.brasseries.filter((brasserie) => brasserie.name.toLocaleLowerCase().startsWith(this._filter.toLocaleLowerCase()));
  }

  constructor(private brasserieDataService: BrasserieDataService) {

  }

  ngOnInit() {
    this.brasserieDataService.getBrasseries().pipe(take(1)).subscribe(
      (brasseries) => {
        this.brasseries = brasseries;
        this.filteredBrasseries = this.brasseries;
      });
  }
}
