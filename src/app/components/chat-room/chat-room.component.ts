// 1. import dependencies
import { Renderer2, Inject, Component, OnInit, AfterViewInit } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { configWidgetPrice, configWidgetChatRoom, localeFormats } from "../../components/config-chart/data-display";
declare const TradingView: any;
declare const Intl: any;

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  // 2. pass then in constructor
  constructor(
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document
  ) {  }

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
    configWidgetChatRoom.locale = localStorage.getItem('locale');
    new TradingView.ChatWidgetEmbed(configWidgetChatRoom);
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
