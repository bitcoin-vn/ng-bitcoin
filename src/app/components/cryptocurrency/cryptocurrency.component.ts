// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetCryptocurrency } from "../../components/config-chart/data-display";

@Component({
  selector: 'app-cryptocurrency',
  templateUrl: './cryptocurrency.component.html',
  styleUrls: ['./cryptocurrency.component.scss']
})
export class CryptocurrencyComponent implements OnInit, AfterViewInit {

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const CONFIG1 = JSON.stringify(configWidgetPrice);
    const prices = {
      id: 'widget-cryptoprices',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
      text: CONFIG1
    }
    this.renderScript(prices);
    const CONFIG2 = JSON.stringify(configWidgetCryptocurrency);
    const currency = {
      id: 'widget-cryptocurrency',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js',
      text: CONFIG2
    }
    this.renderScript(currency);
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
