import { Component, OnInit } from '@angular/core';
import { BrasserieDataService } from './brasserie-data.service';
import { IBrasserie } from './IBrasserie';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular';
  brasseries: IBrasserie[] = [];
  filter: string;

  constructor(private brasserieDataService: BrasserieDataService) {

  }

  ngOnInit() {
    this.brasserieDataService.getBrasseries().subscribe((brasseries) => {
      this.brasseries = brasseries;
    });
  }
}
