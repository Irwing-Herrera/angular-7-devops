import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .example-viewport {
      height: 200px;
      width: 100%;
      border: 1px solid black;
    }
    
    .example-item {
      height: 50px;
    }
  `]
})
export class HomeComponent implements OnInit {

  @ViewChild(CdkVirtualScrollViewport, {static: false}) viewport: CdkVirtualScrollViewport;
  items = Array(500).fill(0);
  paises: any = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
    .subscribe(paises => this.paises= paises);
  }

  irFinal() {
    this.viewport.scrollToIndex(this.items.length);
  }

}
