// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetChart, configWidgetPriceFix, Cryptos } from "../../components/config-chart/data-display";
declare const TradingView: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterViewInit {
  public wigets = configWidgetChart.type;

  public activeWiget: any = this.wigets[0];
  public loadViewDone = false;
  selectedCar2: string = 'BTC/USDT';
  public cryptos: any[] = Cryptos;

  public onSelectChart(item): void {
    this.activeWiget = item;
    const CONFIG = configWidgetChart.config;
    CONFIG.symbol = item.code;
    new TradingView.widget(CONFIG);
  }

  public onChangeLocale(e): void {
    this.ngAfterViewInit();
  }

  public onChangeCryptocurrency(e): void {
    this.onSelectChart({
      'code': `BINANCE:${e.value.replace('/', '')}`,
      'name': e.value
    });
  }

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setupLocale();
    document.getElementById("widget-cryptoprices-fix").innerHTML = '';
    document.getElementById("widget-cryptoprices").innerHTML = '';
    const pricesFix = {
      id: 'widget-cryptoprices-fix',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js',
      text: JSON.stringify(configWidgetPriceFix)
    }
    this.renderScript(pricesFix);
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

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale');
    configWidgetChart.config.locale = e ? e : l;
    configWidgetPrice.locale = e ? e : l;
  }

}
