import { Component, OnInit, Inject, Renderer2, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPriceFix, configWidgetPrice } from "../../components/config-chart/data-display";

@Component({
  selector: 'app-convert-usd-to-btc',
  templateUrl: './convert-usd-to-btc.component.html',
  styleUrls: ['./convert-usd-to-btc.component.scss']
})
export class ConvertUsdToBtcComponent implements OnInit, AfterViewInit {

  selectedBtc: any;
  cars = [
    { label: 'Audi', value: 'Audi' },
    { label: 'BMW', value: 'BMW' },
    { label: 'Fiat', value: 'Fiat' },
    { label: 'Ford', value: 'Ford' },
    { label: 'Honda', value: 'Honda' },
    { label: 'Jaguar', value: 'Jaguar' },
    { label: 'Mercedes', value: 'Mercedes' },
    { label: 'Renault', value: 'Renault' },
    { label: 'VW', value: 'VW' },
    { label: 'Volvo', value: 'Volvo' }
  ];
  public loadViewDone = false;
  public selectedCar2: string = 'BTC/USDT';
  public flags: any = {
    showTicketTab: true,
    showTicket: true,
    heightChart: 84
  };

  public onChangeLocale(e): void {
    this.ngAfterViewInit();
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

  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) { }

  ngOnInit() {
  }

  onUpdateAmout() { }

  onCalculator(e) {
    // if(!this.state.amount.trim()){
    //     alert("Vui lòng kiểm tra lại số tiền bạn muốn chuyển đổi");
    // } else {
    //     var myUrl = 'https://api.cryptonator.com/api/ticker/btc-usd';
    //     axios.get(myUrl)
    //     .then(res => {
    //         this.setState({output: this.moneyFormat(this.state.amount * res.data.ticker.price, "USD")});
    //         this.setState({rate:  this.moneyFormat(res.data.ticker.price,'USD')});
    //     })
    // }
  }

  ngAfterViewInit() {
    this.setupLocale();
    this.initialTicketTab();
    this.initialTicket();
  }

  private setupLocale(e: string = null): void {
    const l = localStorage.getItem('locale_btc_vn');
    configWidgetPrice.locale = e ? e : l;
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

  // 3. call them in ngOnInit
  private renderScript(obj): void {
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = obj.link;
    s.text = obj.text;
    this.renderer2.appendChild(this.document.getElementById(obj.id), s);
  }

}
