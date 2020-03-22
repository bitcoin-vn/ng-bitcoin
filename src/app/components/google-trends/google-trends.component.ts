// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-google-trends',
  templateUrl: './google-trends.component.html',
  styleUrls: ['./google-trends.component.scss']
})
export class GoogleTrendsComponent implements OnInit {

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const google = {
      id: 'widget-googleTrend',
      text: `trends.embed.renderExploreWidget("TIMESERIES", {
        "comparisonItem": [{
          "keyword": "Bitcoin",
          "geo": "",
          "time": "today 12-m"
        }],
        "category": 0,
        "property": ""
      }, {
        "exploreQuery": "q=Bitcoin&date=today 12-m",
        "guestPath": "https://trends.google.com.vn:443/trends/embed/"
      });`
    }
    this.renderScript(google);
  }
  // 3. call them in ngOnInit
  private renderScript(obj): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.text = obj.text;
    this.renderer2.appendChild(this.document.getElementById(obj.id), s);
  }
}
