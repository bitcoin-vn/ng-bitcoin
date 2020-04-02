import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FullLocales, Cryptos, configWidgetPrice, configWidgetPriceFix } from "../../../components/config-chart/data-display";
interface Locale {
  label: string,
  value: string
}
declare const Intl: any;

@Component({
  selector: 'app-menu-right',
  templateUrl: './menu-right.component.html',
  styleUrls: ['./menu-right.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('800ms ease-in'))
    ])
  ]
})
export class MenuRightComponent implements OnInit {
  @Output() public onChangeLocale = new EventEmitter();
  @Output() public onChangeSymbol = new EventEmitter();
  @Output() public onChangeTicket = new EventEmitter();
  @Output() public onChangeTicketTab = new EventEmitter();
  @Output() public onChangeTickerChecked = new EventEmitter();
  @Output() public onChangeTickerTabChecked = new EventEmitter();

  public showHide = false;
  public piSpinner = 'default';

  public selectedLocale: string = 'vi_VN';
  public locales: any[] = FullLocales;
  public selectedSymbol: string = 'BTC/USDT';
  public symbol: any[] = Cryptos;
  public isTickerChecked: boolean = true;
  public isTickerTabChecked: boolean = true;

  public selectedTickets: any[];
  public tickets: any[] = [];
  public selectedTicketsTab: any[];
  public ticketsTab: any[] = [];

  public onShowHide() {
    this.showHide = !this.showHide
    this.piSpinner = (this.piSpinner === 'default' ? 'rotated' : 'default');
  }

  public onLocale(e) {
    const locale: Locale = FullLocales.filter((f: Locale) => f.value === e.value)[0];
    localStorage.setItem('locale_btc_vn', locale.value);
    this.onChangeLocale.emit(locale.value);
  }

  public onSymbol(e) {
    localStorage.setItem('symbol_btc_vn', e.value);
    this.selectedTickets = e.value;
    this.onChangeSymbol.emit(e);
  }

  public onTicket(e) {
    this.selectedTickets = e.value;
    const data = JSON.stringify(e.value.map(m => ({ title: m, proName: `BINANCE:${m.replace('/', '')}` })));
    localStorage.setItem('ticket_btc_vn', data);
    this.onChangeTicket.emit(e);
  }

  public onTicketTab(e) {
    this.selectedTicketsTab = e.value;
    const data = JSON.stringify(e.value.map(m => ({ description: m, proName: `BINANCE:${m.replace('/', '')}` })));
    localStorage.setItem('ticket_tab_btc_vn', data);
    this.onChangeTicketTab.emit(e);
  }

  public onTickerChecked(e): void {
    this.onChangeTickerChecked.emit(e.checked);
  }

  public onTickerTabChecked(e): void {
    this.onChangeTickerTabChecked.emit(e.checked);
  }

  public onReset(): void {
    localStorage.clear();
  }

  constructor() {
  }

  ngOnInit() {
    this.initialLocale();
    this.initialSymbol();
    this.initialTicket();
    this.initialTicketTab();
  }

  private initialLocale(): void {
    const localeActive = localStorage.getItem('locale_btc_vn');
    if (localeActive === undefined || localeActive === null) {
      const locale: Locale = FullLocales.filter((f: Locale) => f.value.split("_")[0] === new Intl.NumberFormat().resolvedOptions().locale)[0];
      this.selectedLocale = locale.value
      localStorage.setItem('locale_btc_vn', locale.value);
    } else {
      this.selectedLocale = localeActive;
    }
  }

  private initialSymbol(): void {
    const localeSymbol = localStorage.getItem('symbol_btc_vn');
    if (localeSymbol === undefined || localeSymbol === null) {
      localStorage.setItem('symbol_btc_vn', 'BTC/USDT');
    } else {
      this.selectedSymbol = localeSymbol;
    }
  }

  private initialTicket(): void {
    const ticketActive = localStorage.getItem('ticket_btc_vn');
    if (ticketActive === undefined || ticketActive === null) {
      this.selectedTickets = configWidgetPrice.symbols.map(e => (e.title))
      localStorage.setItem('ticket_btc_vn', JSON.stringify(configWidgetPrice.symbols));
    } else {
      this.selectedTickets = JSON.parse(ticketActive).map(e => (e.title));
    }
    this.tickets = Cryptos.map(f => ({ 'label': f.value, 'value': f.value }));
  }

  private initialTicketTab(): void {
    const ticketActive = localStorage.getItem('ticket_tab_btc_vn');
    if (ticketActive === undefined || ticketActive === null) {
      this.selectedTicketsTab = configWidgetPriceFix.symbols.map(e => (e.description))
      localStorage.setItem('ticket_tab_btc_vn', JSON.stringify(configWidgetPriceFix.symbols));
    } else {
      this.selectedTicketsTab = JSON.parse(ticketActive).map(e => (e.description));
    }
    this.ticketsTab = Cryptos.map(f => ({ 'label': f.value, 'value': f.value }));
  }

}
