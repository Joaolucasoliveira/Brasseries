import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BrasserieDataService } from './brasserie-data.service';
import { take } from 'rxjs/operators';
import { IBrasserie } from './IBrasserie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges {
  brasseries: IBrasserie[] = [];
  filteredBrasseries: IBrasserie[];
  filter: string;

  constructor(private brasserieDataService: BrasserieDataService) {

  }

  ngOnInit() {
    this.brasserieDataService.getBrasseries().pipe(take(1)).subscribe(
      (brasseries) => {
        this.brasseries = brasseries;
        this.filteredBrasseries = this.brasseries;
      });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log("detected changes");
    if (simpleChanges.filter.currentValue != simpleChanges.filter.previousValue) {
      this.filteredBrasseries = this.brasseries.filter((brasserie) => brasserie.name.startsWith(simpleChanges.filter.currentValue));
    }
  }
}
