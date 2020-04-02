// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetChart, configWidgetPriceFix, Indicators } from "../../components/config-chart/data-display";
declare const TradingView: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, AfterViewInit {

  public loadViewDone = false;
  public selectedCar2: string = 'BTC/USDT';
  public flags: any = {
    showTicketTab: true,
    showTicket: true,
    heightChart: 84
  };
  public indicators: any[] = Indicators;
  public selectedIndicators: any;

  public onChangeLocale(e): void {
    this.ngAfterViewInit();
  }

  public onChangeSymbol(e): void {
    this.initialChart();
  }

  public onChangeTicket(e): void {
    this.initialTicket();
  }

  public onChangeTicketTab(e): void {
    this.initialTicketTab();
  }

  public onChangeTickerChecked(): void {
    if (this.flags.showTicket && this.flags.showTicketTab) {
      this.flags.heightChart = 84;
    } else if (this.flags.showTicket && !this.flags.showTicketTab) {
      this.flags.heightChart = 93;
    } else if (!this.flags.showTicket && this.flags.showTicketTab) {
      this.flags.heightChart = 90;
    } else {
      this.flags.heightChart = 99;
    }
  }

  public onIndicator(e): void {
    this.selectedIndicators = e.value;
    const data = JSON.stringify(e.value.map(m => ({ id: m })));
    localStorage.setItem('indicator_btc_vn', data);
    this.initialChart();
  }

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
    this.initialIndiactor();
  }

  ngAfterViewInit() {
    this.setupLocale();
    this.initialChart();
    this.initialTicketTab();
    this.initialTicket();
  }

  private initialTicketTab(): void {
    document.getElementById("widget-cryptoprices-fix").innerHTML = '';
    configWidgetPriceFix.symbols = JSON.parse(localStorage.getItem('ticket_tab_btc_vn'));
    const pricesFix = {
      id: 'widget-cryptoprices-fix',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-tickers.js',
      text: JSON.stringify(configWidgetPriceFix)
    }
    this.renderScript(pricesFix);
  }

  private initialTicket(): void {
    document.getElementById("widget-cryptoprices").innerHTML = '';
    configWidgetPrice.symbols = JSON.parse(localStorage.getItem('ticket_btc_vn'));
    const prices = {
      id: 'widget-cryptoprices',
      link: 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js',
      text: JSON.stringify(configWidgetPrice)
    }
    this.renderScript(prices);
  }

  private initialChart(): void {
    configWidgetChart.config.studies = JSON.parse(localStorage.getItem('indicator_btc_vn'));
    configWidgetChart.config.symbol = `BINANCE:${localStorage.getItem('symbol_btc_vn').replace('/', '')}`;
    new TradingView.widget(configWidgetChart.config);
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
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetChart.config.locale = e ? e : l;
    configWidgetPrice.locale = e ? e : l;
  }

  private initialIndiactor(): void {
    const indicatorActive = localStorage.getItem('indicator_btc_vn');
    if (indicatorActive === undefined || indicatorActive === null) {
      this.selectedIndicators = configWidgetChart.config.studies.map(m => (m.id));
      localStorage.setItem('indicator_btc_vn', JSON.stringify(configWidgetChart.config.studies));
    } else {
      this.selectedIndicators = JSON.parse(indicatorActive).map(e => (e.id));
    }
  }
}
