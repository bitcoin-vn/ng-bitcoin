// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetAnalysis } from "../../components/config-chart/data-display";

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.scss']
})
export class AnalysisComponent implements OnInit, AfterViewInit {
  public wigets = configWidgetAnalysis.type;

  public activeWiget: any = this.wigets[0];
  public loadViewDone = false;

  public onSelectChart(item): void {
    this.activeWiget = item;
    const CONFIG2 = configWidgetAnalysis.config;
    CONFIG2.symbol = item.code;
    const analysis = {
      id: 'widget-analysis',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js',
      text: JSON.stringify(CONFIG2)
    }
    // Get the <ul> element with id="myList"
    const list = document.getElementById(analysis.id);
    // If the <ul> element has any child nodes, remove its first child node
    if (list.hasChildNodes()) {
      list.removeChild(list.childNodes[0]);
    }
    this.renderScript(analysis);
  }

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const prices = {
      id: 'widget-cryptoprices',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
      text: JSON.stringify(configWidgetPrice)
    }
    this.renderScript(prices);
    this.onSelectChart({
      'code': 'BINANCE:BTCUSDT',
      'name': 'BTC/USD'
    });
  }

  // 3. call them in ngOnInit
  private renderScript(obj): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = obj.link;
    s.text = obj.text;
    this.renderer2.appendChild(this.document.getElementById(obj.id), s);
  }

}
